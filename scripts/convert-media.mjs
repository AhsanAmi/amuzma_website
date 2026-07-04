/**
 * One-off script: converts every PNG/JPG/JPEG in public/media to a resized,
 * compressed WebP, deletes the original, and writes a rename map used to
 * update source-code references.
 *
 * Usage: node scripts/convert-media.mjs
 */
import { readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MEDIA_DIR = path.resolve("public/media");
const MAX_WIDTH = 1920;
const QUALITY = 80;

const files = await readdir(MEDIA_DIR);
const targets = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

const renameMap = {};
let before = 0;
let after = 0;

for (const file of targets) {
  const srcPath = path.join(MEDIA_DIR, file);
  const base = file.replace(/\.(png|jpe?g)$/i, "");
  let outName = `${base}.webp`;

  // Avoid clobbering a pre-existing .webp with the same basename.
  if (files.includes(outName)) {
    outName = `${base}-opt.webp`;
  }

  const outPath = path.join(MEDIA_DIR, outName);
  const srcSize = (await stat(srcPath)).size;

  try {
    await sharp(srcPath)
      .rotate() // respect EXIF orientation
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);
  } catch (err) {
    console.error(`FAILED: ${file}: ${err.message}`);
    continue;
  }

  const outSize = (await stat(outPath)).size;
  before += srcSize;
  after += outSize;
  renameMap[file] = outName;
  await unlink(srcPath);
  console.log(
    `${file} (${(srcSize / 1024).toFixed(0)} KB) -> ${outName} (${(outSize / 1024).toFixed(0)} KB)`,
  );
}

await writeFile(
  path.resolve("scripts/media-rename-map.json"),
  JSON.stringify(renameMap, null, 2),
);

console.log(
  `\nDone. ${Object.keys(renameMap).length} files converted: ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB`,
);
