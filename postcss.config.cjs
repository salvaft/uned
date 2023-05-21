const postcssJitProps = require("postcss-jit-props");
const postcssPresetEnv = require("postcss-preset-env");
const OpenProps = require("open-props");

module.exports = {
  plugins: [
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
