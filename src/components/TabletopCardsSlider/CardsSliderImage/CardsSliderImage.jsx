const CardsSliderImage = ({ image }) => {
  return (
    <img
      srcSet={image.srcSet}
      src={image.src}
      alt={image.alt}
      className='rounded-2xl swiper-lazy'
      sizes='100vw'
      loading='lazy'
    />
  );
};

export default CardsSliderImage;
