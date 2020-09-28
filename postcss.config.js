const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const presetEnv = require('postcss-preset-env')({
  autoprefixer: {
    flexbox: 'no-2009'
  },
  stage: 3,
  features: {
    'custom-properties': false,
    'nesting-rules': true
  }
});

const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssImport, tailwind, presetEnv, cssnano]
    : [postcssImport, tailwind, presetEnv];

module.exports = { plugins };
