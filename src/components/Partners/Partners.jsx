import FlyingWildHog from 'components/CompanyLogos/FlyingWildHog/FlyingWildHog';
import CiGames from 'components/CompanyLogos/CiGames/CiGames';
import ChilliZet from 'components/CompanyLogos/ChilliZet/ChilliZet';
import PolsatGames from 'components/CompanyLogos/PolsatGames/PolsatGames';
import WarsawFilmSchool from 'components/CompanyLogos/WarsawFilmSchool/WarsawFilmSchool';
import SpeakersAvenue from 'components/CompanyLogos/SpeakersAvenue/SpeakersAvenue';
import Vulpesoft from 'components/CompanyLogos/Vulpesoft/Vulpesoft';
import IceCodeGames from 'components/CompanyLogos/IceCodeGames/IceCodeGames';
import Quentin from 'components/CompanyLogos/Quentin/Quentin';
import Chaosium from 'components/CompanyLogos/Chaosium/Chaosium';
import Laurie from 'components/CompanyLogos/Laurie/Laurie';
import BlackMonkGames from 'components/CompanyLogos/BlackMonkGames/BlackMonkGames';

const Partners = () => {
  return (
    <div className='w-full mb-20 flex flex-col items-center xl:mb-0 xl:w-[35%]'>
      <h2 className='mb-10 text-2xl text-center text-ghostWhite'>Partners</h2>
      <div className='w-full flex flex-wrap justify-evenly gap-2 md:w-3/4 xl:w-[90%]'>
        <FlyingWildHog />
        <CiGames />
        <ChilliZet />
        <PolsatGames />
        <WarsawFilmSchool />
        <SpeakersAvenue />
        <Vulpesoft />
        <IceCodeGames />
        <Quentin />
        <Chaosium />
        <Laurie />
        <BlackMonkGames />
      </div>
    </div>
  );
};

export default Partners;
