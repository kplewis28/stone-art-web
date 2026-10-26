# Stone Art Precision · Website

Static site (HTML, CSS, vanilla JS), German (de-CH) with an English toggle.

- `site/`: the website (`index.html`, `impressum.html`, `datenschutz.html`, `styles.css`, `main.js`, `img/`, `fonts/`)
- `build.mjs`: copies `site/` to `dist/`

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Build output directory: `dist`
- No dependencies, no framework preset

## Local preview

```
npm run build && cd dist && python3 -m http.server 8850
```
