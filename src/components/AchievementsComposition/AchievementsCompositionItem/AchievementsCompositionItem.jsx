const AchievementsCompositionItem = ({ achievement }) => {
  return (
    <div className='w-3/4 h-full mb-14 last:mb-0 space-y-2 flex flex-col justify-center items-center md:w-1/2 lg:w-[40%] xl:mb-0 xl:w-1/5'>
      <div className='w-3/4 lg:w-1/2 xl:w-full'>{achievement.element}</div>
      <div className='lg:w-3/4 text-xl text-center text-amber-400 xl:w-full xl:text-base'>
        {achievement.title}
      </div>
      <div className='lg:w-3/4 text-center text-white xl:w-full'>
        {achievement.description}
      </div>
    </div>
  );
};

export default AchievementsCompositionItem;
