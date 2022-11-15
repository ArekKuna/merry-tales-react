import Box from '../layout/Box/Box';
import Logo from '../layout/Logo/Logo';
import MainImage from '../components/MainImage/MainImage';
import AboutBox from '../components/AboutBox/AboutBox';
import VideoGamesBox from '../components/VideoGamesBox/VideoGamesBox';

const HomePage = () => {
  return (
    <main className='border-8 border-black'>
      <Box variant='logo'>
        <Logo />
      </Box>
      <Box>
        <MainImage />
      </Box>
      <Box variant='about'>
        <AboutBox />
      </Box>
      <Box variant='videoGames'>
        <VideoGamesBox />
      </Box>
      <Box>
        <h2>Tabletop Games</h2>
      </Box>
      <Box>Workshops</Box>
      <Box>Media</Box>
      <Box>Achievments</Box>
    </main>
  );
};

export default HomePage;
