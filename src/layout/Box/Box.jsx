const variantMap = {
  def: 'w-full p-2 text-center font-medium border-b-10 border-black space-y-4 bg-orange-400 sm:p-4 sm:space-y-6 md:space-y-4 lg:p-6 lg:space-y-6 xl:p-2 xl:space-y-2',
  logo: 'flex justify-center !bg-gray-400 items-center sm:border-r-10 xl:col-span-2 xl:row-span-2 xl:order-0 xl:border-r-0',
  image:
    '!p-0 flex flex-col row-span-2 sm:col-span-2 sm:row-span-2 sm:-order-1 xl:col-span-4 xl:row-span-3 xl:border-l-10 xl:order-2',
  about:
    'flex flex-col justify-center items-center lg:!space-y-12 xl:!p-0 xl:!space-y-1 xl:col-span-2 xl:row-span-1 xl:order-3 xl:border-t-0',
  videoGames:
    '!p-0 sm:col-span-2 xl:col-span-4 xl:row-span-2 xl:border-b-0 xl:flex xl:order-4',
  workshops:
    'flex flex-col justify-center items-center sm:border-r-10 xl:col-span-2 xl:row-span-1 xl:border-b-10 xl:border-l-10 xl:order-5',
  media:
    ' flex flex-col justify-center items-center items-center xl:col-span-2 xl:row-span-1 xl:border-b-10 xl:order-6',
  tabletop:
    'sm:col-span-2 sm:pb-8 xl:col-span-2 xl:row-span-3 xl:flex xl:flex-col xl:justify-center xl:items-center xl:space-y-2 xl:border-l-10 xl:order-1',
  achievements:
    'flex flex-col justify-center items-center items-center sm:border-r-10 sm:border-b-0 xl:col-span-3 xl:row-span-1 xl:border-l-10 xl:order-7',
  socials:
    '!p-0 items-center border-none xl:col-span-1 xl:row-span-1 xl:order-8',
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
