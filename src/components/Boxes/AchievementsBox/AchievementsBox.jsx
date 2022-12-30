import { GrAchievement } from 'react-icons/gr';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const AchievementsBox = () => {
  return (
    <>
      <BoxTitle to='achievements' title='achievements' />
      <BoxParagraph text='Ambition to learn' />
      <GrAchievement className='w-12 h-12 mx-auto' />
    </>
  );
};

export default AchievementsBox;
