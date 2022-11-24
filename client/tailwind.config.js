/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        red: 'hsl(8,62%,57%)',
        grey: 'hsl(0,16%,83%)',
        white: 'hsl(0,0%,100%)'
      }
    },
  },
  plugins: [],
}
