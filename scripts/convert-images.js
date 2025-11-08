/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'images');

async function convertOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = filePath.slice(0, -ext.length);
  const fileName = path.basename(filePath);
  const rel = path.relative(IMAGES_DIR, filePath);

  const input = sharp(filePath);
  const metadata = await input.metadata();

  // Reasonable defaults for photos/cans
  const webpOut = `${base}.webp`;
  const avifOut = `${base}.avif`;

  // Skip if already exist and newer
  const needs = (outPath) => {
    if (!fs.existsSync(outPath)) return true;
    const inStat = fs.statSync(filePath);
    const outStat = fs.statSync(outPath);
    return inStat.mtimeMs > outStat.mtimeMs;
  };

  if (needs(webpOut)) {
    await input
      .clone()
      .webp({ quality: 82 })
      .toFile(webpOut);
    console.log(`✓ WEBP: ${rel} -> ${path.basename(webpOut)}`);
  } else {
    console.log(`• WEBP up-to-date: ${rel}`);
  }

  if (needs(avifOut)) {
    await input
      .clone()
      .avif({ quality: 55, effort: 4 }) // good balance
      .toFile(avifOut);
    console.log(`✓ AVIF: ${rel} -> ${path.basename(avifOut)}`);
  } else {
    console.log(`• AVIF up-to-date: ${rel}`);
  }
}

async function run() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }
  const files = fs.readdirSync(IMAGES_DIR)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .map((f) => path.join(IMAGES_DIR, f));

  if (files.length === 0) {
    console.warn('No JPG/PNG files found in images/. Nothing to do.');
    return;
  }

  console.log(`Converting ${files.length} image(s) in ${IMAGES_DIR} ...`);
  for (const file of files) {
    try {
      await convertOne(file);
    } catch (err) {
      console.error(`× Failed: ${path.basename(file)} -> ${err.message}`);
    }
  }
  console.log('Done.');
}

run(); 

