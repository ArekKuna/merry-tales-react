import SectionTitle from 'layout/SectionTitle/SectionTitle';
import Stat from 'components/Stats/Stat/Stat';

const Stats = () => {
  return (
    <div className='w-full max-w-lg px-4 mb-10 space-y-3 lg:max-w-3xl'>
      <SectionTitle sectionTitle='Skills' />
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
