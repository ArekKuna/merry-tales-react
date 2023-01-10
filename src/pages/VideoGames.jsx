import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import Portfolio from 'components/Portfolio/Portfolio';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const VideoGames = () => {
  return (
    <GlobalContainer variant='videoGames'>
      <PageTitle text='Video games' />
      <Portfolio />
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default VideoGames;
