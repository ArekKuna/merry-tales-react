import DesktopNavItem from 'components/Header/DesktopNavigation/DesktopNavItem/DesktopNavItem';

import { desktopMenuConfig } from 'data/desktopMenuConfig';

const DesktopNavList = () => {
  return (
    <ul className='flex w-full justify-center items-center space-x-4 capitalize xl:space-x-10'>
      {desktopMenuConfig?.map((link) => (
        <DesktopNavItem key={link.id} link={link} />
      ))}
    </ul>
  );
};

export default DesktopNavList;
