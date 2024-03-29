import Main from 'layout/Main/Main';
import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import SectionParagraph from 'layout/SectionParagraph/SectionParagraph';
import AchievementsComposition from 'components/AchievementsComposition/AchievementsComposition';
import Partners from 'components/Partners/Partners';
import SocialsBox from 'components/SocialsBox/Socials';

const Achievements = () => {
  return (
    <Main variant='flex'>
      <GlobalContainer
        loadingVariant='achievementsLoading'
        readyVariant='achievementsReady'
      >
        <PageTitle text='achievements' />
        <div className='z-20 max-w-screen-2xl'>
          <SectionParagraph textVariant='achievements' />
          <div className='px-4 flex flex-col justify-center items-center xl:px-0 xl:flex-row'>
            <AchievementsComposition />
            <Partners />
          </div>
        </div>
        <SocialsBox variant='fixed' />
      </GlobalContainer>
    </Main>
  );
};

export default Achievements;
