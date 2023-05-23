const postcssJitProps = require("postcss-jit-props");
// const postcssPresetEnv = require("postcss-preset-env");
const OpenProps = require("open-props");
// const autoprefixer = require("autoprefixer")
// const tailwind = require("tailwindcss")



module.exports = {
  // plugins: [
  // postcssJitProps(OpenProps),
  // postcssPresetEnv({
  //   stage: 2,
  //   features: {
  //     "nesting-rules": false,
  //     "custom-media-queries": true,
  //   },
  // }),
  // tailwind, autoprefixer,
  // ],
  plugins: {
    'postcss-jit-props':
      OpenProps,
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    // 'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      'stage': 2,
      features: {
        'nesting-rules': false,
        "custom-media-queries": true,
      },
    },
  }
};
