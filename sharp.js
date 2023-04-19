import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exerciseImgs = glob.sync("./src/js/ejercicio-04/img/*.jpg");

exerciseImgs.forEach(async (img) => {
  const newName = img.replace("jpg", "webp");
  await sharp(img).toFile(newName);
  fs.copyFileSync(newName, newName.replace("js/ejercicio-04", "public"));
});
