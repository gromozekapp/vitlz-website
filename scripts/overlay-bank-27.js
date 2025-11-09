import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const projectRoot = process.cwd();
const imagesDir = path.join(projectRoot, 'images', 'bank');
const baseName = 'bank-27';

function buildOverlaySvg(width, height) {
    const pad = Math.round(width * 0.04);
    const fontSize = Math.round(width * 0.05); // 5% width
    const lineYTop = Math.round(height * 0.18);
    const lineYBottom = Math.round(height * 0.55);
    const leftX = Math.round(width * 0.28);
    const rightX = Math.round(width * 0.72);
    const textDy = -10;
    // cover rectangles to hide old labels (soft rounded, light fill)
    const coverW = Math.round(width * 0.34);
    const coverH = Math.round(height * 0.16);
    const coverY = Math.round(height * 0.06);
    const leftCoverX = Math.round(leftX - coverW / 2);
    const rightCoverX = Math.round(rightX - coverW / 2);
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#ffffff" flood-opacity="0.8"/>
    </filter>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2"/>
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f2f6fb"/>
      <stop offset="100%" stop-color="#e9eff7"/>
    </linearGradient>
  </defs>
  <!-- soft covers over old labels -->
  <g opacity="0.96" filter="url(#soft)">
    <rect x="${leftCoverX}" y="${coverY}" width="${coverW}" height="${coverH}" rx="${Math.round(coverH*0.25)}" fill="url(#bgGrad)"/>
    <rect x="${rightCoverX}" y="${coverY}" width="${coverW}" height="${coverH}" rx="${Math.round(coverH*0.25)}" fill="url(#bgGrad)"/>
  </g>
  <g fill="#0f0f23" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" text-anchor="middle" font-weight="700" filter="url(#shadow)">
    <!-- left label -->
    <text x="${leftX}" y="${lineYTop + textDy}" font-size="${fontSize}">Slimness</text>
    <line x1="${leftX}" y1="${lineYTop}" x2="${leftX}" y2="${lineYBottom}" stroke="#0f0f23" stroke-width="3" stroke-dasharray="6,10" stroke-linecap="round" />
    <!-- right label -->
    <text x="${rightX}" y="${lineYTop + textDy}" font-size="${fontSize}">Energy</text>
    <line x1="${rightX}" y1="${lineYTop}" x2="${rightX}" y2="${lineYBottom}" stroke="#0f0f23" stroke-width="3" stroke-dasharray="6,10" stroke-linecap="round" />
  </g>
</svg>`;
}

async function overlayAndSave(srcPath, outputs) {
    const input = sharp(srcPath);
    const meta = await input.metadata();
    const width = meta.width || 1200;
    const height = meta.height || 900;
    const overlaySvg = Buffer.from(buildOverlaySvg(width, height));
    const base = input.composite([{ input: overlaySvg }]);
    for (const out of outputs) {
        const { file, format } = out;
        const tmp = file + '.tmp';
        const pipeline = base.clone();
        if (format === 'avif') {
            await pipeline.avif({ quality: 75 }).toFile(tmp);
        } else if (format === 'webp') {
            await pipeline.webp({ quality: 80 }).toFile(tmp);
        } else if (format === 'jpg') {
            await pipeline.jpeg({ quality: 85 }).toFile(tmp);
        } else if (format === 'png') {
            await pipeline.png().toFile(tmp);
        }
        // atomic replace
        await fs.rename(tmp, file);
        console.log('Wrote', file);
    }
}

async function main() {
    const avifPath = path.join(imagesDir, `${baseName}.avif`);
    const jpgPath = path.join(imagesDir, `${baseName}.jpg`);
    const webpPath = path.join(imagesDir, `${baseName}.webp`);
    // choose best source available (prefer AVIF, else JPG)
    let src = avifPath;
    try { await fs.access(src); } catch { src = jpgPath; }
    const outputs = [
        { file: avifPath, format: 'avif' },
        { file: webpPath, format: 'webp' },
        { file: jpgPath, format: 'jpg' },
    ];
    await overlayAndSave(src, outputs);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});


