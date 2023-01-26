import { useState } from 'react';

import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

import { homePageImages } from 'data/homePageImages';

const HeroImage = () => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);

  const onHighResImageLoaded = () => {
    setHighResImageLoaded(true);
  };

  const { hero } = homePageImages;

  return (
    <div className='relative w-full flex row-span-1 border-b-2 border-black bg-gray-500 sm:col-span-2 sm:row-span-1 sm:-order-1 xl:col-span-4 xl:row-span-3 xl:border-l-2 xl:border-black xl:order-2'>
      <LowResImage
        src={hero.lowQualityImage}
        alt={hero.alt}
        highResImageLoaded={highResImageLoaded}
      />
      <BlurredUpImage
        srcSet={hero.srcSet}
        src={hero.src}
        sizes={hero.sizes}
        alt={hero.alt}
        onLoad={onHighResImageLoaded}
      />
    </div>
  );
};

export default HeroImage;
