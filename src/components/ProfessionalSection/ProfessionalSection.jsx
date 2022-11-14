import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";

import img from '../../assets/mobile/hero-image.jpg'

const ProfessionalSection = () => {
  return (
    <Section id='professional'>
      <Container>
        <SectionTitle
          title='Professional'
          text='my writing and designing skills'
        />
        <div className="mx auto max-w-xs border-4 flex flex-col border-black rounded-lg bg-slate-700 shadow-lg shadow-black mb-64">
          <img src={img} alt='' className='w-36 rounded-full' />
          <div>
            <h3>About me</h3>
            <p>
              Hi! I’m a storyteller with a knack for rhetoric and acting. I’m
              currently working as a writer and narrative designer at Flying
              Wild Hog game studio. Since early childhood I’ve been exploring
              and creating fictional settings in various games, be it the
              tabletop RPG or video games. I’ve grown up on Call of Cthulhu and
              DnD, started my career as an RPG writer, then moved forward to the
              game industry. Writing and designing the narrative have become my
              forte. In my free time I practise boxing and do amateur theatre.
              Other than that I host a radio broadcast covering the topic of
              music in games. And so far, so good! ;)
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProfessionalSection; 