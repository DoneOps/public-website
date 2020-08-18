module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: false,
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
