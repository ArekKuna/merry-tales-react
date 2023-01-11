import ReactMarkdown from 'react-markdown';

const PortfolioParagraph = () => {
  const markdown = `So far I’ve worked on several titles - ****Sniper Ghost Warrior 3****, ****Sniper
      Ghost Warrior Contracts****, ****Shadow Warrior 3****, ****Lords of the Fallen iOS**** and
      ****Evil West****. In all titles I’ve been a part of the story design team, being
      responsible for character and story creation, narrative design on levels
      and VO recording.`;

  return (
    <ReactMarkdown className='px-6 mb-10 mx-auto text-center text-white sm:w-3/4 xl:w-1/2 xl:mb-12'>
      {markdown}
    </ReactMarkdown>
  );
};

export default PortfolioParagraph;
