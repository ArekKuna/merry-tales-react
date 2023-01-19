import ReactMarkdown from 'react-markdown';

import { sectionParagraphs } from 'data/sectionParagraphs';

const SectionParagraph = ({ variant }) => {
  const variantParagraph = sectionParagraphs[variant];

  const { def } = sectionParagraphs;

  return (
    <ReactMarkdown
      className={`${def.className} ${variantParagraph.className}`}
    >{`${variantParagraph.text}`}</ReactMarkdown>
  );
};

export default SectionParagraph;
