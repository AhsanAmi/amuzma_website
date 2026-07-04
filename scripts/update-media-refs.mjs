/**
 * One-off script: rewrites "/media/<old>" references in src/ to the new
 * .webp filenames produced by convert-media.mjs.
 *
 * Usage: node scripts/update-media-refs.mjs
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const renameMap = JSON.parse(
  await readFile(path.resolve("scripts/media-rename-map.json"), "utf8"),
);

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collectFiles(full)));
    } else if (/\.(tsx?|jsx?|css|mjs)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const files = await collectFiles(path.resolve("src"));
let totalReplacements = 0;

for (const file of files) {
  const original = await readFile(file, "utf8");
  let updated = original;
  for (const [oldName, newName] of Object.entries(renameMap)) {
    updated = updated.split(`/media/${oldName}`).join(`/media/${newName}`);
  }
  if (updated !== original) {
    const count = Object.entries(renameMap).reduce(
      (n, [, newName]) => n + (updated.split(`/media/${newName}`).length - 1),
      0,
    );
    await writeFile(file, updated);
    console.log(`${path.relative(process.cwd(), file)}: updated`);
    totalReplacements += count;
  }
}

console.log(`\nDone. ${totalReplacements} references updated.`);
