const postcssJitProps = require("postcss-jit-props");
const postcssPresetEnv = require("postcss-preset-env");
const OpenProps = require("open-props");
const autoprefixer = require("autoprefixer")
const tailwind = require("tailwindcss")
module.exports = {
  plugins: [tailwind, autoprefixer,
    postcssJitProps(OpenProps),
    postcssPresetEnv({
      stage: 2,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
      },
    }),
  ],
};
