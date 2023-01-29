import MobileNavItem from 'components/Header/MobileNavigation/MobileMenu/MobileNavItem/MobileNavItem';

import { mobileMenuConfig } from 'data/MobileMenuConfig';

const variantMap = {
  def: 'flex flex-col items-center opacity-0 transition-all duration-500',
  active: '!opacity-100 transition-all duration-500',
};

const MobileNavList = ({ onClick, isActive }) => {
  const { def, active } = variantMap;

  return (
    <ul className={`${def} ${isActive ? active : ''}`}>
      {mobileMenuConfig?.map((link) => (
        <MobileNavItem key={link.id} link={link} onClick={onClick} />
      ))}
    </ul>
  );
};

export default MobileNavList;
