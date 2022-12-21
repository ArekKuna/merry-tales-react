import { useLocation } from 'react-router-dom';
import { GrMail, GrYoutube } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import SocialsItem from './SocialsItem/SocialsItem';

const variantMap = {
  def: 'w-full h-full flex sm:grid sm:grid-cols-2 sm:grid-rows-2',
  fixed: 'sm:!flex xl:fixed xl:!grid  xl:bottom-0 xl:right-0 xl:w-40 xl:h-40',
};

const SocialsBox = ({ variant }) => {
  const location = useLocation();
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
    <div className={`${def} ${variantClasses}`}>
      <SocialsItem
        variant={location.pathname === '/' ? 'facebookHome' : 'facebook'}
        element={<FaFacebookF className='mx-auto h-8 w-8' fill='#fff' />}
        href='https://www.facebook.com/szmeryznadkamery'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'linkedInHome' : 'linkedin'}
        element={<FaLinkedinIn className='mx-auto h-8 w-8' fill='#fff' />}
        href='https://www.linkedin.com/in/maria-borys-pi%C4%85tkowska-126308149/'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'youTubeHome' : 'youtube'}
        element={<GrYoutube className='mx-auto h-8 w-8' fill='#fff' />}
        href='https://www.youtube.com/@GrajKolektyw'
      />
      <SocialsItem
        variant='mail'
        element={<GrMail className='mx-auto h-8 w-8' fill='#fff' />}
        href='mailto:merry.rpg@gmail.com?subject=Merry Tale Games Contact'
      />
    </div>
  );
};

export default SocialsBox;
