import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import HomePageTabletopSlider from 'components/HomePageTabletopSlider/HomePageTabletopSlider';

const TabletopBox = () => {
  return (
    <>
      <BoxTitle title='tabletop games' to='tabletopGames' />
      <HomePageTabletopSlider />
      <p className='text-lg'>Knack for roleplaying</p>
    </>
  );
};

export default TabletopBox;
