import MobileNavButton from 'components/Header/MobileNavigation/MobileNavButton/MobileNavButton';
import MobileNavMenu from 'components/Header/MobileNavigation/MobileMenu/MobileNavMenu';

const MobileNav = ({ onClick, isActive }) => {
  return (
    <>
      <MobileNavButton isActive={isActive} onClick={onClick} />
      <MobileNavMenu isActive={isActive} onClick={onClick} />
    </>
  );
};

export default MobileNav;
