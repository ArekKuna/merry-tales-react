import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const OtherMedia = ({ media }) => {
  return (
    <div className='relative w-[90%] max-w-sm mb-14 last:mb-0 shadow-xl md:w-[40%] lg:max-w-[45%] xl:mb-0 xl:max-w-[15%] xl:flex xl:flex-col xl:cursor-pointer xl:hover:scale-150 xl:hover:z-20 xl:duration-500'>
      <a href={media.link} target='_blank' rel='noreferrer'>
        <h3 className='mb-4 font-semibold text-center text-ghostWhite xl:absolute xl:h-full xl:w-full xl:mb-0 xl:px-2 xl:flex xl:justify-center xl:items-center xl:opacity-0 xl:cursor-pointer xl:z-20 xl:hover:opacity-100 xl:group-hover:scale-150 xl:duration-[300ms] xl:rounded-lg xl:bg-black/80'>
          {media.title}
        </h3>
        <div className='relative w-full h-full rounded-lg ring-2 ring-white bg-gray-500'>
          <LowResImage
            src={media.LowQualityImage}
            alt={media.title}
            variant='rounded'
          />
          <BlurredUpImage
            src={media.HighQualityImage}
            alt={media.title}
            variant='rounded'
          />
        </div>
      </a>
    </div>
  );
};

export default OtherMedia;
