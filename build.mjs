// The site is plain HTML/CSS/JS: the build copies site/ into dist/,
// so Cloudflare Pages and Vercel can both serve it (output directory: dist).
//
// Cache busting: browsers keep styles.css and main.js for a few hours, so an
// update would not show until that expires. The build adds a short hash of
// each file's contents to its link in the HTML (styles.css?v=1a2b3c4d), so
// every change gets a new URL and is picked up on the next page load.
import { cpSync, rmSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";

rmSync("dist", { recursive: true, force: true });
cpSync("site", "dist", { recursive: true });

const hash = f => createHash("sha256").update(readFileSync(`dist/${f}`)).digest("hex").slice(0, 8);
const assets = ["styles.css", "main.js"].map(f => [f, hash(f)]);

for (const page of readdirSync("dist").filter(f => f.endsWith(".html"))) {
  let html = readFileSync(`dist/${page}`, "utf8");
  for (const [f, h] of assets) html = html.replaceAll(`"${f}"`, `"${f}?v=${h}"`);
  writeFileSync(`dist/${page}`, html);
}

console.log("Copied site/ to dist/ · " + assets.map(([f, h]) => `${f}?v=${h}`).join(" · "));
