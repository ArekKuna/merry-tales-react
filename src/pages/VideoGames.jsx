import PageTitle from 'layout/PageTitle/PageTitle';
import Portfolio from 'components/Portfolio/Portfolio';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const VideoGames = () => {
  return (
    <>
      <PageTitle text='Video games' />
      <Portfolio />
      <SocialsBox variant='fixed' />
    </>
  );
};

export default VideoGames;
