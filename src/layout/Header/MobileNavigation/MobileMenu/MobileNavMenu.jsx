import MobileNavList from "./MobileNavList/MobileNavList";

const variantMap = {
  def: 'fixed top-0 left-0 h-0 w-full transition-all duration-500 mt-[55px] overflow-hidden border-8 border-black border-t-0 bg-gray-300',
  active: 'h-[330px]'

}

const MobileNavMenu = ({ isActive, onClick }) => {
  const { def, active} = variantMap

  return (
    <nav className={`${def} ${isActive ? active : ''}`}>
      <MobileNavList onClick={onClick} />
    </nav>
  );
};

export default MobileNavMenu;