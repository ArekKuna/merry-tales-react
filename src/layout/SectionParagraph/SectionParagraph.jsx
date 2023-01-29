import ReactMarkdown from 'react-markdown';

import { sectionParagraphs } from 'data/sectionParagraphs';

const variantMap = {
  def: 'px-4 mb-14 mx-auto text-base text-center text-ghostWhite sm:w-3/4',
  cthulhu: 'mx-0 sm:max-w-[75%] md:max-w-[60%] xl:mb-0 xl:p-0 xl:max-w-[40%]',
  otherTabletops:
    'mx-0 sm:max-w-[75%] md:max-w-[60%] xl:mb-0 xl:p-0 xl:max-w-[40%]',
  workshops: 'xl:w-full',
};

const SectionParagraph = ({ textVariant, variant = 'def' }) => {
  const variantParagraph = sectionParagraphs[textVariant];
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
    <ReactMarkdown
      className={`${def} ${variantClasses}`}
    >{`${variantParagraph.text}`}</ReactMarkdown>
  );
};

export default SectionParagraph;
