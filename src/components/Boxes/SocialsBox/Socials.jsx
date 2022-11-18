import { GrMail, GrYoutube } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import SocialsItem from './SocialsItem/SocialsItem';

const SocialsBox = () => {
  return (
    <div className='w-full flex'>
      <SocialsItem element={<FaFacebookF size='30' className='mx-auto' />} />
      <SocialsItem
        variant='borderLeft'
        element={<FaLinkedinIn size='30' className='mx-auto' />}
      />
      <SocialsItem
        variant='borderLeft'
        element={<GrYoutube size='30' className='mx-auto' />}
      />
      <SocialsItem
        variant='borderLeft'
        element={<GrMail size='30' className='mx-auto' />}
      />
    </div>
  );
};

export default SocialsBox;
