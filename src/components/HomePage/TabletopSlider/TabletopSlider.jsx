import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import TabletopSliderImageSlide from 'components/HomePage/TabletopSlider/TabletopSliderSlides/TabletopSliderImageSlide';
import TabletopSliderTextSlide from 'components/HomePage/TabletopSlider/TabletopSliderSlides/TabletopSliderTextSlide';

import ksiegaStraznikaMobile from 'assets/tabletop/mobile/cthulhu-ksiega-straznika-280.webp';
import ksiegaStraznikaTablet from 'assets/tabletop/mobile/cthulhu-ksiega-straznika-580.webp';
import ksiegaStraznikaDesktop from 'assets/tabletop/desktop/cthulhu-ksiega-straznika-desktop.webp';
import ksiegaStraznikaFallback from 'assets/tabletop/mobile/cthulhu-ksiega-straznika-580.jpeg';
import zewCthulhuMobile from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu-280.webp';
import zewCthulhuTablet from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu-580.webp';
import zewCthulhuDesktop from 'assets/tabletop/desktop/cthulhu-uslysz-zew-cthulhu-desktop.webp';
import zewCthulhuFallback from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu-580.png';
import nutkaMobile from 'assets/tabletop/mobile/nutka-w-nutke-exe-280.webp';
import nutkaTablet from 'assets/tabletop/mobile/nutka-w-nutke-exe-580.webp';
import nutkaDesktop from 'assets/tabletop/desktop/nutka-w-nutke-exe-desktop.webp';
import nutkaFallback from 'assets/tabletop/mobile/nutka-w-nutke-exe-580.png';
import fantastykaMobile from 'assets/tabletop/mobile/fantastyka-280.webp';
import fantastykaTablet from 'assets/tabletop/mobile/fantastyka-580.webp';
import fantastykaDesktop from 'assets/tabletop/desktop/fantastyka-desktop.webp';
import fantastykaFallback from 'assets/tabletop/mobile/fantastyka-580.jpeg';
import sibirPunkMobile from 'assets/tabletop/mobile/sibir-punk-280.webp';
import sibirPunkTablet from 'assets/tabletop/mobile/sibir-punk-580.webp';
import sibirPunkDesktop from 'assets/tabletop/desktop/sibir-punk-desktop.webp';
import sibirPunkFallback from 'assets/tabletop/mobile/sibir-punk-580.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TabletopSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        className='w-full mx-auto xl:h-full'
      >
        <SwiperSlide className='flex items-center'>
          <TabletopSliderImageSlide
            srcSet={`${ksiegaStraznikaMobile} 400w, ${ksiegaStraznikaTablet} 800w, ${ksiegaStraznikaDesktop} 1200w`}
            src={ksiegaStraznikaFallback}
            sizes='(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw'
            alt='Usłysz Zew Cthulhu'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
          <TabletopSliderImageSlide
            srcSet={`${zewCthulhuMobile} 400w, ${zewCthulhuTablet} 800w, ${zewCthulhuDesktop} 1200w`}
            src={zewCthulhuFallback}
            sizes='(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw'
            alt='Nutka W Nutkę.EXE'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
          <TabletopSliderImageSlide
            srcSet={`${nutkaMobile} 400w, ${nutkaTablet} 800w, ${nutkaDesktop} 1200w`}
            src={nutkaFallback}
            sizes='(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw'
            alt='Zgrozy Gotyckie'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
          <TabletopSliderImageSlide
            srcSet={`${fantastykaMobile} 400w, ${fantastykaTablet} 800w, ${fantastykaDesktop} 1200w`}
            src={fantastykaFallback}
            sizes='(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw'
            alt='Aż Po Zęby'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
          <TabletopSliderImageSlide
            srcSet={`${sibirPunkMobile} 400w, ${sibirPunkTablet} 800w, ${sibirPunkDesktop} 1200w`}
            src={sibirPunkFallback}
            sizes='(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw'
            alt='Sibir Punk'
          />
        </SwiperSlide>
        <SwiperSlide className='h-auto w-full flex items-center justify-center'>
          <TabletopSliderTextSlide to='tabletopGames' text='More stories...' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TabletopSlider;
