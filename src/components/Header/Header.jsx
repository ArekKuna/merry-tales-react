import { useState } from 'react';

import MobileNavigation from 'components/Header/MobileNavigation/MobileNavigation';
import DesktopNavigation from 'components/Header/DesktopNavigation/DesktopNavigation';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <header className='fixed flex items-center justify-between w-full h-[62px] px-2 py-1 z-30 bg-black md:p-0'>
      <h1 className='text-xl text-ghostWhite font-bold uppercase sm:text-xl md:hidden'>
        Merry Tale Games
      </h1>
      <MobileNavigation isActive={isActive} onClick={handleIsActive} />
      <DesktopNavigation />
    </header>
  );
};

export default Header;
