import AchievementsCompositionItem from 'components/AchievementsComposition/AchievementsCompositionItem/AchievementsCompositionItem';

import { achievements } from 'data/achievements';

const AchievementsComposition = () => {
  return (
    <div className='w-full mb-20 flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:justify-evenly xl:mb-0 xl:w-[65%] xl:items-center'>
      {achievements?.map((achievement) => (
        <AchievementsCompositionItem
          key={achievement.id}
          achievement={achievement}
        />
      ))}
    </div>
  );
};

export default AchievementsComposition;
