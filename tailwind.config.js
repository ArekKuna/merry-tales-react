/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sono', 'sans-serif'],
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
        '4/6': '66%',
        '3/4': '75%',
      },
      borderWidth: {
        10: '10px',
      },
      padding: {
        header: '82px',
      },
      fontSize: {
        0: '0px',
      },
    },
  },
  plugins: [],
};
