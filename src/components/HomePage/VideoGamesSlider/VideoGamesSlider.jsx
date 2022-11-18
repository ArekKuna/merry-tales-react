import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import VideoGamesSliderSlide from 'components/HomePage/VideoGamesSlider/VideoGamesSliderSlide/VideoGamesSliderSlide';

import evilWestMobile from 'assets/video-games/mobile/evil-west.webp';
import evilWestFallback from 'assets/video-games/mobile/evil-west.jpg';
import lordsOfTheFallenMobile from 'assets/video-games/mobile/lords-of-the-fallen.webp';
import lordsOfThefallenFallback from 'assets/video-games/mobile/lords-of-the-fallen.jpg';
import sniper3 from 'assets/video-games/mobile/sniper-ghost-warrior-3.webp';
import sniper3Fallback from 'assets/video-games/mobile/sniper-ghost-warrior-3.jpeg';
import sniperContracts from 'assets/video-games/mobile/sniper-ghost-warrior-contracts.webp';
import sniperContractsFallback from 'assets/video-games/mobile/sniper-ghost-warrior-contracts.jpeg';
import shadowWarrior from 'assets/video-games/mobile/shadow-warrior-3.webp';
import shadowWarriorFallback from 'assets/video-games/mobile/shadow-warrior-3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoGamesSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
    >
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${evilWestMobile} 500w,`}
          src={evilWestFallback}
          sizes='100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${lordsOfTheFallenMobile} 500w,`}
          src={lordsOfThefallenFallback}
          sizes='100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${sniper3} 500w,`}
          src={sniper3Fallback}
          sizes='100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${sniperContracts} 500w,`}
          src={sniperContractsFallback}
          sizes='100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${shadowWarrior} 500w,`}
          src={shadowWarriorFallback}
          sizes='100vw'
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default VideoGamesSlider;
