const VideoGamesSliderSlide = ({ srcSet, src, alt, sizes }) => {
  return (
    <img
      srcSet={srcSet}
      src={src}
      alt={alt}
      sizes='100vw'
      loading='lazy'
      className='w-full h-full cursor-pointer'
    />
  );
};

export default VideoGamesSliderSlide;
