const variantMap = {
  def: 'text-xl font-bold tracking-tight sm:text-xl lg:text-base lg:leading-5',
  about: 'lg:text-sm lg:leading-4',
};

const BoxParagraph = ({ text, variant='def' }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return <p className={`${def} ${variantClasses}`}>{text}</p>;
};

export default BoxParagraph;
