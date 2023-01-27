import { useState } from 'react';

import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const PortfolioItem = ({ image }) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);

  const onHighResImageLoaded = () => {
    setHighResImageLoaded(true);
  };

  return (
    <div className='w-[80%] px-4 mb-14 last:mb-0 sm:w-[45%] sm:px-0 md:px-4 lg:w-[35%] xl:max-w-[20%] xl:px-4 xl:mb-0'>
      <div className='relative w-full mb-4 rounded-full shadow-2xl ring-2 ring-ghostWhite bg-gray-500'>
        <LowResImage
          src={image.lowQualityImage}
          alt={image.alt}
          variant='circle'
          highResImageLoaded={highResImageLoaded}
        />
        <BlurredUpImage
          srcSet={image.srcSet}
          src={image.src}
          sizes={image.sizes}
          alt={image.alt}
          variant='circle'
          onLoad={onHighResImageLoaded}
        />
      </div>
      <div className='text-center'>
        <h3 className='text-xl text-amber-400 italic'>{image.alt}</h3>
        <p className='text-ghostWhite'>{image.studio}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
