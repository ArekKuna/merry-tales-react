import { useState } from "react";

import MobileNavigation from "./MobileNavigation/MobileNavigation";

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const handleIsActive = () => {
        setIsActive(prevState => !prevState);
    }

  return (
    <header className='fixed flex items-center justify-between w-full p-1 px-4 border-8 border-black z-100 bg-gray-300'>
      <h1 className="text-xl font-bold">Merry Tale Games</h1>
      <MobileNavigation isActive={isActive} onClick={handleIsActive} />
    </header>
  );
}

export default Header