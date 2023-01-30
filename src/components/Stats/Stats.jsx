import StatsTitle from 'components/Stats/StatsTitle/StatsTitle';
import Stat from 'components/Stats/Stat/Stat';

const Stats = () => {
  return (
    <div className='w-full px-4 mb-20 space-y-2 font-bold sm:w-3/4 xl:px-0 xl:mb-0'>
      <StatsTitle title='Skills' />
      <Stat title='characters' percent='90' size='90' />
      <Stat title='world building' percent='80' size='80' />
      <Stat title='dialogues' percent='80' size='80' />
      <Stat title='cutscenes' percent='85' size='85' />
      <Stat title='english' percent='95' size='95' />
      <Stat title='scriptwriting' percent='85' size='85' />
      <Stat title='presentation' percent='90' size='90' />
    </div>
  );
};

export default Stats;
