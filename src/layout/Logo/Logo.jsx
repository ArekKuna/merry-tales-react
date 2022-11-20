import logo from 'assets/logo/mobile/merry-tale-logo.png';
import logo1x from 'assets/logo/mobile/merry-tale-logo-1x.webp';
import logo2x from 'assets/logo/mobile/merry-tale-logo-2x.webp';

const Logo = () => {
  return (
    <img
      srcSet={`${logo1x} 1x, ${logo2x} 2x`}
      src={logo}
      alt='Merry Tale Logo'
      className='max-w-1/3 sm:max-w-3/4 md:max-w-1/2'
      loading='lazy'
    />
  );
};

export default Logo;
