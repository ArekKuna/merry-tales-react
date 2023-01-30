import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import SectionParagraph from 'layout/SectionParagraph/SectionParagraph';
import Composition from 'components/Composition/Composition';
import List from 'components/List/List';
import SocialsBox from 'components/SocialsBox/Socials';

import { workshops } from 'data/workshops';
import { workshopsListItems } from 'data/workshopsList';

const Workshops = () => {
  return (
    <GlobalContainer
      loadingVariant='workshopsLoading'
      readyVariant='workshopsReady'
    >
      <PageTitle text='Workshops' />
      <div className='z-20 max-w-screen-2xl lg:px-16 xl:px-4'>
        <SectionParagraph textVariant='workshops' variant='workshops' />
        <div className='flex flex-col xl:flex-row xl:justify-evenly'>
          <Composition workshops={workshops} />
          <List listTitle='Topics to cover' listItems={workshopsListItems} />
        </div>
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default Workshops;
