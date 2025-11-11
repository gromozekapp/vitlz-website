/**
 * Fetches deeper article content for 29 posts from https://healthis.ru/bank/
 * and writes sanitized JSON to data/bank.json
 *
 * Usage:
 *   npm run fetch:bank-articles
 */
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const ROOT = path.resolve(process.cwd());
const OUT_DIR = path.join(ROOT, 'data');
const OUT_FILE = path.join(OUT_DIR, 'bank.json');
const JS_DIR = path.join(ROOT, 'js');
const OUT_JS = path.join(JS_DIR, 'bank.data.js');
const BASE = 'https://healthis.ru';
const START_URL = `${BASE}/bank/`;
const TARGET_COUNT = 29;

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function fetchHtml(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return await res.text();
}

function absolutize(href) {
  try {
    return new URL(href, BASE).href;
  } catch {
    return href;
  }
}

function extractLinksFromArchive(html) {
  const $ = cheerio.load(html);
  const links = new Set();
  $('a').each((_, a) => {
    const href = $(a).attr('href') || '';
    if (!href) return;
    const full = absolutize(href);
    if (!/\/bank\//.test(full)) return;
    if (/\/bank\/$/.test(full)) return; // skip the archive root
    if (/comment|#/.test(full)) return;
    if (!/\.(jpg|jpeg|png|webp|avif|pdf|zip)$/i.test(full)) {
      if (/\/bank\/[^/]+\/?$/.test(full)) {
        links.add(full);
      }
    }
  });
  // Fallback: collect post card links
  if (links.size < 8) {
    $('a').each((_, a) => {
      const href = $(a).attr('href') || '';
      const full = absolutize(href);
      if (!/\/bank\//.test(full)) return;
      if (/\/bank\/$/.test(full)) return;
      if (!/\.(jpg|jpeg|png|webp|avif|pdf|zip)$/i.test(full)) {
        links.add(full);
      }
    });
  }
  return Array.from(links);
}

function sanitizeArticleContent(html) {
  const $ = cheerio.load(html || '');
  // Remove unwanted nodes
  $('script, style, noscript, iframe, form, svg').remove();
  // Normalize links
  $('a').each((_, a) => {
    const $a = $(a);
    const href = $a.attr('href');
    if (href) $a.attr('href', absolutize(href));
    $a.attr('target', '_blank');
    $a.attr('rel', 'noreferrer noopener');
    // strip other attributes
    Array.from(a.attributes || []).forEach(attr => {
      if (!['href','target','rel'].includes(attr.name)) $a.removeAttr(attr.name);
    });
  });
  // Strip attributes from other tags
  $('*').each((_, el) => {
    Array.from(el.attributes || []).forEach(attr => {
      if (!['href','target','rel'].includes(attr.name)) el.attribs && delete el.attribs[attr.name];
    });
  });
  // Keep only allowed tags; unwrap others
  const allowed = new Set(['p','h2','h3','h4','ul','ol','li','strong','em','b','i','a','blockquote','details','summary','div','span']);
  $('*').each((_, el) => {
    if (!allowed.has(el.tagName)) {
      const $el = $(el);
      $el.replaceWith($el.contents());
    }
  });
  // Build our own accordions: wrap sections under h2/h3 into <details>
  const rootChildren = $('body').children().length ? $('body').children() : $.root().children();
  const nodes = Array.from(rootChildren);
  const out = cheerio.load('<div class="__root__"></div>') // temp container
  const $outRoot = out('div.__root__');
  let i = 0;
  // Collect leading intro until first heading
  while (i < nodes.length && !/^(h2|h3)$/i.test(nodes[i].tagName || '')) {
    $outRoot.append($(nodes[i]).clone());
    i++;
  }
  while (i < nodes.length) {
    if (/^(h2|h3)$/i.test(nodes[i].tagName || '')) {
      const heading = $(nodes[i]).clone();
      i++;
      const section = out('<details></details>');
      const sum = out('<summary></summary>');
      sum.append(heading.text());
      section.append(sum);
      const body = out('<div></div>');
      while (i < nodes.length && !/^(h2|h3)$/i.test(nodes[i].tagName || '')) {
        body.append($(nodes[i]).clone());
        i++;
      }
      section.append(body);
      $outRoot.append(section);
    } else {
      // safety: append and move on
      $outRoot.append($(nodes[i]).clone());
      i++;
    }
  }
  return $outRoot.html() || '';
}

function extractDate($root) {
  // Try <time> tag, else search by regex
  const timeText = $root.find('time').first().text().trim();
  const inTime = timeText.match(/\d{2}\.\d{2}\.\d{4}/);
  if (inTime) return inTime[0];
  const bodyText = $root.text();
  const m = bodyText.match(/\b(\d{2}\.\d{2}\.\d{4})\b/);
  return m ? m[1] : '';
}

function extractTitle($) {
  const h1 = $('h1').first().text().trim();
  if (h1) return h1;
  const og = $('meta[property="og:title"]').attr('content');
  if (og) return og.trim();
  return '';
}

function firstParagraphText(html) {
  const $ = cheerio.load(html);
  const p = $('p').first().text().trim();
  return p || '';
}

async function fetchPost(url) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const title = extractTitle($);
  const $entry = $('.entry-content').first().length ? $('.entry-content').first() : $('article').first();
  const date = extractDate($entry.length ? $entry : $);
  const contentHtml = sanitizeArticleContent($entry.length ? $entry.html() : $('body').html());
  const summary = firstParagraphText(contentHtml);
  return { url, title, date, summary, contentHtml };
}

async function main() {
  await ensureDir(OUT_DIR);
  await ensureDir(JS_DIR);
  // Collect links from archive pages
  const links = [];
  let page = 1;
  while (links.length < TARGET_COUNT) {
    const url = page === 1 ? START_URL : `${START_URL}page/${page}/`;
    try {
      const html = await fetchHtml(url);
      const found = extractLinksFromArchive(html);
      for (const l of found) {
        if (!links.includes(l)) links.push(l);
        if (links.length >= TARGET_COUNT) break;
      }
      if (found.length === 0) break;
      page += 1;
    } catch (e) {
      break;
    }
  }
  const picked = links.slice(0, TARGET_COUNT);
  console.log(`Found ${picked.length} links. Fetching posts…`);
  const results = [];
  for (let i = 0; i < picked.length; i++) {
    const href = picked[i];
    process.stdout.write(`[${i + 1}/${picked.length}] ${href} … `);
    try {
      const post = await fetchPost(href);
      results.push(post);
      console.log('ok');
    } catch (e) {
      console.log(`skip (${e.message})`);
    }
  }
  const payload = { generatedAt: new Date().toISOString(), items: results };
  await fs.promises.writeFile(OUT_FILE, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`Saved -> ${path.relative(ROOT, OUT_FILE)}`);
  // Also emit JS bundle for file:// usage (no fetch/CORS issues)
  const js = `// Auto-generated. Do not edit.\n` +
             `window.__BANK_DATA__ = ${JSON.stringify(payload)};\n`;
  await fs.promises.writeFile(OUT_JS, js, 'utf8');
  console.log(`Saved -> ${path.relative(ROOT, OUT_JS)}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


