import { Link } from 'react-router-dom';

const TabletopSliderTextSlide = ({ text, to }) => {
  return (
    <Link to={to}>
      <p className='font-bold text-2xl text-center underline underline-offset-4 sm:text-4xl xl:text-2xl 2xl:text-3xl'>
        {text}
      </p>
    </Link>
  );
};

export default TabletopSliderTextSlide;
