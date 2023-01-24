/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        hero1100: 'url(assets/hero-image/hero-1100.webp)',
        hero1800: 'url(assets/hero-image/hero-1800.webp)',
        hero2200: 'url(assets/hero-image/hero-2200.webp)',
        professional1280:
          'url(assets/backgrounds/professional/professional-1280.webp)',
        professional1920:
          'url(assets/backgrounds/professional/professional-1920.webp)',
        videoGames1280:
          'url(assets/backgrounds/video-games/video-games-bg-1280.webp)',
        videoGames1920:
          'url(assets/backgrounds/video-games/video-games-bg-1920.webp)',
        tabletop1280: 'url(assets/backgrounds/tabletop/tabletop-bg-1280.webp)',
        tabletop1920: 'url(assets/backgrounds/tabletop/tabletop-bg-1920.webp)',
        workshops1280: 'url(assets/backgrounds/workshops/workshops-1280.webp)',
        workshops1920: 'url(assets/backgrounds/workshops/workshops-1920.webp)',
        media1280: 'url(assets/backgrounds/media/media-1280.webp)',
        media1920: 'url(assets/backgrounds/media/media-1920.webp)',
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
        '4/6': '66%',
        '3/4': '75%',
      },
      height: {
        81: '20.5rem',
      },
      borderWidth: {
        10: '10px',
      },
      padding: {
        header: '60px',
      },
      fontSize: {
        0: '0px',
      },
      colors: {
        ghostWhite: '#f8f8ff',
      },
      keyframes: {
        expand: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        expand: 'expand 2s forwards',
      },
    },
  },
  plugins: [],
};
