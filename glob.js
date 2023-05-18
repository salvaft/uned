import { glob } from "glob";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const a = glob.sync("./src/**/*.html");
const b = glob.sync(path.resolve(__dirname, "src/**/*.html"));

console.log(a, b);