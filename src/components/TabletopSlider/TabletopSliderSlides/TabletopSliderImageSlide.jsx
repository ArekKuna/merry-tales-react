import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const TabletopSliderImageSlide = ({ image }) => {
  return (
    <div className='relative w-3/4 mx-auto mb-10 shadow-md shadow-black rounded-2xl cursor-pointer bg-gray-500 sm:w-1/2 md:w-1/3 xl:w-3/4 2xl:w-[60%] xl:mb-6 xl:h-5/6'>
      <LowResImage
        src={image.lowQualityImage}
        sizes={image.sizes}
        alt={image.alt}
        variant='rounded'
      />
      <BlurredUpImage
        srcSet={image.srcSet}
        src={image.src}
        sizes={image.sizes}
        alt={image.alt}
        variant='rounded'
      />
    </div>
  );
};

export default TabletopSliderImageSlide;
