import { useLocation } from 'react-router-dom';

import Header from 'components/Header/Header';
import Main from 'layout/Main/Main';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Main variant={pathname === '/' ? 'grid' : 'flex'}>{children}</Main>
    </>
  );
};

export default Layout;
