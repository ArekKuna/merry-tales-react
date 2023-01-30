import { Link } from 'react-router-dom';

import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import SocialsBox from 'components/SocialsBox/Socials';

const NotFound = () => {
  return (
    <GlobalContainer
      loadingVariant='notFoundLoading'
      readyVariant='notFoundReady'
    >
      <div className='px-4 py-10 z-10 flex flex-1 flex-col justify-center'>
        <PageTitle text='page not found' />
        <p className='mb-10 text-xl text-center uppercase text-ghostWhite xl:my-10'>
          The page you are looking for does not exist
        </p>
        <Link to='/'>
          <p className='text-xl text-center underline underline-offset-4 uppercase text-ghostWhite'>
            Let's go back Home
          </p>
        </Link>
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default NotFound;
