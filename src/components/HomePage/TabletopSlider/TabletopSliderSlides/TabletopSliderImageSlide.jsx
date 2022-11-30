const TabletopSliderImageSlide = ({ srcSet, src, alt, sizes }) => {
  return (
    <img
      srcSet={srcSet}
      src={src}
      alt={alt}
      sizes={sizes}
      loading='lazy'
      className='max-w-full mx-auto mb-10 shadow-md shadow-black rounded-2xl xl:mb-6 xl:max-w-5/6 xl:h-5/6'
    />
  );
};

export default TabletopSliderImageSlide;
