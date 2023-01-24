import StatsTitle from 'components/Stats/StatsTitle/StatsTitle';
import Stat from 'components/Stats/Stat/Stat';

const Stats = () => {
  return (
    <div className='w-full px-4 mb-20 space-y-2 font-bold sm:w-3/4 xl:px-0 xl:mb-0'>
      <StatsTitle title='Skills' />
      <Stat title='characters' percent='90' size='m' />
      <Stat title='world building' percent='85' size='sm' />
      <Stat title='dialogues' percent='90' size='m' />
      <Stat title='cutscenes' percent='85' size='sm' />
      <Stat title='english' percent='95' size='lg' />
      <Stat title='scriptwriting' percent='90' size='m' />
      <Stat title='presentation' percent='90' size='m' />
    </div>
  );
};

export default Stats;
