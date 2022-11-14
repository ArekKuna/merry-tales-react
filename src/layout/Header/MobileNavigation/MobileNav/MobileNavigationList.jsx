import MobileNavigationListItem from "./MobileNavigationListItem";

const MobileNavigationListConfig = {
  home: {
    link: [
      {
        to: '#hero',
        text: 'home',
        id: 1,
      },
    ],
  },
  professional: {
    link: [
      {
        to: '#professional',
        text: 'professional',
        id: 2,
      },
    ],
  },
  videoGames: {
    link: [
      {
        to: '#video-games',
        text: 'video games',
        id: 3,
      },
    ],
  },
  tabletopGames: {
    link: [
      {
        to: '#tabletop-Games',
        text: 'tabletop games',
        id: 4,
      },
    ],
  },
  workshops: {
    link: [
      {
        to: '#workshops',
        text: 'workshops',
        id: 5,
      },
    ],
  },
  media: {
    link: [
      {
        to: '#media',
        text: 'media',
        id: 6,
      },
    ],
  },
  achievements: {
    link: [
      {
        to: '#achievements',
        text: 'achievements',
        id: 7,
      },
    ],
  },
  contact: {
    link: [
      {
        to: '#contact',
        text: 'contact',
        id: 8,
      },
    ],
  },
};


const MobileNavigationList = ({onClick}) => {
  const {
    home,
    professional,
    videoGames,
    tabletopGames,
    workshops,
    media,
    achievements,
    contact,
  } = MobileNavigationListConfig;

  return (
    <ul className='w-full h-full flex flex-col justify-center items-center space-y-3'>
      <MobileNavigationListItem links={home.link} onClick={onClick} />
      <MobileNavigationListItem links={professional.link} onClick={onClick} />
      <MobileNavigationListItem links={videoGames.link} onClick={onClick} />
      <MobileNavigationListItem links={tabletopGames.link} onClick={onClick} />
      <MobileNavigationListItem links={workshops.link} onClick={onClick} />
      <MobileNavigationListItem links={media.link} onClick={onClick} />
      <MobileNavigationListItem links={achievements.link} onClick={onClick} />
      <MobileNavigationListItem links={contact.link} onClick={onClick} />
    </ul>
  );
};

export default MobileNavigationList