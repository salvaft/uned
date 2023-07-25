import sharp from "sharp";
import { glob } from "glob";
// import path from "path";
// import { fileURLToPath } from "url";
// import fs from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const raw_extension = "png";
const converted_extension = "webp";
const path = `./src/public/uxui/ejercicio-5/**/*.`;
const exerciseImgs = glob.sync(path + raw_extension);
const alreadyTransformed = glob.sync(path + converted_extension);

exerciseImgs.forEach((img) => {
  const newName = img.replace(raw_extension, converted_extension);
  if (alreadyTransformed.includes(newName)) return;
  console.log("Starting to process: ", img);
  sharp(img)
    .toFile(newName)
    .then(() => {
      //       // fs.copyFileSync(newName, newName.replace("js/ejercicio-04", "public"));
      console.log("Done with: ", newName);
    });
});
