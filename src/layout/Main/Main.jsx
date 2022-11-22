const Main = ({ children }) => {
  return (
    <main className='pt-header sm:grid sm:grid-cols-2 sm:grid-rows-1 border-10 border-black min-h-screen lg:grid-cols-8 lg:grid-rows-4 lg:max-h-screen lg:max-w-screen'>
      {children}
    </main>
  );
};

export default Main;
