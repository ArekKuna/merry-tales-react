const variantMap = {
  def: 'w-full border-b-8 border-black',
  logo: 'mt-[55px] bg-gray-300 py-8',
  about:
    'px-4 py-10 text-center text-black font-medium tracking-wide space-y-8 bg-indigo-200',
  videoGames: 'pt-12 space-y-12 bg-indigo-200',
};

const Box = ({ children, variant }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return <div className={`${def} ${variantClasses}`}>{children}</div>;
};

export default Box;
