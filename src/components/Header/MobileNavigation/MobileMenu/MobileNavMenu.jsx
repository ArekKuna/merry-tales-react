import MobileNavList from 'components/Header/MobileNavigation/MobileMenu/MobileNavList/MobileNavList';

const variantMap = {
  def: 'fixed top-0 left-0 h-0 w-full transition-all duration-500 mt-[60px] overflow-hidden border-t-0 border-l-0 bg-black',
  active: 'h-[324px] md:hidden',
};

const MobileNavMenu = ({ isActive, onClick }) => {
  const { def, active } = variantMap;

  return (
    <nav className={`${def} ${isActive ? active : ''}`}>
      <MobileNavList onClick={onClick} isActive={isActive} />
    </nav>
  );
};

export default MobileNavMenu;
