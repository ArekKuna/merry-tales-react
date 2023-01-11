import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import CardsSliderBox from 'components/TabletopCardsSlider/CardsSliderBox/CardsSliderBox';
import TabletopParagraph from 'components/TabletopCardsSlider/TabletopParagraph/TabletopParagraph';
import TableTopCardsSlider from 'components/TabletopCardsSlider/TableTopCardsSlider';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

import { cthulhuImages } from 'data/cthulhuImages';
import { otherTabletops } from 'data/otherTabletops';

const TabletopGames = () => {
  return (
    <GlobalContainer variant='tabletop'>
      <PageTitle text='Tabletop RPG Games' />
      <div className='w-full z-10 max-w-screen-2xl flex flex-col xl:px-4 xl:flex-row'>
        <CardsSliderBox>
          <TabletopParagraph variant='cthulhu' />
          <TableTopCardsSlider images={cthulhuImages} />
        </CardsSliderBox>
        <CardsSliderBox>
          <TabletopParagraph variant='otherTabletops' />
          <TableTopCardsSlider images={otherTabletops} />
        </CardsSliderBox>
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default TabletopGames;
