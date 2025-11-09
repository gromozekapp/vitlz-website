/**
 * Fetch 29 images from https://healthis.ru/bank/, mirror horizontally and resize 2x smaller.
 * Output: images/bank/bank-01.jpg ... bank-29.jpg
 *
 * Usage: npm run fetch:bank-images
 */
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const OUT_DIR = path.join(ROOT, 'images', 'bank');
const BASE = 'https://healthis.ru';
const START_URL = `${BASE}/bank/`;
const TARGET_COUNT = 29;

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function pad(num, size = 2) {
  return String(num).padStart(size, '0');
}

async function fetchHtml(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

function absolutize(url) {
  try {
    return new URL(url, BASE).href;
  } catch {
    return url;
  }
}

function extractImageUrls(html) {
  const $ = cheerio.load(html);
  // Collect images in the posts grid; bias towards WP uploads
  const urls = new Set();
  $('img').each((_, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src') || '';
    const clean = src.split('?')[0];
    if (!clean) return;
    // only wp uploads and large-ish thumbs
    if (/wp-content\/uploads/i.test(clean)) {
      urls.add(absolutize(clean));
    }
  });
  return Array.from(urls);
}

async function fetchArchiveImages() {
  const found = [];
  let page = 1;
  while (found.length < TARGET_COUNT) {
    const url = page === 1 ? START_URL : `${START_URL}page/${page}/`;
    try {
      const html = await fetchHtml(url);
      const urls = extractImageUrls(html);
      for (const u of urls) {
        if (!found.includes(u)) found.push(u);
        if (found.length >= TARGET_COUNT) break;
      }
      // Heuristic: stop if no new images found
      if (urls.length === 0) break;
      page += 1;
    } catch (e) {
      // likely no more pages
      break;
    }
  }
  return found.slice(0, TARGET_COUNT);
}

async function processAndSaveImage(buffer, index) {
  const num = pad(index + 1);
  const base = path.join(OUT_DIR, `bank-${num}`);
  const outJpg = `${base}.jpg`;
  const outWebp = `${base}.webp`;
  const outAvif = `${base}.avif`;
  const img = sharp(buffer);
  const meta = await img.metadata();
  const width = meta.width ? Math.max(1, Math.floor(meta.width / 2)) : undefined;
  let pipeline = img.flop();
  if (width) pipeline = pipeline.resize({ width });
  // Save three formats in parallel
  await Promise.all([
    pipeline.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(outJpg),
    pipeline.clone().webp({ quality: 82 }).toFile(outWebp),
    pipeline.clone().avif({ quality: 50 }).toFile(outAvif),
  ]);
  return [outJpg, outWebp, outAvif];
}

async function download(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Failed image ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  console.log('Fetching image URLs from Healthis bank…');
  await ensureDir(OUT_DIR);
  const urls = await fetchArchiveImages();
  if (urls.length < TARGET_COUNT) {
    console.warn(`Warning: collected only ${urls.length}/${TARGET_COUNT} image URLs. Proceeding with what we have.`);
  }
  let saved = 0;
  for (let i = 0; i < urls.length; i++) {
    const u = urls[i];
    try {
      process.stdout.write(`Downloading [${i + 1}] ${u} … `);
      const buf = await download(u);
      const outs = await processAndSaveImage(buf, i);
      console.log(`saved -> ${outs.map(o => path.relative(ROOT, o)).join(', ')}`);
      saved++;
    } catch (e) {
      console.log(`skip (${e.message})`);
    }
  }
  console.log(`Done. Saved ${saved} images to ${path.relative(ROOT, OUT_DIR)}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


