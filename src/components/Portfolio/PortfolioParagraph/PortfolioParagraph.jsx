import ReactMarkdown from 'react-markdown';

const PortfolioParagraph = () => {
  const markdown = `So far I’ve worked on several titles - ****Sniper Ghost Warrior 3****, ****Sniper
      Ghost Warrior Contracts****, ****Shadow Warrior 3****, ****Lords of the Fallen iOS**** and
      ****Evil West****. In all titles I’ve been a part of the story design team, being
      responsible for character and story creation, narrative design on levels
      and VO recording.`;

  return (
    <ReactMarkdown className='px-4 mb-14 text-center text-ghostWhite sm:w-3/4 xl:w-1/2 xl:mb-10'>
      {markdown}
    </ReactMarkdown>
  );
};

export default PortfolioParagraph;
