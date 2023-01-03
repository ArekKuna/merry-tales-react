import PageTitle from 'layout/PageTitle/PageTitle';
import About from 'components/About/About';
import Stats from 'components/Stats/Stats';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const Professional = () => {
  return (
    <>
      <PageTitle text='Professional' />
      <div className='w-full max-w-screen-2xl flex flex-col items-center xl:flex-row xl:justify-center'>
        <About />
        <Stats />
      </div>
      <SocialsBox variant='fixed' />
    </>
  );
};

export default Professional;
