import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const CardsSliderImage = ({ image }) => {
  return (
    <div className='relative rounded-lg cursor-pointer bg-gray-500'>
      <LowResImage
        src={image.lowQualityImage}
        alt={image.alt}
        variant='rounded'
      />
      <BlurredUpImage
        srcSet={image.srcSet}
        src={image.src}
        alt={image.alt}
        sizes={image.sizes}
        variant='rounded'
      />
    </div>
  );
};

export default CardsSliderImage;
