const PortfolioItem = ({ srcSet, src, alt, title, studio }) => {
  return (
    <div className='px-4 max-w-sm mx-auto mb-10 last:mb-0 sm:max-w-md md:max-w-xs xl:max-w-[19rem]'>
      <div className='mb-4'>
        <img
          srcSet={srcSet}
          src={src}
          sizes='100vw'
          alt={alt}
          className='rounded-full shadow-2xl'
        />
      </div>
      <div className='text-center'>
        <h3 className='text-xl text-amber-400 italic'>{title}</h3>
        <p className='text-white'>{studio}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
