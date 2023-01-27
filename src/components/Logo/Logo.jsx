import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

import { homePageImages } from 'data/homePageImages';

const Logo = () => {
  const { logo } = homePageImages;

  return (
    <div className='flex justify-center items-center bg-black xl:col-span-2 xl:row-span-2 xl:order-0'>
      <div className='relative max-w-3/4'>
        <LowResImage src={logo.src} alt={logo.alt} />
        <BlurredUpImage
          srcSet={logo.srcSet}
          src={logo.src}
          alt={logo.alt}
          sizes={logo.sizes}
        />
      </div>
    </div>
  );
};

export default Logo;
