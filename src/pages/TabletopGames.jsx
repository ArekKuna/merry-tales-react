import PageTitle from 'layout/PageTitle/PageTitle';
import TableTopCardsSlider from 'components/TabletopCardsSlider/TableTopCardsSlider';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const TabletopGames = () => {
  return (
    <>
      <PageTitle text='Tabletop RPG Games' />
      <div>
        <div>
          <p>
            Tabletop RPG games are sort of my childish love, but honestly I
            never give them up. I’ve been working as a translator (Core Book
            &amp; Alone Against the Dark) and scenario writer for the Polish 7th
            ed. Call of Cthulhu (additional campaign books). Lately I’ve been
            involved in the group of authors creating the project Zgrozy-Call of
            Cthulhu RPG Supplements.
          </p>
          <TableTopCardsSlider />
        </div>
        <div>
          <p>
            Tabletop RPG games are sort of my childish love, but honestly I
            never give them up. I’ve been working as a translator (Core Book
            &amp; Alone Against the Dark) and scenario writer for the Polish 7th
            ed. Call of Cthulhu (additional campaign books). Lately I’ve been
            involved in the group of authors creating the project Zgrozy-Call of
            Cthulhu RPG Supplements.
          </p>
          <TableTopCardsSlider />
        </div>
      </div>
      <SocialsBox variant='fixed' />
    </>
  );
};

export default TabletopGames;
