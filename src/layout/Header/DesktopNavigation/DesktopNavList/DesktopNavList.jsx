import DesktopNavItem from 'layout/Header/DesktopNavigation/DesktopNavItem/DesktopNavItem';

const DesktopMenuConfig = {
  home: {
    links: [
      {
        to: '/',
        text: 'home',
        id: 1,
      },
    ],
  },
  professional: {
    links: [
      {
        to: '/professional',
        text: 'professional',
        id: 2,
      },
    ],
  },
  videoGames: {
    links: [
      {
        to: '/videoGames',
        text: 'games',
        id: 3,
      },
    ],
  },
  tabletopGames: {
    links: [
      {
        to: '/tabletopGames',
        text: 'TTRPG',
        id: 4,
      },
    ],
  },
  workshops: {
    links: [
      {
        to: '/workshops',
        text: 'workshops',
        id: 5,
      },
    ],
  },
  media: {
    links: [
      {
        to: '/media',
        text: 'media',
        id: 6,
      },
    ],
  },
  achievements: {
    links: [
      {
        to: '/achievements',
        text: 'achievements',
        id: 7,
      },
    ],
  },
};

const DesktopNavList = () => {
  return (
    <ul className='flex w-full justify-center items-center space-x-5 capitalize'>
      <DesktopNavItem links={DesktopMenuConfig.home.links} />
      <DesktopNavItem links={DesktopMenuConfig.professional.links} />
      <DesktopNavItem links={DesktopMenuConfig.videoGames.links} />
      <DesktopNavItem links={DesktopMenuConfig.tabletopGames.links} />
      <DesktopNavItem links={DesktopMenuConfig.workshops.links} />
      <DesktopNavItem links={DesktopMenuConfig.media.links} />
      <DesktopNavItem links={DesktopMenuConfig.achievements.links} />
    </ul>
  );
};

export default DesktopNavList;
