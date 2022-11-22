import { Link } from 'react-router-dom';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const AboutBox = () => {
  return (
    <>
      <BoxTitle to='professional' title='Maria Borys-Piątkowska' />
      <BoxParagraph text='Storyteller - game writer - narrative designer' />
      <Link to='/professional'>
        <p className='font-black text-xl underline underline-offset-4 sm:text-3xl lg:text-xl'>
          What's my story?
        </p>
      </Link>
    </>
  );
};

export default AboutBox;
