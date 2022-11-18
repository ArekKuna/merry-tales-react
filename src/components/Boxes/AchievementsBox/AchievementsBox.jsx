import { GrAchievement } from 'react-icons/gr';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';

const AchievementsBox = () => {
  return (
    <>
      <BoxTitle title='achievements' to='/achievements' />
      <p className='text-lg'>Ambition to learn</p>
      <GrAchievement size='100' />
    </>
  );
};

export default AchievementsBox;
