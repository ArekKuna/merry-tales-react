const PortfolioItem = ({ image }) => {
  return (
    <div className='px-4 mb-14 max-w-sm mx-auto last:mb-0 sm:px-0 sm:max-w-sm md:px-4 md:max-w-md xl:px-4 xl:max-w-[20%] xl:mb-0'>
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
