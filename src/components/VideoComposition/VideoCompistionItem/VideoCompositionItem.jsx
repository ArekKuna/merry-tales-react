import PlayIcon from 'components/Icons/PlayIcon/PlayIcon';
import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const VideoCompositionItem = ({
  video,
  onClick,
  activeVideoId,
  videoStartTimeStamp,
}) => {
  const highResImageurl = `http://img.youtube.com/vi/${video.embedID}/${video.HighQualityImage}.jpg`;

  const handleClick = () => {
    onClick(activeVideoId, videoStartTimeStamp);
  };

  return (
    <div className='relative w-[90%] max-w-sm mb-14 shadow-xl md:w-[40%] lg:max-w-[45%] xl:mb-0 xl:max-w-[15%] xl:flex xl:flex-col xl:cursor-pointer xl:hover:scale-150 xl:hover:z-20 xl:duration-500'>
      <h3
        className='mb-4 font-semibold text-center text-ghostWhite xl:absolute xl:h-full xl:w-full xl:mb-0 xl:px-2 xl:flex xl:justify-center xl:items-center xl:opacity-0 xl:cursor-pointer xl:z-20 xl:hover:opacity-100 xl:group-hover:scale-150 xl:duration-[300ms] xl:rounded-lg xl:bg-black/80'
        onClick={handleClick}
      >
        {video.title}
      </h3>
      <div className='relative w-full h-full rounded-lg ring-2 ring-white bg-gray-500'>
        <PlayIcon
          className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-20 w-20 opacity-70 z-20 text-gray-300 xl:hidden'
          onClick={handleClick}
        />
        <LowResImage
          src={video.LowQualityImage}
          alt={video.alt}
          variant='rounded'
        />
        <BlurredUpImage
          src={highResImageurl}
          alt={video.alt}
          sizes={video.sizes}
          variant='rounded'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default VideoCompositionItem;
