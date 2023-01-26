import { useState } from 'react';

import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const CompositionImage = ({ workshop }) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);

  const onHighResImageLoaded = () => {
    setHighResImageLoaded(true);
  };

  return (
    <div className='relative w-full max-w-md mb-14 last:mb-0 col-span-1 row-span-1 ring-2 ring-ghostWhite shadow-xl rounded-lg md:mb-0 md:max-w-[45%] lg:max-w-[48%] lg:mb-0 xl:max-w-[40%] xl:cursor-pointer xl:hover:scale-150 xl:hover:z-50 xl:duration-500'>
      <img
        src={workshop.lowQualityImage}
        alt={workshop.alt}
        className={
          highResImageLoaded
            ? 'w-full rounded-lg blur-none duration-[1s]'
            : 'w-full rounded-lg opacity-100 blur-md duration-[1s]'
        }
        sizes={workshop.sizes}
        loading='lazy'
      />
      <BlurredUpImage
        srcSet={workshop.srcSet}
        src={workshop.src}
        alt={workshop.alt}
        onLoad={onHighResImageLoaded}
      />
    </div>
  );
};

export default CompositionImage;
