const TabletopSliderImageSlide = ({ srcSet, src, alt, sizes, text }) => {
  return (
    <>
      <img
        srcSet={srcSet}
        src={src}
        alt={alt}
        sizes={sizes}
        loading='lazy'
        className='w-1/4 mb-14 mt-3 mx-auto shadow-black shadow-xl'
      />
    </>
  );
};

export default TabletopSliderImageSlide;
