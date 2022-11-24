import { Link } from 'react-router-dom';

const VideoGamesSliderSlideText = ({ text }) => {
  return (
    <Link to='videoGames'>
      <p className='font-bold text-xl text-center underline underline-offset-4 sm:text-2xl lg:text-4xl xl:text-3xl'>
        {text}
      </p>
    </Link>
  );
};

export default VideoGamesSliderSlideText;
