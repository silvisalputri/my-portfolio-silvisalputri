/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#D0816F',
        secondary:'#3C4458'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

