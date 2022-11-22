const variantMap = {
  def: 'flex flex-col justify-center w-full p-3 text-center font-medium border-b-10 border-black space-y-4 bg-orange-400 sm:p-6 sm:space-y-6 lg:p-0 lg:space-y-0 lg:justify-evenly',
  logo: '!p-0 !bg-gray-400 items-center sm:-order-1 lg:col-span-2 lg:row-span-1',
  image: '!p-0 sm:col-span-2 sm:-order-2 lg:col-span-4 lg-row-span-1 lg:order-2',
  about: 'sm:-order-1 items-center sm:border-l-10 lg:col-span-2 lg:row-span-1',
  videoGames:
    '!p-0 sm:order-3 sm:col-span-2 lg:col-span-4 lg:row-span-3 lg:border-b-0',
  workshops:
    'items-center sm:order-5 sm:border-r-10 lg:col-span-3 lg:row-span-1 lg:border-l-10',
  media: 'items-center sm:order-6 lg:col-span-1 lg:row-span-1',
  tabletop:
    'sm:order-4 sm:col-span-2 sm:pb-8 lg:order-1 lg:col-span-4 lg:row-span-2 lg:border-l-10',
  achievements:
    'items-center sm:order-7 sm:border-r-10 sm:border-b-0 lg:col-span-3 lg:row-span-1 lg:border-l-10',
  socials:
    '!p-0 items-center border-none sm:order-8 lg:col-span-1 lg:row-span-1',
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
