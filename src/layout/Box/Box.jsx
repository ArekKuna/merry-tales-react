const variantMap = {
  def: 'w-full border-b-10 border-black bg-gray-300',
  about:
    'px-6 py-8 text-center text-black font-medium tracking-wide space-y-5 bg-indigo-200',
  videoGames: 'pt-8 space-y-5 bg-indigo-200',
  workshops: 'px-2 py-8 flex flex-col items-center space-y-5 bg-indigo-200',
  media: 'px-2 py-8 flex flex-col items-center space-y-5 bg-indigo-200',
  tabletop: 'py-8 space-y-5 bg-indigo-200',
  achievements: 'px-2 py-8 flex flex-col items-center space-y-5 bg-indigo-200',
};

const Box = ({ children, variant = 'def' }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return <div className={`${def} ${variantClasses}`}>{children}</div>;
};

export default Box;
