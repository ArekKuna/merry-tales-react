import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

import merry from 'assets/about/about.webp';

import SectionTitle from 'layout/SectionTitle/SectionTitle';
import AboutParagraph from './AboutParagraph/AboutParagraph';

const About = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore((prevState) => !prevState);
  };

  return (
    <div className='w-full max-w-lg pb-10 flex flex-col items-center lg:max-w-3xl xl:max-w-xl'>
      <SectionTitle sectionTitle='My story' />
      <div className='flex justify-center'>
        <img
          src={merry}
          alt='Merry'
          className='w-full mb-10 object-cover min-h-[350px] sm:w-1/2 lg:w-3/4'
        />
      </div>
      <div>
        <div className='px-6'>
          <AboutParagraph
            text='Hi! I’m a storyteller with a knack for rhetoric and acting. I’m
            currently working as a writer and narrative designer at Flying Wild
            Hog game studio.'
          />
          <div
            className={
              !more
                ? 'max-h-0 overflow-hidden transition-all ease-in-out duration-1000'
                : 'max-h-[550px] overflow-hidden transition-all duration-1000'
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
          <div className='flex justify-end items-center'>
            <p
              className='mr-2 font-semibold underline underline-offset-2 cursor-pointer'
              onClick={handleMore}
            >
              {more ? 'less' : 'more'}
            </p>
            <AiOutlineDown
              className={
                more
                  ? 'text-lg rotate-180 transition-all duration-700'
                  : 'text-lg transition-all duration-700'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
