import { Link } from 'react-router-dom';

const BoxTitle = ({ title, to }) => {
  return (
    <Link to={to}>
      <h2 className='text-3xl text-center font-black uppercase underline underline-offset-4 sm:text-3xl lg:text-xl xl:text-2xl xl:leading-7'>
        {title}
      </h2>
    </Link>
  );
};

export default BoxTitle;
