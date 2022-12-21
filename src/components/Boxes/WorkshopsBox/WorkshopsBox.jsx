import { GrWorkshop } from 'react-icons/gr';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const WorkshopsBox = () => {
  return (
    <>
      <BoxTitle title='Workshops' to='workshops' />
      <BoxParagraph text='skill of teaching' />
      <GrWorkshop className='w-14 h-14 mx-auto lg:h-20 lg:w-20 xl:lg:h-14 xl:w-14' />
    </>
  );
};

export default WorkshopsBox;
