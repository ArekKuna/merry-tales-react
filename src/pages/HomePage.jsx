import Logo from 'components/Logo/Logo';
import HeroImage from 'components/HeroImage/HeroImage';
import LinkBox from 'components/LinkBox/LinkBox';
import VideoGamesSlider from 'components/VideoGamesSlider/VideoGamesSlider';
import TabletopSlider from 'components/TabletopSlider/TabletopSlider';
import { GrWorkshop } from 'react-icons/gr';
import { GiAlliedStar } from 'react-icons/gi';
import { GrAchievement } from 'react-icons/gr';
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
        element={<GrWorkshop className='w-12 h-12 mx-auto' />}
        variant='workshops'
      />
      <LinkBox
        to='/media'
        title='Media'
        description='Love To Share'
        element={<GiAlliedStar className='w-12 h-12 mx-auto' />}
        variant='media'
      />
      <LinkBox
        to='/achievements'
        title='Achievements'
        description='Ambition To Learn'
        element={<GrAchievement className='w-12 h-12 mx-auto' />}
        variant='achievements'
      />
      <SocialsBox />
    </>
  );
};

export default HomePage;
