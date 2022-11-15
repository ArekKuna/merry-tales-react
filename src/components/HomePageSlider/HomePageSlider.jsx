import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from '../../layout/Image/Image';

import evilWest from '../../assets/mobile/games/evil-west.jpeg';
import lordsOfTheFallen from '../../assets/mobile/games/lords-of-the-fallen.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

const HomePageSlider = () => {
  return (
    <Swiper modules={[Navigation]} navigation>
      <SwiperSlide>
        <Image src={evilWest} alt='Evil West' loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={lordsOfTheFallen}
          alt='Lords Of The Fallen'
          loading='lazy'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src={evilWest} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={evilWest} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={evilWest} alt='' />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePageSlider;
