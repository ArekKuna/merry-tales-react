import { Link } from 'react-router-dom';

const AboutBox = () => {
  return (
    <>
      <h2 className='text-4xl font-black uppercase'>Merry Borys Piątkowska</h2>
      <p className='text-lg'>Writing and narrative design</p>
      <Link to='/professional'>
        <p className='font-black text-2xl mt-4 underline underline-offset-4'>
          Read more about me!
        </p>
      </Link>
    </>
  );
};

export default AboutBox;
