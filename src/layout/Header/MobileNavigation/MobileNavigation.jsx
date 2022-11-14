import { useState } from "react";

import Checkbox from "./Checkbox/Checkbox";
import NavBackground from './NavBackground/NavBackground';
import MobileNav from "./MobileNav/MobileNav";

const MobileNavigation = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleIsChecked = () => {
    setIsChecked(isChecked => !isChecked)
    }

  return (
    <div className='mobile-navigation'>
      <Checkbox isChecked={isChecked} onCheck={handleIsChecked} />
      <NavBackground isChecked={isChecked} />
      <MobileNav isChecked={isChecked} onClick={handleIsChecked} />
    </div>
  );
}

export default MobileNavigation;