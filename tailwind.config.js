module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Cormorant Garamond", "ui-serif", "Georgia"],
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)',
        },
        indigo: {
          light: '#b3bcf5',
          DEFAULT: 'hsl(240, 100%, 25%)',
          dark: '#202e78',
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
