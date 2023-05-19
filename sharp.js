import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);

const exerciseImgs = glob.sync("./src/html-css/ejercicio-6/**/*.jpg");

// exerciseImgs.forEach((img) => {
//   const newName = img.replace("jpg", "webp");
//   console.log("Starting to process: ", img);
//   sharp(img)
//     .toFile(newName)
//     .then(() => {
//       // fs.copyFileSync(newName, newName.replace("js/ejercicio-04", "public"));
//       console.log("Done with: ", newName);
//     });
// });
