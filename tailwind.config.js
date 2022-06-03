module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ripple: theme => ({
      colors: theme('colors'),
      darken: 0.06
  }),
    extend: {
      fontFamily: {
        sans: ['Raleway']
      },
      colors: {
        primary: '#26ABE2'
      }
    },
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}