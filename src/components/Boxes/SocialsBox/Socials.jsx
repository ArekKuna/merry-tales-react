import { GrMail, GrYoutube } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import SocialsItem from './SocialsItem/SocialsItem';

const SocialsBox = () => {
  return (
    <div className='w-full flex'>
      <SocialsItem
        element={<FaFacebookF size='30' className='mx-auto' />}
        href='https://www.facebook.com/szmeryznadkamery'
      />
      <SocialsItem
        variant='borderLeft'
        element={<FaLinkedinIn size='30' className='mx-auto' />}
        href='https://www.linkedin.com/in/maria-borys-pi%C4%85tkowska-126308149/'
      />
      <SocialsItem
        variant='borderLeft'
        element={<GrYoutube size='30' className='mx-auto' />}
        href='https://www.youtube.com/@GrajKolektyw'
      />
      <SocialsItem
        variant='borderLeft'
        element={<GrMail size='30' className='mx-auto' />}
        href='mailto:merry.rpg@gmail.com?subject=Merry Tale Games Contact'
      />
    </div>
  );
};

export default SocialsBox;
