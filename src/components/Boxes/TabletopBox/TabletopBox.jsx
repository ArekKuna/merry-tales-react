import { Link } from 'react-router-dom';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import TabletopSlider from 'components/HomePage/TabletopSlider/TabletopSlider';

const TabletopBox = () => {
  return (
    <>
      <BoxTitle title='tabletop games' to='tabletopGames' />
      <p className='text-lg sm:text-xl'>Knack for roleplaying</p>
      <TabletopSlider />
      <Link to='tabletopGames'>
        <p className='font-black text-3xl text-center mt-4 underline underline-offset-4'>
          More stories
        </p>
      </Link>
    </>
  );
};

export default TabletopBox;
