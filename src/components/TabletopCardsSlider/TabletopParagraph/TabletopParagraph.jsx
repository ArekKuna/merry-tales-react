import ReactMarkdown from 'react-markdown';

const TabletopParagraph = ({ markdown }) => {
  return (
    <ReactMarkdown className='px-6 mb-14 text-base text-center text-white sm:max-w-[75%] md:max-w-[60%] xl:mb-0 xl:max-w-[40%]'>
      {markdown}
    </ReactMarkdown>
  );
};

export default TabletopParagraph;
