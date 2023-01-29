import { Link } from 'react-router-dom';

const MobileNavItem = ({ link, onClick }) => {
  return (
    <Link
      className='w-full p-2 text-xl text-center text-ghostWhite font-bold capitalize border-t-2 last:border-b-2 border-ghostWhite'
      to={link.to}
      onClick={onClick}
    >
      {link.text}
    </Link>
  );
};

export default MobileNavItem;
