# vitlz-website

Brand website for [VITLZ](https://vitlz.eu) — EU wellness & supplements.

[![Live](https://img.shields.io/badge/live-vitlz.eu-34C759)]() 
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222222?logo=github)]()
[![CI](https://github.com/gromozekapp/vitlz-website/actions/workflows/ci.yml/badge.svg)](https://github.com/gromozekapp/vitlz-website/actions/workflows/ci.yml)

**Live:** [vitlz.eu](https://vitlz.eu)

Retro-futurist static site with multilingual support, product pages, and content management scripts.

---

## Features

- **Multilingual** — EN, DE, BG, RO via client-side i18n (`js/i18n.js`)
- **Product pages** — probiotics, multivitamins with eMAG marketplace links
- **Content bank** — supplement articles & data (`bank.html`, `data/bank.json`)
- **Blog posts** — article template (`post.html`)
- **Responsive design** — mobile-first, accessibility (skip links, ARIA)
- **Social links** — TikTok, Instagram, YouTube

---

## Stack

HTML · CSS · Vanilla JavaScript · Node.js (build scripts) · GitHub Pages

---

## Development

```bash
npm install

# Image pipeline
npm run convert-images

# Content sync scripts
npm run fetch:bank-images
npm run fetch:bank-articles
npm run overlay:bank27
```

### Local preview

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

---

## Project Structure

```
vitlz-website/
├── index.html          # Main landing
├── post.html           # Article template
├── bank.html           # Supplement data bank
├── style.css           # Global styles
├── js/
│   ├── main.js         # Interactions, forms
│   ├── i18n.js         # Localization
│   ├── bank.js         # Data bank UI
│   └── post.js         # Article rendering
├── scripts/            # Node fetch & image tools
├── data/               # JSON content
├── images/             # Assets, product photos
└── CNAME               # vitlz.eu custom domain
```

---

## Deployment

Hosted on **GitHub Pages** with custom domain `vitlz.eu` (see `CNAME`).

Push to `main` → automatic deploy via GitHub Pages.

---

## Related

Mobile apps (iOS/Android) — separate repos under NDA.
