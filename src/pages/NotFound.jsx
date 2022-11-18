import { Link } from 'react-router-dom';

import Main from 'layout/Main/Main';

const NotFound = () => {
  return (
    <Main>
      <h1>Page not Found</h1>
      <Link to='/'>Home</Link>
    </Main>
  );
};

export default NotFound;
