const CardsSliderImage = ({ image }) => {
  return (
    <img
      srcSet={image.srcSet}
      src={image.src}
      alt={image.alt}
      className='w-full'
      sizes='100vw'
      loading='lazy'
    />
  );
};

export default CardsSliderImage;
