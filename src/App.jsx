import Header from 'components/Header/Header';
import ScrollToTop from 'helpers/ScrollToTop';
import AnimatedRoutes from 'layout/AnimatedRoutes/AnimatedRoutes';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  );
}

export default App;
