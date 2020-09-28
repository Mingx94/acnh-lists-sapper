module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-120': 'repeat(auto-fill, minmax(120px, 1fr))'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
};
