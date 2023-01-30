import { NavLink } from 'react-router-dom';

const DesktopNavItem = ({ link }) => {
  const activeStyles = {
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
    color: 'rgb(234 88 12)',
  };

  return (
    <li>
      <NavLink
        className='text-lg text-ghostWhite font-bold uppercase lg:text-2xl'
        to={link.to}
        style={({ isActive }) => (isActive ? activeStyles : undefined)}
      >
        {link.text}
      </NavLink>
    </li>
  );
};

export default DesktopNavItem;
// 'text-lg text-ghostWhite font-bold uppercase lg:text-2xl'