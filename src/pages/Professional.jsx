import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import About from 'components/About/About';
import Stats from 'components/Stats/Stats';
import SocialsBox from 'components/SocialsBox/Socials';

const Professional = () => {
  return (
    <GlobalContainer
      loadingVariant='professionalLoading'
      readyVariant='professionalReady'
    >
      <PageTitle text='Professional' />
      <div className='w-full max-w-screen-2xl flex flex-col items-center z-10 xl:px-4 xl:flex-row xl:justify-center 2xl:px-0'>
        <About />
        <Stats />
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default Professional;
