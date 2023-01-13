const TabletopSliderImageSlide = ({ image }) => {
  return (
    <img
      srcSet={image.srcSet}
      src={image.src}
      alt={image.alt}
      sizes={image.sizes}
      loading='lazy'
      className='max-w-full mx-auto mb-10 shadow-md shadow-black rounded-2xl cursor-pointer xl:mb-6 xl:max-w-5/6 xl:h-5/6'
    />
  );
};

export default TabletopSliderImageSlide;
