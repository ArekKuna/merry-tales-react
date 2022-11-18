/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      fontFamily: {
        sans: ['Sono', 'sans-serif'],
      },
      maxWidth: {
        '1/2': '50%' 
      },
      borderWidth: {
        '10': '10px'
      },
      padding: {
        'header': '82px'
      }
    },
  },
  plugins: [],
};
