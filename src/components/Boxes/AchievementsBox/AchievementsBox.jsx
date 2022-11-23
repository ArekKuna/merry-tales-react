import { GrAchievement } from 'react-icons/gr';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const AchievementsBox = () => {
  return (
    <>
      <BoxTitle title='achievements' to='/achievements' />
      <BoxParagraph text='Ambition to learn' />
      <GrAchievement className='h-14 w-14' />
    </>
  );
};

export default AchievementsBox;
