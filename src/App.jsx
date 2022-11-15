import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import HomePage from './pages/HomePage';
import Professional from "./pages/Professional";
import VideoGames from "./pages/VideoGames";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/videoGames' element={<VideoGames />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
