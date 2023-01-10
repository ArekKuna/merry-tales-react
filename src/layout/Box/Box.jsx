const variantMap = {
  def: 'w-full p-2 flex flex-col justify-center items-center text-center font-medium border-b-2 border-black space-y-4 bg-ghostWhite sm:p-4 sm:space-y-6 md:space-y-4 lg:p-6 lg:space-y-6 xl:p-2 xl:space-y-2',
  logo: '!bg-black sm:border-r-2 xl:col-span-2 xl:row-span-2 xl:order-0 xl:border-r-0',
  image:
    '!p-0 row-span-2 sm:col-span-2 bg-hero1100 bg-cover bg-center bg-no-repeat sm:row-span-1 sm:-order-1 sm:bg-hero1800 xl:col-span-4 xl:row-span-3 xl:border-l-2 xl:order-2 xl:bg-hero2200',
  about:
    'lg:!space-y-12 xl:!p-0 xl:justify-evenly xl:!space-y-0 xl:col-span-2 xl:row-span-1 xl:order-3 xl:border-t-0',
  videoGames:
    '!flex-row items-stretch !p-0 sm:col-span-2 xl:col-span-4 xl:row-span-2 xl:border-b-0 xl:order-4',
  workshops:
    'sm:border-r-2 xl:col-span-2 xl:row-span-1 xl:border-b-2 xl:border-l-2 xl:order-5',
  media: 'xl:col-span-2 xl:row-span-1 xl:border-b-2 xl:order-6',
  tabletop:
    'sm:col-span-2 sm:pb-8 xl:col-span-2 xl:row-span-3 xl:space-y-2 xl:border-l-2 xl:order-1',
  achievements:
    'sm:border-r-2 sm:border-b-0 xl:col-span-3 xl:row-span-1 xl:border-l-2 xl:order-7',
  socials: '!p-0 border-none xl:col-span-1 xl:row-span-1 xl:order-8',
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
