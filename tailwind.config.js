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
      }
    },
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}