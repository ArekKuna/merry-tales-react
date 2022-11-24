const Main = ({ children }) => {
  return (
    <main className='pt-header sm:grid sm:grid-cols-2 sm:grid-rows-1 border-10 border-black min-h-screen xl:grid-cols-8 xl:grid-rows-5 xl:max-h-screen xl:max-w-screen'>
      {children}
    </main>
  );
};

export default Main;
