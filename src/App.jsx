import { Routes, Route } from 'react-router-dom';

import Layout from 'layout/Layout/Layout';
import HomePage from 'pages/HomePage';
import Professional from 'pages/Professional';
import VideoGames from 'pages/VideoGames';
import Workshops from 'pages/Workshops';
import Media from 'pages/Media';
import TabletopGames from 'pages/TabletopGames';
import Achievements from 'pages/Achievements';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/professional' element={<Professional />} />
          <Route path='/videoGames' element={<VideoGames />} />
          <Route path='/workshops' element={<Workshops />} />
          <Route path='/media' element={<Media />} />
          <Route path='/tabletopGames' element={<TabletopGames />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
