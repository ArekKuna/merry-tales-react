import { Link } from 'react-router-dom';

const MobileNavItem = ({ links, onClick }) => {
  return (
    <>
      {links.map(({ to, text, id }) => (
        <Link
          className='w-full p-2 text-xl text-center text-black font-bold capitalize border-t-2 border-gray-400 '
          key={id}
          to={to}
          onClick={onClick}
        >
          {text}
        </Link>
      ))}
    </>
  );
};

export default MobileNavItem;
