import { Link } from 'react-router-dom';

const MobileNavItem = ({ link, onClick }) => {
  return (
    <li className='w-full p-2 flex text-xl text-center text-ghostWhite font-bold capitalize border-t-2 last:border-b-2 border-ghostWhite'>
      <Link className='flex-1' to={link.to} onClick={onClick}>
        {link.text}
      </Link>
    </li>
  );
};

export default MobileNavItem;
