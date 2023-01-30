import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from 'pages/HomePage';
import Professional from 'pages/Professional';
import VideoGames from 'pages/VideoGames';
import Workshops from 'pages/Workshops';
import Media from 'pages/Media';
import TabletopGames from 'pages/TabletopGames';
import Achievements from 'pages/Achievements';
import NotFound from 'pages/NotFound';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/videoGames' element={<VideoGames />} />
        <Route path='/workshops' element={<Workshops />} />
        <Route path='/media' element={<Media />} />
        <Route path='/tabletopGames' element={<TabletopGames />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
