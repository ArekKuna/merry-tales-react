const variantMap = {
  def: 'group py-2 w-1/4 flex items-center justify-center bg-black border-ghostWhite sm:w-full sm:h-full xl:hover:bg-ghostWhite xl:duration-500',
  facebookHome: 'border-r-2 border-ghostWhite sm:border-b-2',
  linkedInHome: 'border-r-2 border-ghostWHite sm:border-r-0 sm:border-b-2',
  youTubeHome: 'border-r-2 border-ghostWhite',
  facebook:
    'border-r-2 !border-black bg-ghostWhite  xl:border-r-2 xl:hover:!bg-black',
  linkedin: 'border-r-2 !border-black bg-ghostWhite xl:hover:!bg-black',
  youtube: 'border-r-2 !border-black bg-ghostWhite xl:hover:!bg-black',
  email: 'bg-ghostWhite xl:hover:!bg-black',
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
