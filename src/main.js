// This is for bundling purposes.
// CSS files are inlined in the html

import "@lib/colors";

// JIT postcss writes to styles.css and moves the import statement down, leaving without effect (atleast during dev mode)
import "@src/styles/pico.css";
import "@src/styles/styles.css";
