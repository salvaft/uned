import { defineConfig } from "vite";
import { glob } from "glob";
import path, { dirname } from "path";

import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  root: path.join(__dirname, "src"),
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },
  assetsInclude: ["**/*.md"],
  build: {
    outDir: path.join(__dirname, "dist"),

    assetsInlineLimit: 0,
    modulePreload: false,
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src/**/*.html")),
    },
  },
});
