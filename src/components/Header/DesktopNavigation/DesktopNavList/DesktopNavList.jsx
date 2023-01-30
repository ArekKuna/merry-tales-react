import DesktopNavItem from 'components/Header/DesktopNavigation/DesktopNavItem/DesktopNavItem';

import { desktopMenuConfig } from 'data/desktopMenuConfig';

const DesktopNavList = () => {
  return (
    <ul className='flex justify-evenly items-center capitalize md:space-x-3 xl:space-x-10'>
      {desktopMenuConfig?.map((link) => (
        <DesktopNavItem key={link.id} link={link} />
      ))}
    </ul>
  );
};

export default DesktopNavList;
