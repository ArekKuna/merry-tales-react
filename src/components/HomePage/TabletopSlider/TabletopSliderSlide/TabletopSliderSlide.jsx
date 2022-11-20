const TabletopSliderSlide = ({ srcSet, src, alt, sizes, text }) => {
  return (
    <>
      <img
        srcSet={srcSet}
        src={src}
        alt={alt}
        sizes={sizes}
        loading='lazy'
        className='w-1/2 mb-9 mt-3 mx-auto shadow-black shadow-xl'
      />
    </>
  );
};

export default TabletopSliderSlide;
