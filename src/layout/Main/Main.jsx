const Main = ({ children }) => {
  return (
    <main className='pt-header sm:grid sm:grid-cols-2 sm:grid-rows-1 border-10 border-black min-h-screen'>
      {children}
    </main>
  );
};

export default Main;
