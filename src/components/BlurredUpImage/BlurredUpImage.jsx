import { useState } from 'react';

const variantMap = {
  visible:
    'absolute top-0 left-0 w-full h-full object-center opacity-100 blur-none duration-[2s]',
  invisible:
    'absolute top-0 left-0 w-full h-full object-center opacity-0 blur-md duration-[2s]',
  rounded: 'rounded-lg',
};

export const BlurredUpImage = ({
  src,
  alt,
  srcSet,
  sizes,
  onLoad,
  variant,
}) => {
  const [isLoaded, setisLoaded] = useState(false);

  const variantClasses = variantMap[variant];

  const { visible, invisible } = variantMap;

  const handleLoad = () => {
    setisLoaded(true);
    onLoad();
  };

  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      className={isLoaded ? `${visible} ${variantClasses}` : `${invisible}`}
      loading='lazy'
      onLoad={handleLoad}
    />
  );
};

export default BlurredUpImage;
