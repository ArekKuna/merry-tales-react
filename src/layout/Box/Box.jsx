const variantMap = {
  def: 'flex flex-col justify-center w-full p-3 text-center font-medium border-b-10 border-black space-y-4 bg-orange-400 sm:p-6 sm:space-y-4 lg:p-0 lg:space-y-0 lg:justify-evenly',
  logo: '!p-0 !bg-gray-400 items-center lg:col-span-2 lg:row-span-1 lg:order-0',
  image:
    '!p-0 sm:col-span-2 sm:-order-1 lg:col-span-4 lg:row-span-3 lg:border-l-10 lg:order-2',
  about:
    '!px-2 items-center sm:border-l-10 lg:col-span-2 lg:row-span-1 lg:order-1',
  videoGames:
    '!p-0 sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:border-b-0 lg:flex lg:order-4',
  workshops:
    'items-center sm:border-r-10 lg:col-span-2 lg:row-span-1 lg:border-b-10 lg:border-l-10 lg:order-5',
  media: 'items-center lg:col-span-2 lg:row-span-1 lg:border-b-10 lg:order-6',
  tabletop:
    'sm:col-span-2 sm:pb-8 lg:col-span-4 lg:row-span-2 lg:space-y-2 lg:block lg:order-3',
  achievements:
    'items-center sm:border-r-10 sm:border-b-0 lg:col-span-3 lg:row-span-1 lg:border-l-10 lg:order-7',
  socials:
    '!p-0 items-center border-none lg:col-span-1 lg:row-span-1 lg:order-8',
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
