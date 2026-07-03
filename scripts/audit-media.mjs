import fs from "fs";
import path from "path";

const mediaDir = "d:/Amuzma/public/media";
const scanRoot = "d:/Amuzma/src";

function walk(dir, exts, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules" && ent.name !== ".next") {
      walk(p, exts, files);
    } else if (ent.isFile() && exts.some((e) => ent.name.endsWith(e))) {
      files.push(p);
    }
  }
  return files;
}

const allMedia = fs
  .readdirSync(mediaDir)
  .filter((f) => fs.statSync(path.join(mediaDir, f)).isFile());

const refs = new Set();
const re = /\/media\/[^"']+/g;

for (const file of walk(scanRoot, [".tsx", ".ts", ".jsx", ".js", ".css", ".html", ".json"])) {
  const content = fs.readFileSync(file, "utf8");
  let m;
  while ((m = re.exec(content)) !== null) {
    const filename = decodeURIComponent(m[0].slice("/media/".length));
    refs.add(filename);
  }
}

const used = [];
const unused = [];
for (const f of allMedia) {
  if (refs.has(f)) used.push(f);
  else unused.push(f);
}

const missing = [...refs].filter((r) => !allMedia.includes(r)).sort();

console.log("Total media files:", allMedia.length);
console.log("Referenced in code:", refs.size);
console.log("Used (exist):", used.length);
console.log("Unused:", unused.length);
console.log("Referenced but missing:", missing.length);

fs.writeFileSync("d:/Amuzma/.media-audit-used.txt", used.sort().join("\n"));
fs.writeFileSync("d:/Amuzma/.media-audit-unused.txt", unused.sort().join("\n"));
fs.writeFileSync("d:/Amuzma/.media-audit-missing.txt", missing.join("\n"));
console.log("Reports written to .media-audit-*.txt");
