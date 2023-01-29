import SpeakersAvenue from 'components/CompanyLogos/SpeakersAvenue/SpeakersAvenue';
import Quentin from 'components/CompanyLogos/Quentin/Quentin';
import Vulpesoft from 'components/CompanyLogos/Vulpesoft/Vulpesoft';
import Laurie from 'components/CompanyLogos/Laurie/Laurie';
import ChilliZet from 'components/CompanyLogos/ChilliZet/ChilliZet';
import IceCodeGames from 'components/CompanyLogos/IceCodeGames/IceCodeGames';
import CiGames from 'components/CompanyLogos/CiGames/CiGames';
import FlyingWildHog from 'components/CompanyLogos/FlyingWildHog/FlyingWildHog';
import BlackMonkGames from 'components/CompanyLogos/BlackMonkGames/BlackMonkGames';
import Chaosium from 'components/CompanyLogos/Chaosium/Chaosium';

const Partners = () => {
  return (
    <div className='w-full mb-20 flex flex-col items-center xl:mb-0 xl:w-[35%]'>
      <h2 className='mb-10 text-2xl text-center text-ghostWhite'>Partners</h2>
      <div className='w-full flex flex-wrap justify-evenly gap-3 md:w-3/4 xl:w-[90%]'>
        <FlyingWildHog />
        <CiGames />
        <ChilliZet />
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
