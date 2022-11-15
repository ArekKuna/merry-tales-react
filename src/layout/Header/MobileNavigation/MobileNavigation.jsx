import MobileNavButton from './MobileNavButton/MobileNavButton';
import MobileNavMenu from './MobileMenu/MobileNavMenu';

const MobileNav = ({ onClick, isActive }) => {
  return (
    <>
      <MobileNavButton isActive={isActive} onClick={onClick} />
      <MobileNavMenu isActive={isActive} onClick={onClick} />
    </>
  );
};

export default MobileNav;
