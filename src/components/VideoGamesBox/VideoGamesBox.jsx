import { Link } from 'react-router-dom';

import HomePageSlider from '../HomePageSlider/HomePageSlider';

const VideoGamesBox = () => {
  return (
    <>
      <Link to='/videoGames'>
        <h2 className='text-4xl text-center font-black uppercase underline underline-offset-4'>
          Video Games
        </h2>
      </Link>
      <HomePageSlider />
    </>
  );
};

export default VideoGamesBox;
