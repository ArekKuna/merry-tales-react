import { GrAchievement } from 'react-icons/gr';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const AchievementsBox = () => {
  return (
    <>
      <BoxTitle to='achievements' title='achievements' />
      <BoxParagraph text='Ambition to learn' />
      <GrAchievement className='w-16 mx-auto lg:h-20 lg:w-20 xl:h-14 xl:w-14' />
    </>
  );
};

export default AchievementsBox;
