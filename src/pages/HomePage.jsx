import Main from 'layout/Main/Main';
import Box from 'layout/Box/Box';
import Logo from 'layout/Logo/Logo';
import MainImage from 'components/MainImage/MainImage';
import AboutBox from 'components/Boxes/AboutBox/AboutBox';
import VideoGamesBox from 'components/Boxes/VideoGamesBox/VideoGamesBox';
import WorkshopsBox from 'components/Boxes/WorkshopsBox/WorkshopsBox';
import MediaBox from 'components/Boxes/MediaBox/MediaBox';
import TabletopBox from 'components/Boxes/TabletopBox/TabletopBox';
import AchievementsBox from 'components/Boxes/AchievementsBox/AchievementsBox';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const HomePage = () => {
  return (
    <Main>
      <Box>
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
        <TabletopBox />
      </Box>
      <Box variant='achievements'>
        <AchievementsBox />
      </Box>
      <Box>
        <SocialsBox />
      </Box>
    </Main>
  );
};

export default HomePage;
