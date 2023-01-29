import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import Portfolio from 'components/Portfolio/Portfolio';
import SocialsBox from 'components/SocialsBox/Socials';

const VideoGames = () => {
  return (
    <GlobalContainer
      loadingVariant='videoGamesLoading'
      readyVariant='videoGamesReady'
    >
      <PageTitle text='Video games' />
      <Portfolio />
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default VideoGames;
