const CardsSliderImage = ({ srcSet, src, alt, sizes }) => {
  return (
    <img
      srcSet={srcSet}
      src={src}
      alt={alt}
      className=''
      sizes={sizes}
      loading='lazy'
    />
  );
};

export default CardsSliderImage;
