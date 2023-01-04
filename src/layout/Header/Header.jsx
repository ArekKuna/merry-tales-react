import { useState } from 'react';

import MobileNavigation from 'layout/Header/MobileNavigation/MobileNavigation';
import DesktopNavigation from 'layout/Header/DesktopNavigation/DesktopNavigation';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <header className='fixed flex items-center justify-between w-full h-[62px] px-2 py-1 z-20 bg-black sm:px-4 md:p-0'>
      <h1 className='text-xl text-ghostWhite font-bold sm:text-3xl md:hidden'>
        Merry Tale Games
      </h1>
      <MobileNavigation isActive={isActive} onClick={handleIsActive} />
      <DesktopNavigation />
    </header>
  );
};

export default Header;
