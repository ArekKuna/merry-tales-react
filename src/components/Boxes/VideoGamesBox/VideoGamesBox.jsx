import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import VideoGamesSlider from 'components/HomePage/VideoGamesSlider/VideoGamesSlider';

const VideoGamesBox = () => {
  return (
    <>
      <BoxTitle title='video games' to='videoGames' />
      <p className='text-lg sm:text-xl'>Passion for gaming</p>
      <VideoGamesSlider />
    </>
  );
};

export default VideoGamesBox;
