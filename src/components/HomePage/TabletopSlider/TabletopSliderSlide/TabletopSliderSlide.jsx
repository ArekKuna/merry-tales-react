const TabletopSliderSlide = ({ srcSet, src, alt, sizes, text }) => {
  return (
    <>
      <img
        srcSet={srcSet}
        src={src}
        alt={alt}
        sizes={sizes}
        loading='lazy'
        className='w-1/2 mb-6 mx-auto shadow-black shadow-lg'
      />
    </>
  );
};

export default TabletopSliderSlide;