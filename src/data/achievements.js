import WomenInGames from 'components/CompanyLogos/WomenInGames/WomenInGames';
import GameDevelopersConference from 'components/CompanyLogos/GameDevelopersConference/GameDevelopersConference';
import UniversityBristishColumbia from 'components/CompanyLogos/UniversityBristishColumbia/UniversityBristishColumbia';
import SDIMedia from 'components/CompanyLogos/SDIMedia/SDIMedia';

export const achievements = [
  {
    id: 1,
    element: <WomenInGames />,
    title: 'Women In Games Ambassador',
    description: 'Ambassador of the Women in Games international society',
  },
  {
    id: 4,
    element: <SDIMedia />,
    title: 'Voice Over practice workshops by SDI Media',
    description: 'Voice Over recording workshops led by Joanna Węgrzynowska',
  },
  {
    id: 3,
    element: <UniversityBristishColumbia />,
    title: '“Writing dialogues for games” by University of British Columbia',
    description: 'Writing Dialogues for Games - a half-yearly course',
  },
  {
    id: 2,
    element: <GameDevelopersConference />,
    title:
      '"How to bring story and gameplay together” by Susan O’Connor GDC Masterclass',
    description: 'Learning from the best - Susan O’Connor, BioShock writer',
  },
];
