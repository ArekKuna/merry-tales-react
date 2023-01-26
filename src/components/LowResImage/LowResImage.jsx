const variantMap = {
  visible: 'w-full h-full object-center opacity-100 blur-none duration-[2s]',
  invisible: 'w-full h-full object-center opacity-0 blur-md duration-[2s]',
  rounded: 'rounded-lg',
};

const LowResImage = ({ src, alt, highResImageLoaded, variant }) => {
  const variantClasses = variantMap[variant];

  const { visible, invisible } = variantMap;

  return (
    <img
      src={src}
      alt={alt}
      loading='lazy'
      className={
        highResImageLoaded
          ? `${invisible} ${variantClasses}`
          : `${visible} ${variantClasses}`
      }
    />
  );
};

export default LowResImage;
