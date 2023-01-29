import { useState, useEffect } from 'react';

const variantMap = {
  def: 'relative w-full flex flex-col justify-evenly items-center bg-black before:absolute before:content-[""] before:bg-cover before:bg-no-repeat before:bg-center before:top-0 before:bottom-0 before:right-0 before:left-0 before:blur-none before:duration-[3s] before:opacity-30 xl:max-h-screen',
  professionalLoading: 'before:bg-professionalLowRes before:blur-md',
  professionalReady: 'before:bg-professional1280 xl:before:bg-professional1920',
  videoGamesLoading: 'before:bg-videoGamesLowRes before:blur-md',
  videoGamesReady: 'before:bg-videoGames1280 xl:before:bg-videoGames1920',
  tabletopLoading: 'before:bg-tabletopLowRes before:blur-md',
  tabletopReady: 'before:bg-tabletop1280 xl:before:bg-tabletop1920',
  workshopsLoading: 'before:bg-workshopsLowRes before:blur-md',
  workshopsReady: 'before:bg-workshops1280 xl:before:bg-workshops1920',
  mediaLoading: 'before:bg-mediaLowRes before:blur-md',
  mediaReady: 'before:bg-media1280 xl:before:bg-media1920',
  achievementsLoading: 'before:bg-achievementsLowRes before:blur-md',
  achievementsReady: 'before:bg-achievements1280 xl:before:bg-achievements1920',
};

const GlobalContainer = ({ children, loadingVariant, readyVariant }) => {
  const [backgroundIsLoaded, setBackgroundIsLoaded] = useState();

  const variantClassesLoading = variantMap[loadingVariant];
  const variantClassesReady = variantMap[readyVariant];

  useEffect(() => {
    setBackgroundIsLoaded(true);
  }, []);

  const { def } = variantMap;
  return (
    <div
      className={
        backgroundIsLoaded
          ? `${def} ${variantClassesReady}`
          : `${def} ${variantClassesLoading}`
      }
    >
      {children}
    </div>
  );
};

export default GlobalContainer;
