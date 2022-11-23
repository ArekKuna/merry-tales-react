import { GrMail, GrYoutube } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import SocialsItem from './SocialsItem/SocialsItem';

const SocialsBox = () => {
  return (
    <div className='w-full h-full flex sm:grid sm:grid-cols-2 sm:grid-rows-2'>
      <SocialsItem
        variant='facebook'
        element={
          <FaFacebookF className='mx-auto h-6 w-6 sm:h-12 sm:w-12 lg:h-8 lg:w-8' />
        }
        href='https://www.facebook.com/szmeryznadkamery'
      />
      <SocialsItem
        variant='linkedIn'
        element={
          <FaLinkedinIn className='mx-auto h-6 w-6 sm:h-12 sm:w-12 lg:h-8 lg:w-8' />
        }
        href='https://www.linkedin.com/in/maria-borys-pi%C4%85tkowska-126308149/'
      />
      <SocialsItem
        variant='youTube'
        element={
          <GrYoutube className='mx-auto h-6 w-6 sm:h-12 sm:w-12 lg:h-8 lg:w-8' />
        }
        href='https://www.youtube.com/@GrajKolektyw'
      />
      <SocialsItem
        variant='mail'
        element={
          <GrMail className='mx-auto h-6 w-6 sm:h-12 sm:w-12 lg:h-8 lg:w-8' />
        }
        href='mailto:merry.rpg@gmail.com?subject=Merry Tale Games Contact'
      />
    </div>
  );
};

export default SocialsBox;
