import SocialsBox from "components/SocialsBox/Socials";
import CardsSliderBox from "components/TabletopCardsSlider/CardsSliderBox/CardsSliderBox";
import TableTopCardsSlider from "components/TabletopCardsSlider/TableTopCardsSlider";
import GlobalContainer from "layout/GlobalContainer/GlobalContainer";
import Main from "layout/Main/Main";
import PageTitle from "layout/PageTitle/PageTitle";
import SectionParagraph from "layout/SectionParagraph/SectionParagraph";

import { cthulhuImages } from "data/cthulhuImages";
import { otherTabletops } from "data/otherTabletops";

const TabletopGames = () => {
  return (
    <Main variant="flex">
      <GlobalContainer
        loadingVariant="tabletopLoading"
        readyVariant="tabletopReady"
      >
        <PageTitle text="Tabletop RPGs" />
        <div className="w-full z-10 max-w-screen-2xl flex flex-col xl:px-4 xl:flex-row">
          <CardsSliderBox>
            <SectionParagraph textVariant="cthulhu" variant="cthulhu" />
            <TableTopCardsSlider images={cthulhuImages} />
          </CardsSliderBox>
          <CardsSliderBox>
            <SectionParagraph
              textVariant="otherTabletops"
              variant="otherTabletops"
            />
            <TableTopCardsSlider images={otherTabletops} />
          </CardsSliderBox>
        </div>
        <SocialsBox variant="fixed" />
      </GlobalContainer>
    </Main>
  );
};

export default TabletopGames;
