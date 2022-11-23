import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';
import TabletopSlider from 'components/HomePage/TabletopSlider/TabletopSlider';

const TabletopBox = () => {
  return (
    <>
      <BoxTitle title='tabletop games' to='tabletopGames' />
      {/* <BoxParagraph text='Knack for roleplaying' /> */}
      <TabletopSlider />
    </>
  );
};

export default TabletopBox;
