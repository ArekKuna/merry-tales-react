import { useState } from "react";

const variantMap = {
    active: 'header-background-active',
}

const HeaderBackground = () => {
    const [background, setBackground] = useState(false)

    const navbarBackground = () => {
      if (window.scrollY >= 10) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener('scroll', navbarBackground);

    const { active } = variantMap;

  return <div className={`header-background ${background ? active : ''}`}>&nbsp;</div>;
}

export default HeaderBackground