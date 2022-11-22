const TabletopSliderImageSlide = ({ srcSet, src, alt, sizes, text }) => {
  return (
    <>
      <img
        srcSet={srcSet}
        src={src}
        alt={alt}
        sizes={sizes}
        loading='lazy'
        className='w-2/3 mb-14 mt-3 mx-auto shadow-black shadow-xl sm:w-1/3'
      />
    </>
  );
};

export default TabletopSliderImageSlide;
