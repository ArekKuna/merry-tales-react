const variantMap = {
  def: 'p-2 w-1/4 bg-black sm:w-full sm:h-full flex items-center justify-center',
  facebookHome: 'border-r-2 border-ghostWhite sm:border-b-2',
  linkedInHome: 'border-r-2 border-ghostWHite sm:border-r-0 sm:border-b-2',
  youTubeHome: 'border-r-2 border-ghostWhite',
  facebook: 'border-r-2 xl:border-r-2',
  linkedin: 'border-r-2',
  youtube: 'border-r-2',
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
