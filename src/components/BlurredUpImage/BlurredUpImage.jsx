import { useState } from 'react';

export const BlurredUpImage = ({ src, alt, srcSet, onLoad }) => {
  const [isLoaded, setisLoaded] = useState(false);

  const handleLoad = () => {
    setisLoaded(true);
    onLoad();
  };

  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      className={
        isLoaded
          ? 'absolute top-0 left-0 w-full rounded-lg opacity-100 blur-none duration-[1s]'
          : 'absolute top-0 left-0 w-full rounded-lg opacity-0 blur-md duration-[1s]'
      }
      loading='lazy'
      onLoad={handleLoad}
    />
  );
};

export default BlurredUpImage;
