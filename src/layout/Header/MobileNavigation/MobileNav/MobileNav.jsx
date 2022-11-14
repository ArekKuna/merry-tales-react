import MobileNavigationList from "./MobileNavigationList";

const MobileNav = ({ isChecked, onClick }) => {
  return (
    <nav className={`navigation ${isChecked ? 'navigation-active' : ''}`}>
      <MobileNavigationList onClick={onClick} />
    </nav>
  );
};

export default MobileNav