const VideoGamesSliderSlide = ({ srcSet, src, alt, sizes }) => {
  return (
    <img
      srcSet={srcSet}
      src={src}
      alt={alt}
      sizes={sizes}
      loading='lazy'
      className='xl:h-full xl:w-[120%]'
    />
  );
};

export default VideoGamesSliderSlide;
