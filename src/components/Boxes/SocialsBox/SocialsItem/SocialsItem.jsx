const variantMap = {
  def: 'p-2 w-1/4 bg-gray-300',
  borderLeft: 'border-l-10 border-black',
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
