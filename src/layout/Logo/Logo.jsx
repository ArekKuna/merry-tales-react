import logo from 'assets/logo/mobile/merry-tale-logo.png';
import logo1x from 'assets/logo/mobile/merry-tale-logo-1x.webp';
import logo2x from 'assets/logo/mobile/merry-tale-logo-2x.webp';

const Logo = () => {
<<<<<<< HEAD
  return <img src={logo} alt='Merry Tale logo' className='max-w-1/2 mx-auto' />;
=======
  return (
    <img
      srcSet={`${logo1x} 1x, ${logo2x} 2x`}
      src={logo}
      alt='Merry Tale Logo'
      className='max-w-1/2 mx-auto'
      loading='lazy'
    />
  );
>>>>>>> grid-layout
};

export default Logo;
