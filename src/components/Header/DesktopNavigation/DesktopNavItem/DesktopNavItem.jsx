import { NavLink } from 'react-router-dom';

const DesktopNavItem = ({ link }) => {
  return (
    <li>
      <NavLink
        className='text-lg text-ghostWhite font-bold uppercase lg:text-2xl'
        to={link.to}
      >
        {link.text}
      </NavLink>
    </li>
  );
};

export default DesktopNavItem;
