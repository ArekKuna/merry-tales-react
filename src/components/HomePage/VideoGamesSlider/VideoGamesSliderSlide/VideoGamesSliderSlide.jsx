const VideoGamesSliderSlide = ({ srcSet, src, alt, sizes }) => {
  return (
    <img srcSet={srcSet} src={src} alt={alt} sizes={sizes} loading='lazy' className="lg:h-full lg:w-[120%]" />
  );
};

export default VideoGamesSliderSlide;
