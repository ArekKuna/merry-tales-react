import { Link } from 'react-router-dom';

const BoxTitle = ({ title, to }) => {
  return (
    <Link to={to}>
      <h2 className='text-2xl text-center font-black uppercase underline underline-offset-4'>
        {title}
      </h2>
    </Link>
  );
};

export default BoxTitle;
