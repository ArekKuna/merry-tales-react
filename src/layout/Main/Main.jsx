const variantMap = {
  def: 'pt-header min-h-screen w-full xl:h-screen xl:max-h-screen',
  grid: 'grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-3 xl:max-h-screen xl:grid-cols-8 xl:grid-rows-5',
  flex: 'flex justify-center',
};

const Main = ({ children, variant = 'def' }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return <main className={`${def} ${variantClasses}`}>{children}</main>;
};

export default Main;
