import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const CompositionImage = ({ workshop }) => {
  return (
    <div className='relative w-full max-w-md aspect-[4/3] mb-14 last:mb-0 col-span-1 row-span-1 ring-2 ring-ghostWhite shadow-xl rounded-lg bg-gray-500 md:mb-0 md:max-w-[45%] lg:max-w-[40%] lg:mb-0 xl:max-w-[45%] xl:cursor-pointer xl:hover:scale-150 xl:hover:z-50 xl:duration-500'>
      <LowResImage
        src={workshop.lowQualityImage}
        alt={workshop.alt}
        variant='rounded'
      />
      <BlurredUpImage
        srcSet={workshop.srcSet}
        src={workshop.src}
        alt={workshop.alt}
        sizes={workshop.sizes}
        variant='rounded'
      />
    </div>
  );
};

export default CompositionImage;
