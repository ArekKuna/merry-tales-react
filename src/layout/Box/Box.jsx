const variantMap = {
  def: 'flex flex-col items-center justify-center w-full px-2 py-6 text-center font-medium border-b-10 border-black space-y-5 bg-indigo-200 sm:p-4 sm:space-y-6',
  logo: '!p-0 !bg-gray-300 sm:-order-1',
  image: '!p-0 sm:col-span-2 sm:order-2',
  about: 'px-6 tracking-wide sm:-order-1 sm:border-l-10',
  videoGames: '!block pt-8 px-0 pb-0 sm:order-3 sm:col-span-2 sm:p-0 sm:pt-3',
  workshops: 'sm:order-5 sm:border-r-10',
  media: 'sm:order-6',
  tabletop: '!block px-0 sm:order-4 sm:col-span-2 sm:pb-8',
  achievements: 'sm:order-7 sm:border-r-10 sm:border-b-0',
  socials: '!p-0 border-none sm:order-8',
};

const Box = ({ children, variant = 'def', id }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
    <div id={id} className={`${def} ${variantClasses}`}>
      {children}
    </div>
  );
};

export default Box;
