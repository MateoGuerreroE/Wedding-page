import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function listImages(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort();
}

const photosDir = path.join(__dirname, "..", "public", "photos");
const manifest = {
  couple: listImages(photosDir),
  general: listImages(path.join(photosDir, "protocol")),
};

const outPath = path.join(__dirname, "..", "lib", "photos-manifest.json");
fs.writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `Wrote ${manifest.couple.length} couple + ${manifest.general.length} general photos to ${path.relative(process.cwd(), outPath)}`,
);
