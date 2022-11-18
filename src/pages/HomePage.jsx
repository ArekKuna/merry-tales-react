import Box from 'layout/Box/Box';
import Logo from 'layout/Logo/Logo';
import MainImage from 'components/MainImage/MainImage';
import AboutBox from 'components/Boxes/AboutBox/AboutBox';
import VideoGamesBox from 'components/Boxes/VideoGamesBox/VideoGamesBox';
import WorkshopsBox from 'components/Boxes/WorkshopsBox/WorkshopsBox';
import MediaBox from '../components/Boxes/MediaBox/MediaBox';
import TabletopSlider from '../components/HomePage/TabletopSlider/TabletopSlider';
import AchievementsBox from 'components/Boxes/AchievementsBox/AchievementsBox';
import SocialsBox from '../components/Boxes/SocialsBox/Socials';

const HomePage = () => {
  return (
    <main className='border-10 border-black'>
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
      <Box variant='workshops'>
        <WorkshopsBox />
      </Box>
      <Box variant='media'>
        <MediaBox />
      </Box>
      <Box variant='tabletop'>
        <TabletopSlider />
      </Box>
      <Box variant='achievements'>
        <AchievementsBox />
      </Box>
      <Box>
        <SocialsBox />
      </Box>
    </main>
  );
};

export default HomePage;
