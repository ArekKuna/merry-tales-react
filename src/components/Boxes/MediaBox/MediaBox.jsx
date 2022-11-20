import { GiAlliedStar } from 'react-icons/gi';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';

const MediaBox = () => {
  return (
    <>
      <BoxTitle title='Media' to='/media' />
      <p className='text-lg sm:text-xl'>Love to share</p>
      <GiAlliedStar size='100' />
    </>
  );
};

export default MediaBox;
