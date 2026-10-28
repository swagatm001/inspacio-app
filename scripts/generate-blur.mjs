/**
 * Generates tiny base64 previews for every raster image under public/images so
 * pages can render a blurred placeholder while the real image loads.
 * Output: src/generated/blur-map.json  ("/images/foo.webp" -> "data:image/webp;base64,...")
 * Runs automatically before `next build`; run `npm run blur` after adding images.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const IMAGES = path.join(ROOT, "public", "images");
const OUT = path.join(ROOT, "src", "generated", "blur-map.json");
const EXT = new Set([".webp", ".jpg", ".jpeg", ".png"]);
const SKIP_DIRS = new Set(["client-logo", "instagram-cache"]);

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out.push(...(await walk(full)));
    } else if (EXT.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

const files = (await walk(IMAGES)).sort();
const map = {};
for (const file of files) {
  const key = "/" + path.relative(path.join(ROOT, "public"), file).split(path.sep).join("/");
  try {
    const buf = await sharp(file).resize(12, 12, { fit: "inside" }).webp({ quality: 30 }).toBuffer();
    map[key] = `data:image/webp;base64,${buf.toString("base64")}`;
  } catch (error) {
    console.warn(`skipped ${key}: ${error.message}`);
  }
}
await fs.mkdir(path.dirname(OUT), { recursive: true });
await fs.writeFile(OUT, JSON.stringify(map));
console.log(`blur map: ${Object.keys(map).length} images -> ${path.relative(ROOT, OUT)}`);
