/* eslint-disable no-undef */
// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'tablet': '1140px',
    },
    extend: {
      color: {
        'beige': '#FCF8EC',
        'lightBlue': '#D0E8F2',
        'cyan': '#79A3B1',
        'darkCyan': '#456268'
      }
    },
  },
  plugins: [],
});