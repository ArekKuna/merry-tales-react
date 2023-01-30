/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        professionalLowRes:
          'url(assets/backgrounds/professional/professional-bg-LowRes.webp)',
        professional1280:
          'url(assets/backgrounds/professional/professional-bg-1280.webp)',
        professional1920:
          'url(assets/backgrounds/professional/professional-bg-1920.webp)',
        videoGamesLowRes:
          'url(assets/backgrounds/video-games/video-games-bg-LowRes.webp)',
        videoGames1280:
          'url(assets/backgrounds/video-games/video-games-bg-1280.webp)',
        videoGames1920:
          'url(assets/backgrounds/video-games/video-games-bg-1920.webp)',
        tabletopLowRes:
          'url(assets/backgrounds/tabletop/tabletop-bg-LowRes.webp)',
        tabletop1280: 'url(assets/backgrounds/tabletop/tabletop-bg-1280.webp)',
        tabletop1920: 'url(assets/backgrounds/tabletop/tabletop-bg-1920.webp)',
        workshopsLowRes:
          'url(assets/backgrounds/workshops/workshops-bg-LowRes.webp)',
        workshops1280:
          'url(assets/backgrounds/workshops/workshops-bg-1280.webp)',
        workshops1920:
          'url(assets/backgrounds/workshops/workshops-bg-1920.webp)',
        mediaLowRes: 'url(assets/backgrounds/media/media-bg-LowRes.webp)',
        media1280: 'url(assets/backgrounds/media/media-bg-1280.webp)',
        media1920: 'url(assets/backgrounds/media/media-bg-1920.webp)',
        achievementsLowRes:
          'url(assets/backgrounds/achievements/achievements-bg-LowRes.webp)',
        achievements1280:
          'url(assets/backgrounds/achievements/achievements-bg-1280.webp)',
        achievements1920:
          'url(assets/backgrounds/achievements/achievements-bg-1920.webp)',
        notFoundLowRes:
          'url(assets/backgrounds/not-found/not-found-bg-LowRes.webp)',
        notFound1280:
          'url(assets/backgrounds/not-found/not-found-bg-1280.webp)',
        notFound1920:
          'url(assets/backgrounds/not-found/not-found-bg-1920.webp)',
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
