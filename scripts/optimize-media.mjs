// One-off image optimiser. Run by hand from the project root:  node scripts/optimize-media.mjs
// It is NOT part of the build and is safe to re-run (it only writes files that are missing or older than their source).
//
//   1. every .jpg under public/images  ->  .webp next to it (max 1600px wide, quality 78)
//   2. public/images/loader/*.webp     ->  400x400 cover crops for the loading cover (it is only 200px wide)
//   3. public/images/hero/hero-poster.webp  ->  the home hero video's still image
//   4. "-sm" variants (1000px wide) of the full-bleed band images, used below 768px
//
// After step 1 the .jpg originals are no longer referenced and can be deleted (git rm).
import sharp from "sharp";
import { readdir, stat, mkdir } from "node:fs/promises";
import path from "node:path";

const PUB = "public";
const kb = (n) => `${Math.round(n / 1024)} KB`;

async function isStale(src, dest) {
  try {
    const [s, d] = await Promise.all([stat(src), stat(dest)]);
    return d.mtimeMs < s.mtimeMs;
  } catch {
    return true;
  }
}

async function make(src, dest, pipeline, label) {
  if (!(await isStale(src, dest))) return;
  await mkdir(path.dirname(dest), { recursive: true });
  const out = await pipeline(sharp(src)).toFile(dest);
  console.log(`${label.padEnd(8)} ${dest.replace(PUB, "").padEnd(58)} ${kb((await stat(src)).size).padStart(7)} -> ${kb(out.size).padStart(7)}`);
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

// 1. JPG -> WebP
for (const f of (await walk(`${PUB}/images`)).filter((f) => /\.jpe?g$/i.test(f))) {
  await make(f, f.replace(/\.jpe?g$/i, ".webp"), (s) => s.resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78, effort: 6 }), "jpg>webp");
}

// 2. loading cover thumbnails (name -> source)
const loader = {
  brain: "innector/brain-g216ffd9b8_1920-1024x780",
  datacenter: "innector/datacenter",
  "custom-software": "innector/customsoftware",
  "digital-marketing": "innector/digitalmarketing",
  "mobile-app": "innector/mobile-app",
  branding: "innector/innectorbranding",
  erp: "innector/erp-image",
};
for (const [name, src] of Object.entries(loader)) {
  await make(`${PUB}/images/${src}.webp`, `${PUB}/images/loader/${name}.webp`, (s) => s.resize(400, 400, { fit: "cover" }).webp({ quality: 52, effort: 6 }), "loader");
}

// 3. hero poster
await make(`${PUB}/images/innector/brain-g216ffd9b8_1920-1024x780.webp`, `${PUB}/images/hero/hero-poster.webp`, (s) => s.resize({ width: 720, withoutEnlargement: true }).webp({ quality: 60, effort: 6 }), "poster");

// 4. small variants of the full-bleed bands
const bands = [
  "about/office-wide",
  "about/global-night",
  "pages/managed-it-band",
  "pages/contact-band",
  "pages/privacy-band",
  "services/process-divider",
];
for (const b of bands) {
  await make(`${PUB}/images/${b}.webp`, `${PUB}/images/${b}-sm.webp`, (s) => s.resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 68, effort: 6 }), "band-sm");
}
console.log("done");
