const VideoGamesSliderSlide = ({ image }) => {
  return (
    <img
      srcSet={image.srcSet}
      src={image.src}
      alt={image.alt}
      sizes='100vw'
      loading='lazy'
      className='w-full h-full cursor-pointer'
    />
  );
};

export default VideoGamesSliderSlide;
