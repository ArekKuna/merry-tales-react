import HeroImage from "components/HeroImage/HeroImage";
import AchievementIcon from "components/Icons/AchievementIcon/AchievementIcon";
import StarIcon from "components/Icons/StarIcon/StarIcon";
import WorkshopsIcon from "components/Icons/WorkshopsIcon/WorkshopsIcon";
import LinkBox from "components/LinkBox/LinkBox";
import Logo from "components/Logo/Logo";
import SocialsBox from "components/SocialsBox/Socials";
import TabletopSlider from "components/TabletopSlider/TabletopSlider";
import VideoGamesSlider from "components/VideoGamesSlider/VideoGamesSlider";
import Main from "layout/Main/Main";

const HomePage = () => {
  return (
    <Main variant="grid">
      <Logo />
      <HeroImage />
      <LinkBox
        to="/professional"
        title={`Maria 
        Borys - Piątkowska`}
        description="Storyteller - Game Writer - Narrative Designer"
        variant="about"
      />
      <LinkBox
        to="/videoGames"
        element={<VideoGamesSlider />}
        variant="videoGames"
      />
      <LinkBox
        to="/tabletopGames"
        title="Tabletop Games"
        description="Knack for Roleplaying"
        element={<TabletopSlider />}
        variant="tabletop"
      />
      <LinkBox
        to="/workshops"
        title="Workshops"
        description="Affinity to Teaching"
        element={
          <WorkshopsIcon className="w-12 h-12 mx-auto xl:group-hover:text-ghostWhite xl:duration-500" />
        }
        variant="workshops"
      />
      <LinkBox
        to="/media"
        title="Media"
        description="Love to Share"
        element={
          <StarIcon className="w-12 h-12 mx-auto xl:group-hover:text-ghostWhite xl:duration-500" />
        }
        variant="media"
      />
      <LinkBox
        to="/achievements"
        title="Achievements"
        description="Ambition to Learn"
        element={
          <AchievementIcon className="w-12 h-12 mx-auto text-black xl:group-hover:text-ghostWhite xl:duration-500" />
        }
        variant="achievements"
      />
      <SocialsBox />
    </Main>
  );
};

export default HomePage;
