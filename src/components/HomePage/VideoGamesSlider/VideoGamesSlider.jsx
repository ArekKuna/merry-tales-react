import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import VideoGamesSliderSlide from 'components/HomePage/VideoGamesSlider/VideoGamesSliderSlide/VideoGamesSliderSlide';
import VideoGamesSliderSlideText from 'components/HomePage/VideoGamesSlider/VideoGamesSliderSlide/VideoGamesSliderSlideText';

import evilWestMobile from 'assets/video-games/mobile/evil-west-280.webp';
import evilWestTablet from 'assets/video-games/mobile/evil-west-580.webp';
import evilWestDesktop from 'assets/video-games/desktop/evil-west-desktop.webp';
import evilWestFallback from 'assets/video-games/mobile/evil-west-580.jpg';
import lordsOfTheFallenMobile from 'assets/video-games/mobile/lords-of-the-fallen-280.webp';
import lordsOfTheFallenTablet from 'assets/video-games/mobile/lords-of-the-fallen-580.webp';
import lordsOfTheFallenDesktop from 'assets/video-games/desktop/lords-of-the-fallen-desktop.webp';
import lordsOfTheFallenFallback from 'assets/video-games/mobile/lords-of-the-fallen-580.jpg';
import sniper3Mobile from 'assets/video-games/mobile/sniper-ghost-warrior-3-280.webp';
import sniper3Tablet from 'assets/video-games/mobile/sniper-ghost-warrior-3-580.webp';
import sniper3Desktop from 'assets/video-games/desktop/sniper-ghost-warrior-3-desktop.webp';
import sniper3Fallback from 'assets/video-games/mobile/sniper-ghost-warrior-3-580.jpeg';
import sniperContractsMobile from 'assets/video-games/mobile/sniper-ghost-warrior-contracts-280.webp';
import sniperContractsTablet from 'assets/video-games/mobile/sniper-ghost-warrior-contracts-580.webp';
import sniperContractsDesktop from 'assets/video-games/desktop/sniper-ghost-warrior-contracts-desktop.webp';
import sniperContractsFallback from 'assets/video-games/mobile/sniper-ghost-warrior-contracts-580.jpeg';
import shadowWarriorMobile from 'assets/video-games/mobile/shadow-warrior-3-280.webp';
import shadowWarriorTablet from 'assets/video-games/mobile/shadow-warrior-3-580.webp';
import shadowWarriorDesktop from 'assets/video-games/desktop/shadow-warrior-3-desktop.webp';
import shadowWarriorFallback from 'assets/video-games/mobile/shadow-warrior-3-580.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoGamesSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      className='!mx-0'
    >
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${evilWestMobile} 1000w, ${evilWestTablet} 1500w, ${evilWestDesktop} 2500w`}
          src={evilWestFallback}
          sizes='(max-width: 639px) 620px, (max-width: 1279px) 70vw, (min-width: 1280px) 100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${lordsOfTheFallenMobile} 1000w, ${lordsOfTheFallenTablet} 1500w, ${lordsOfTheFallenDesktop} 2500w`}
          src={lordsOfTheFallenFallback}
          sizes='(max-width: 639px) 620px, (max-width: 1279px) 70vw, (min-width: 1280px) 100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${sniper3Mobile} 1000w, ${sniper3Tablet} 1500w, ${sniper3Desktop} 2500w`}
          src={sniper3Fallback}
          sizes='(max-width: 639px) 620px, (max-width: 1279px) 70vw, (min-width: 1280px) 100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${sniperContractsMobile} 1000w, ${sniperContractsTablet} 1500w, ${sniperContractsDesktop} 2500w`}
          src={sniperContractsFallback}
          sizes='(max-width: 639px) 620px, (max-width: 1279px) 70vw, (min-width: 1280px) 100vw'
        />
      </SwiperSlide>
      <SwiperSlide>
        <VideoGamesSliderSlide
          srcSet={`${shadowWarriorMobile} 1000w, ${shadowWarriorTablet} 1500w, ${shadowWarriorDesktop} 2500w`}
          src={shadowWarriorFallback}
          sizes='(max-width: 639px) 620px, (max-width: 1279px) 70vw, (min-width: 1280px) 100vw'
        />
      </SwiperSlide>
      <SwiperSlide className='h-auto flex justify-center items-center bg-gray-400'>
        <VideoGamesSliderSlideText text='More about video games projects...' />
      </SwiperSlide>
    </Swiper>
  );
};

export default VideoGamesSlider;
