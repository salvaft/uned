import { glob } from "glob";
import { fileURLToPath } from "url";
import path from "path";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const files = glob.sync(`${__dirname}/src/html-css/**/index.html`)

const files = glob.sync(`${__dirname}/src/js/**/*.html`, {
  ignore: "**/*/index.html",
});

files.forEach((file) => {
  fs.readFile(file, { encoding: "utf-8" }).then((contents) => {
    if (regex.test(contents)) {
      console.log(file);
      const newContents = contents.replace(regex, newString);
      fs.writeFile(file, newContents, { encoding: "utf-8" }).then(() =>
        console.log("Done with", file)
      );
    }
  });
});
const regex = /(<main>)([\S\s]*?)(<\/main>)/gim;
const newString = "$1<section>$2</section>$3";
// region:     === test
// const testString = `  <main>
// asdfasdfasdf

// <script>asdfadsf
// </script>

// </script>
// </main>

// `;

// const singleMatch = testString.match(regex);
// console.log(singleMatch);
// console.log(testString.replace(regex, "$1<section>$2</section>$3"));

// end region: === test
