import Header from 'layout/Header/Header';
import Main from 'layout/Main/Main';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
