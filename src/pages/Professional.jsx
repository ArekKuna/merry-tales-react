import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import About from 'components/About/About';
import Stats from 'components/Stats/Stats';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const Professional = () => {
  return (
    <GlobalContainer variant='professional'>
      <PageTitle text='Professional' />
      <div className='w-full max-w-screen-2xl flex flex-col items-center z-10 xl:flex-row xl:justify-center'>
        <About />
        <Stats />
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default Professional;
