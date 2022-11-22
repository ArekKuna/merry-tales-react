import { GiAlliedStar } from 'react-icons/gi';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const MediaBox = () => {
  return (
    <>
      <BoxTitle title='Media' to='/media' />
      <BoxParagraph text='Love to share' />
      <GiAlliedStar size='60' />
    </>
  );
};

export default MediaBox;
