import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import TableTopCardsSlider from 'components/TabletopCardsSlider/TableTopCardsSlider';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

import { cthulhuImages } from 'data/cthulhuImages';
import { otherTabletops } from 'data/otherTabletops';

const TabletopGames = () => {
  return (
    <GlobalContainer variant='tabletop'>
      <PageTitle text='Tabletop RPG Games' />
      <div className='w-full z-10 max-w-screen-2xl flex flex-col xl:flex-row'>
        <div className='w-full mb-20 flex flex-col items-center xl:mb-0 xl:w-1/2 xl:flex-row-reverse'>
          <p className='px-6 mb-14 text-base text-center text-white sm:max-w-[75%] xl:mb-0 xl:max-w-[40%]'>
            Tabletop RPG games are sort of my childish love, but honestly I
            never give them up. I’ve been working as a translator (Core Book
            &amp; Alone Against the Dark) and scenario writer for the Polish 7th
            ed. Call of Cthulhu (additional campaign books). Lately I’ve been
            involved in the group of authors creating the project Zgrozy-Call of
            Cthulhu RPG Supplements.
          </p>
          <TableTopCardsSlider images={cthulhuImages} />
        </div>
        <div className='w-full mb-14 flex flex-col items-center xl:mb-0 xl:w-1/2 xl:flex-row-reverse'>
          <p className='px-6 mb-14 text-base text-center text-white sm:max-w-[75%] xl:mb-0 xl:max-w-[40%]'>
            Tabletop RPG games are sort of my childish love, but honestly I
            never give them up. I’ve been working as a translator (Core Book
            &amp; Alone Against the Dark) and scenario writer for the Polish 7th
            ed. Call of Cthulhu (additional campaign books). Lately I’ve been
            involved in the group of authors creating the project Zgrozy-Call of
            Cthulhu RPG Supplements.
          </p>
          <TableTopCardsSlider images={otherTabletops} />
        </div>
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default TabletopGames;
