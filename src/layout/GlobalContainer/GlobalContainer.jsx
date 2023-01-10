const variantMap = {
  def: 'relative w-full flex flex-col justify-evenly items-center bg-black before:absolute before:content-[""] before:bg-cover before:bg-no-repeat before:bg-center before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-30 xl:max-h-screen xl:border-2 xl:border-black',
  professional: 'before:bg-professional1280 xl:before:bg-professional1920',
  videoGames: 'before:bg-videoGames1280 xl:before:bg-videoGames1920',
};

const GlobalContainer = ({ children, variant = 'def' }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;
  return <div className={`${def} ${variantClasses}`}>{children}</div>;
};

export default GlobalContainer;
