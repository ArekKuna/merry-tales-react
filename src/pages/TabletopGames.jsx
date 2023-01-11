import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import CardsSliderBox from 'components/TabletopCardsSlider/CardsSliderBox/CardsSliderBox';
import TabletopParagraph from 'components/TabletopCardsSlider/TabletopParagraph/TabletopParagraph';
import TableTopCardsSlider from 'components/TabletopCardsSlider/TableTopCardsSlider';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

import { cthulhuImages } from 'data/cthulhuImages';
import { otherTabletops } from 'data/otherTabletops';

const TabletopGames = () => {
  const CthulhuMarkdown = `Tabletop RPG games are sort of my childish love, but honestly I
            never give them up. I’ve been working as a translator (****Core Book****
            &amp; ****Alone Against the Dark****) and scenario writer for the Polish 7th
            ed. ****Call of Cthulhu**** (additional campaign books). Lately I’ve been
            involved in the group of authors creating the project ****Zgrozy-Call of
            Cthulhu RPG Supplements****.`;

  const otherTabletopsMarkdown = `My scenario for ****Blades in the Dark**** was published in ****Nowa Fantastyka****
            magazine. I also had the pleasure to write supplements for Polish
            5th ed. ****Vampire the Masquerade****, ****Sibir Punk**** and ****Nibiru RPG****. My
            personal favourite though is the scenario for ****Tales from the Loop****
            that I wrote in cooperation with ****Majka Jeżowska****.`;

  return (
    <GlobalContainer variant='tabletop'>
      <PageTitle text='Tabletop RPG Games' />
      <div className='w-full z-10 max-w-screen-2xl flex flex-col xl:flex-row'>
        <CardsSliderBox>
          <TabletopParagraph markdown={CthulhuMarkdown} />
          <TableTopCardsSlider images={cthulhuImages} />
        </CardsSliderBox>
        <CardsSliderBox>
          <TabletopParagraph markdown={otherTabletopsMarkdown} />
          <TableTopCardsSlider images={otherTabletops} />
        </CardsSliderBox>
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default TabletopGames;
