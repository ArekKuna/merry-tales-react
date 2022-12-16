import { useState } from 'react';

import merry from 'assets/about/about.webp';
import AboutParagraph from './AboutParagraph/AboutParagraph';

const About = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore((prevState) => !prevState);
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <h3 className='mb-10 text-4xl'>My story</h3>
      <div>
        <img src={merry} alt='Merry' className='w-full mb-10 object-cover ' />
      </div>
      <div>
        <div className='px-4'>
          <AboutParagraph
            text='Hi! I’m a storyteller with a knack for rhetoric and acting. I’m
            currently working as a writer and narrative designer at Flying Wild
            Hog game studio.'
          />
          <div
            className={
              !more
                ? 'max-h-0 overflow-hidden transition-all ease-in-out duration-700'
                : 'max-h-[550px] overflow-hidden transition-all duration-700'
            }
          >
            <AboutParagraph
              text='Since early childhood I’ve been exploring and creating fictional
              settings in various games, be it the tabletop RPG or video games.
              I’ve grown up on Call of Cthulhu and DnD, started my career as an
              RPG writer, then moved forward to the game industry. Writing and
              designing the narrative have become my forte. In my free time I
              practise boxing and do amateur theatre. Other than that I host a
              radio broadcast covering the topic of music in games. And so far,
              so good! ;)'
            />
          </div>
          <AboutParagraph text='more' variant='textEnd' onCLick={handleMore} />
        </div>
      </div>
    </div>
  );
};

export default About;
