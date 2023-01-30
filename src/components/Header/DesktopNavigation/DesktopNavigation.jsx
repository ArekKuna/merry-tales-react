import DesktopNavList from 'components/Header/DesktopNavigation/DesktopNavList/DesktopNavList';

const DesktopNavigation = () => {
  return (
    <nav className='hidden w-full md:flex md:justify-center'>
      <DesktopNavList />
    </nav>
  );
};

export default DesktopNavigation;
