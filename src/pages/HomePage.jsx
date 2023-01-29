import Logo from 'components/Logo/Logo';
import HeroImage from 'components/HeroImage/HeroImage';
import LinkBox from 'components/LinkBox/LinkBox';
import VideoGamesSlider from 'components/VideoGamesSlider/VideoGamesSlider';
import TabletopSlider from 'components/TabletopSlider/TabletopSlider';
import WorkshopsIcon from 'components/Icons/WorkshopsIcon/WorkshopsIcon';
import StarIcon from 'components/Icons/StarIcon/StarIcon';
import AchievementIcon from 'components/Icons/AchievementIcon/AchievementIcon';
import SocialsBox from 'components/SocialsBox/Socials';

const HomePage = () => {
  return (
    <>
      <Logo />
      <HeroImage />
      <LinkBox
        to='/professional'
        title={`Maria 
        Borys - Piątkowska`}
        description='Storyteller - Game Writer - Narrative Designer'
        variant='about'
      />
      <LinkBox
        to='/videoGames'
        element={<VideoGamesSlider />}
        variant='videoGames'
      />
      <LinkBox
        to='/tabletopGames'
        title='Tabletop Games'
        description='Knack For Roleplaying'
        element={<TabletopSlider />}
        variant='tabletop'
      />
      <LinkBox
        to='/workshops'
        title='Workshops'
        description='Skill Of Teaching'
        element={
          <WorkshopsIcon className='w-12 h-12 mx-auto xl:group-hover:text-ghostWhite xl:duration-500' />
        }
        variant='workshops'
      />
      <LinkBox
        to='/media'
        title='Media'
        description='Love To Share'
        element={
          <StarIcon className='w-12 h-12 mx-auto xl:group-hover:text-ghostWhite xl:duration-500' />
        }
        variant='media'
      />
      <LinkBox
        to='/achievements'
        title='Achievements'
        description='Ambition To Learn'
        element={
          <AchievementIcon className='w-12 h-12 mx-auto text-black xl:group-hover:text-ghostWhite xl:duration-500' />
        }
        variant='achievements'
      />
      <SocialsBox />
    </>
  );
};

export default HomePage;
