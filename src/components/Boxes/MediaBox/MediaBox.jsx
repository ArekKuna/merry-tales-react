import { GiAlliedStar } from 'react-icons/gi';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const MediaBox = () => {
  return (
    <>
      <BoxTitle title='Media' to='/media' />
      <BoxParagraph text='Love to share' />
      <GiAlliedStar className='h-16 w-16 mx-auto lg:h-20 lg:w-20 xl:lg:h-14 xl:w-14' />
    </>
  );
};

export default MediaBox;
