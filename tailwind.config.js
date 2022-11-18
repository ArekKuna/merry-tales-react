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
<<<<<<< HEAD
        '3/4': '75%',
        '1/2': '50%',
      },
      zIndex: {
        '100': '100'
=======
        '1/2': '50%' 
      },
      borderWidth: {
        '10': '10px'
>>>>>>> grid-layout
      }
    },
  },
  plugins: [],
};
