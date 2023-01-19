import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import Composition from 'components/Composition/Composition';
import List from 'components/List/List';
import SocialsBox from 'components/SocialsBox/Socials';

import { workshops } from 'data/workshops';
import { workshopsListItems } from 'data/workshopsList';

const Workshops = () => {
  return (
    <GlobalContainer variant='workshops'>
      <PageTitle text='Workshops' />
      <div className='z-10 px-4 max-w-screen-2xl lg:px-16 xl:px-4'>
        <p className='text-ghostWhite mb-14 mx-auto text-center sm:w-3/4 xl:w-full'>
          Since 2010 I’ve been running workshops and giving lectures on subjects
          concerning narrative design and game scriptwriting. I’ve been
          conducting tutorials and creating educational material for several
          companies in the game industry, e.g. Ice Code Games, Vulpesoft, Sylen
          Studio. I’m also constantly taking active part in various game-design
          events: Digital Dragons, Digital Dragons Academy, Write the Game, Game
          Jams, etc.
        </p>
        <div className='flex flex-col xl:flex-row xl:justify-evenly'>
          <Composition workshops={workshops} />
          <List
            listTitle='Topics to cover'
            text='If you’re interested in any of the above, feel free to contact me'
            listItems={workshopsListItems}
          />
        </div>
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default Workshops;
