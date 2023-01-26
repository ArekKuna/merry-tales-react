import { useState } from 'react';

import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const VideoGamesSliderSlide = ({ image }) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);

  const onHighResImageLoaded = () => {
    setHighResImageLoaded(true);
  };

  return (
    <>
      <LowResImage
        src={image.lowQualityImage}
        alt={image.alt}
        highResImageLoaded={highResImageLoaded}
      />
      <BlurredUpImage
        srcSet={image.scrSet}
        src={image.src}
        alt={image.alt}
        sizes={image.sizes}
        onLoad={onHighResImageLoaded}
      />
    </>
  );
};

export default VideoGamesSliderSlide;
