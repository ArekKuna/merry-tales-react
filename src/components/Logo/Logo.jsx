import logo from 'assets/logo/merry-tale-logo.png';
import logo1x from 'assets/logo/merry-tale-logo-1x.webp';
import logo2x from 'assets/logo/merry-tale-logo-2x.webp';

const Logo = () => {
  return (
    <div className='flex justify-center items-center bg-black xl:col-span-2 xl:row-span-2 xl:order-0'>
      <img
        srcSet={`${logo1x} 1x, ${logo2x} 2x`}
        src={logo}
        alt='Merry Tale Logo'
        className='max-w-3/4'
        loading='lazy'
      />
    </div>
  );
};

export default Logo;
