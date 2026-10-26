// The site is plain HTML/CSS/JS: the build only copies site/ into dist/,
// so Cloudflare Pages and Vercel can both serve it (output directory: dist).
import { cpSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
cpSync("site", "dist", { recursive: true });
console.log("Copied site/ to dist/");
