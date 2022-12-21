import PageTitle from 'layout/PageTitle/PageTitle';
import About from 'components/About/About';
import Stats from 'components/Stats/Stats';
import SocialsBox from 'components/Boxes/SocialsBox/Socials';

const Professional = () => {
  return (
    <>
      <PageTitle text='Professional' />
      <About />
      <Stats />
      <SocialsBox variant='fixed' />
    </>
  );
};

export default Professional;
