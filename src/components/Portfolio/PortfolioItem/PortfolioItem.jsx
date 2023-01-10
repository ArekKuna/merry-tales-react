const PortfolioItem = ({ image }) => {
  return (
    <div className='px-4 max-w-xs mx-auto mb-14 last:mb-0 sm:max-w-sm md:max-w-md xl:max-w-[20%] xl:mb-0'>
      <div className='mb-4'>
        <img
          srcSet={image.srcSet}
          src={image.src}
          sizes='100vw'
          alt={image.alt}
          className='rounded-full shadow-2xl ring-2 ring-white'
          loading='lazy'
        />
      </div>
      <div className='text-center'>
        <h3 className='text-xl text-amber-400 italic'>{image.alt}</h3>
        <p className='text-white'>{image.studio}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
