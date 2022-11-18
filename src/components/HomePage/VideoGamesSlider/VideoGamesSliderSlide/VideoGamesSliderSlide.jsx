const VideoGamesSliderSlide = ({ srcSet, src, alt, sizes }) => {
  return (
    <img srcSet={srcSet} src={src} alt={alt} sizes={sizes} loading='lazy' />
  );
};

export default VideoGamesSliderSlide;
