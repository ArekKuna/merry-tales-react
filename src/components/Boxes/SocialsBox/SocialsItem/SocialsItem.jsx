const variantMap = {
    def: 'p-5 w-1/4 bg-gray-300',
    borderLeft: 'border-l-10 border-black'
};

const SocialsItem = ({ element, variant }) => {
    const variantClasses = variantMap[variant];
    
    const { def } = variantMap;

  return <div className={`${def} ${variantClasses}`}>{element}</div>;
};

export default SocialsItem