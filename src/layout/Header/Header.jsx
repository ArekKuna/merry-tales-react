import { useState } from 'react';

import MobileNavigation from 'layout/Header/MobileNavigation/MobileNavigation';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
<<<<<<< HEAD
    <header className='fixed flex items-center justify-between w-full p-1 px-4 border-8 border-black z-100 bg-gray-300'>
      <h1 className="text-xl font-bold">Merry Tale Games</h1>
=======
    <header className='fixed flex items-center justify-between w-full px-2 py-4 border-10 border-black z-20 bg-gray-300'>
      <h1 className='text-xl font-bold'>Merry Tale Games</h1>
>>>>>>> grid-layout
      <MobileNavigation isActive={isActive} onClick={handleIsActive} />
    </header>
  );
};

export default Header;
