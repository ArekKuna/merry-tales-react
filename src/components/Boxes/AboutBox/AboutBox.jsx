import { Link } from 'react-router-dom';

const AboutBox = () => {
  return (
    <>
      <h2 className='text-4xl font-black uppercase'>Maria Borys-Piątkowska</h2>
      <p className='text-lg sm:text-xl'>Storyteller - game writer - narrative designer</p>
      <Link to='/professional'>
        <p className='font-black text-3xl underline underline-offset-4'>
          What's my story?
        </p>
      </Link>
    </>
  );
};

export default AboutBox;
