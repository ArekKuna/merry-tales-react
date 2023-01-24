const CompositionImage = ({ workshop }) => {
  return (
    <img
      srcSet={workshop.srcSet}
      src={workshop.src}
      alt={workshop.alt}
      className='w-full max-w-md mb-14 last:mb-0 col-span-1 row-span-1 ring-2 ring-ghostWhite shadow-xl rounded-lg md:mb-0 md:max-w-[45%] lg:max-w-[48%] lg:mb-0 xl:max-w-[40%] xl:cursor-pointer xl:hover:scale-150 xl:hover:z-50 xl:transition-all xl:duration-500'
      sizes={workshop.sizes}
      loading='lazy'
    />
  );
};

export default CompositionImage;
