const GlobalContainer = ({ children }) => {
  return (
    <div className='relative w-full flex flex-col justify-evenly items-center bg-black before:absolute before:content-[""] before:bg-professional before:bg-cover before:bg-no-repeat before:bg-center before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-30 xl:max-h-screen xl:border-2 xl:border-black'>
      {children}
    </div>
  );
};

export default GlobalContainer;
