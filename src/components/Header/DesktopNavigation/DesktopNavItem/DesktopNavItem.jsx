import { NavLink } from 'react-router-dom';

const DesktopNavItem = ({ link }) => {
  return (
    <li>
      <NavLink
        className='text-xl text-ghostWhite font-bold xl:text-3xl'
        to={link.to}
      >
        {link.text}
      </NavLink>
    </li>
  );
};

export default DesktopNavItem;
