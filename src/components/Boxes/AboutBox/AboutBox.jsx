import { Link } from 'react-router-dom';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import BoxParagraph from 'components/Boxes/BoxParagraph/BoxParagraph';

const AboutBox = () => {
  return (
    <>
      <BoxTitle
        to='professional'
        title='Maria Borys-Piątkowska'
      />
      <BoxParagraph
        variant='about'
        text='Storyteller - game writer - narrative designer'
      />
      <Link to='/professional'>
        <BoxParagraph variant='link' text="What's my story..." />
      </Link>
    </>
  );
};

export default AboutBox;
