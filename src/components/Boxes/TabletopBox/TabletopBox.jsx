import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import TabletopSlider from 'components/HomePage/TabletopSlider/TabletopSlider';

const TabletopBox = () => {
  return (
    <>
      <BoxTitle title='tabletop games' to='tabletopGames' />
      <p className='text-lg sm:text-xl'>Knack for roleplaying</p>
      <TabletopSlider />
    </>
  );
};

export default TabletopBox;
