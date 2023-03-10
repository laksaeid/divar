/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': 'vazir',
      },
    },
  },
  plugins: [],
}