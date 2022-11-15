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
        '3/4': '75%' 
      },
    },
  },
  plugins: [],
};
