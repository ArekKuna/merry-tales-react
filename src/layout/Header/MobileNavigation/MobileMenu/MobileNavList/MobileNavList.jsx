import MobileNavItem from 'layout/Header/MobileNavigation/MobileMenu/MobileNavItem/MobileNavItem';

const MobileMenuConfig = {
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
        text: 'video games',
        id: 3,
      },
    ],
  },
  tabletopGames: {
    links: [
      {
        to: '/tabletopGames',
        text: 'tabletop games',
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

const MobileNavList = ({ onClick }) => {
  const {
    home,
    professional,
    videoGames,
    tabletopGames,
    workshops,
    media,
    achievements,
  } = MobileMenuConfig;

  return (
    <ul className='flex flex-col items-center'>
      <MobileNavItem links={home.links} onClick={onClick} />
      <MobileNavItem links={professional.links} onClick={onClick} />
      <MobileNavItem links={videoGames.links} onClick={onClick} />
      <MobileNavItem links={tabletopGames.links} onClick={onClick} />
      <MobileNavItem links={workshops.links} onClick={onClick} />
      <MobileNavItem links={media.links} onClick={onClick} />
      <MobileNavItem links={achievements.links} onClick={onClick} />
    </ul>
  );
};

export default MobileNavList;
