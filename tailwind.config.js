module.exports = {
  purge: {
    enabled: true,
    content: ['./views/*.pug', './views/**/*.pug'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'solitude': '#ecf0f1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
