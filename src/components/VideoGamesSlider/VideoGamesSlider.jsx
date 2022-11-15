import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from '../../layout/Image/Image';

import evilWest from '../../assets/mobile/games/evil-west.jpeg';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoGamesSlider = () => {
    return (
      <Swiper modules={[Navigation]} navigation>
        <SwiperSlide>
          <img src={evilWest} alt='' />
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
        <SwiperSlide>
          <img src={evilWest} alt='' />
        </SwiperSlide>
      </Swiper>
    );
};

export default VideoGamesSlider;
