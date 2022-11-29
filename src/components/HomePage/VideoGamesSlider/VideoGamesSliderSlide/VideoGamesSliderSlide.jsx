const VideoGamesSliderSlide = ({ srcSet, src, alt, sizes }) => {
  return (
    <img
      srcSet={srcSet}
      src={src}
      alt={alt}
      sizes={sizes}
      loading='lazy'
      className='w-full h-full'
    />
  );
};

export default VideoGamesSliderSlide;
