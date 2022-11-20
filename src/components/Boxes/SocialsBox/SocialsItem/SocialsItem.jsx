const variantMap = {
  def: 'p-2 w-1/4 bg-gray-300 sm:w-full sm:h-full flex items-center justify-center',
  facebook: 'border-r-10 border-black sm:border-b-10',
  linkedIn: 'border-r-10 border-black sm:border-r-0 sm:border-b-10',
  youTube: 'border-r-10 border-black',
  mail: '',
};

const SocialsItem = ({ element, variant, href }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={`${def} ${variantClasses}`}
    >
      {element}
    </a>
  );
};

export default SocialsItem;
