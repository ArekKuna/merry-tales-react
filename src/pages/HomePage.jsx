import Box from 'layout/Box/Box';
import Logo from 'layout/Logo/Logo';
import AboutBox from 'components/Boxes/AboutBox/AboutBox';
import VideoGamesBox from 'components/Boxes/VideoGamesBox/VideoGamesBox';
import WorkshopsBox from 'components/Boxes/WorkshopsBox/WorkshopsBox';
import MediaBox from 'components/Boxes/MediaBox/MediaBox';
import TabletopBox from 'components/Boxes/TabletopBox/TabletopBox';
import AchievementsBox from 'components/Boxes/AchievementsBox/AchievementsBox';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const HomePage = () => {
  return (
    <>
      <Box variant='logo'>
        <Logo />
      </Box>
      <Box variant='image'></Box>
      <Box variant='about'>
        <AboutBox />
      </Box>
      <Box variant='videoGames'>
        <VideoGamesBox />
      </Box>
      <Box variant='tabletop'>
        <TabletopBox />
      </Box>
      <Box variant='workshops'>
        <WorkshopsBox />
      </Box>
      <Box variant='media'>
        <MediaBox />
      </Box>
      <Box variant='achievements'>
        <AchievementsBox />
      </Box>
      <Box variant='socials'>
        <SocialsBox />
      </Box>
    </>
  );
};

export default HomePage;
