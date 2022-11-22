import { Link } from "react-router-dom";

const TabletopSliderTextSlide = ({ text, to }) => {
  return (
    <Link to={to}>
      <p className='font-bold text-3xl text-center underline underline-offset-4'>
        {text}
      </p>
    </Link>
  );
};

export default TabletopSliderTextSlide