import { useState } from 'react';

const variantMap = {
  visible: 'w-full h-full object-center blur-none duration-[2s]',
  invisible: 'w-full h-full object-center opacity-0 blur-md duration-[2s]',
  rounded: 'rounded-lg',
  circle: 'rounded-full',
};

const LowResImage = ({ src, alt, variant }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  const variantClasses = variantMap[variant];

  const { visible, invisible } = variantMap;

  const handleLoad = () => {
    setIsLoaded(false);
  };

  return (
    <img
      src={src}
      alt={alt}
      loading='lazy'
      className={
        isLoaded
          ? `${visible} ${variantClasses}`
          : `${invisible} ${variantClasses}`
      }
      onLoad={handleLoad}
    />
  );
};

export default LowResImage;
