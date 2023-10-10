/* eslint-disable no-undef */
// tailwind.config.js

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'tablet': '1140px',
      'xltablet': '1300px', 
      'laptop': '1700px'  
    },
    extend: {
      color: {
        'beige': '#FCF8EC',
        'lightBlue': '#D0E8F2',
        'cyan': '#79A3B1',
        'darkCyan': '#456268',
        'BgBlue': '#eaf5f9'
      }
    },
  },
  plugins: [
  ],
});