import { GrWorkshop } from 'react-icons/gr';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const WorkshopsBox = () => {
  return (
    <>
      <BoxTitle title='Workshops' to='/workshops' />
      <BoxParagraph text='skill of teaching' />
      <GrWorkshop size='60' />
    </>
  );
};

export default WorkshopsBox;
