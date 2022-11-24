import mainImageMobile from 'assets/main-photo/mobile/merry-main-280.webp';
import mainImageTablet from 'assets/main-photo/mobile/merry-main-580.webp';
import mainImageFallback from 'assets/main-photo/mobile/merry-main-580.jpg';

const MainImageBox = () => {
  return (
    <img
      srcSet={`${mainImageMobile} 1000w, ${mainImageTablet} 2000w`}
      sizes='(max-width: 639px) 650px, 2000px'
      src={mainImageFallback}
      alt='Merry'
      loading='lazy'
      className='xl:h-full'
    />
  );
};

export default MainImageBox;
