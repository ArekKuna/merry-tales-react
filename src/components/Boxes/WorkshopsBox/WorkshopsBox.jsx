import { GrWorkshop } from 'react-icons/gr';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';

const WorkshopsBox = () => {
  return (
    <>
      <BoxTitle title='Workshops' to='/workshops' />
      <p className='text-lg'>skill of teaching</p>
      <GrWorkshop size='100' />
    </>
  );
};

export default WorkshopsBox;
