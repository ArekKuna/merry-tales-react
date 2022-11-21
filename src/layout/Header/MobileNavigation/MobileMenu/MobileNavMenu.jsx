import MobileNavList from 'layout/Header/MobileNavigation/MobileMenu/MobileNavList/MobileNavList';

const variantMap = {
  def: 'fixed top-0 left-0 h-0 w-full transition-all duration-500 mt-[60px] overflow-hidden border-10 border-black border-t-0 bg-gray-300',
  active: 'h-[330px]',
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
