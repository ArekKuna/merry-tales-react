import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import TabletopSliderSlide from 'components/HomePage/TabletopSlider/TabletopSliderSlide/TabletopSliderSlide';

import zewCthulhuMobile from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu-280.webp';
import zewCthulhuTablet from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu-580.webp';
import zewCthulhuFallback from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu-580.png';
import nutkaMobile from 'assets/tabletop/mobile/nutka-w-nutke-exe-280.webp';
import nutkaTablet from 'assets/tabletop/mobile/nutka-w-nutke-exe-580.webp';
import nutkaFallback from 'assets/tabletop/mobile/nutka-w-nutke-exe-580.png';
import zgrozyMobile from 'assets/tabletop/mobile/cthulhu-zgrozy-gotyckie-280.webp';
import zgrozyTablet from 'assets/tabletop/mobile/cthulhu-zgrozy-gotyckie-580.webp';
import zgrozyFallback from 'assets/tabletop/mobile/cthulhu-zgrozy-gotyckie-580.jpg';
import wampirMobile from 'assets/tabletop/mobile/az-po-zeby-280.webp';
import wampirTablet from 'assets/tabletop/mobile/az-po-zeby-580.webp';
import wampirFallback from 'assets/tabletop/mobile/az-po-zeby-580.png';
import sibirPunkMobile from 'assets/tabletop/mobile/sibir-punk-280.webp';
import sibirPunkTablet from 'assets/tabletop/mobile/sibir-punk-580.webp';
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
        spaceBetween={0}
        loop={true}
        pagination={{
          enabled: false,
        }}
        navigation={{
          enabled: true,
          nextEl: '.tabletop-button-next',
          prevEl: '.tabletop-button-prev',
        }}
      >
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${zewCthulhuMobile} 400w, ${zewCthulhuTablet} 800w`}
            src={zewCthulhuFallback}
            sizes='(max-width: 639px) 200px, 310px'
            alt='Usłysz Zew Cthulhu'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${nutkaMobile} 400w, ${nutkaTablet} 800w`}
            src={nutkaFallback}
            sizes='(max-width: 639px) 200px, 310px'
            alt='Nutka W Nutkę.EXE'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${zgrozyMobile} 400w, ${zgrozyTablet} 800w`}
            src={zgrozyFallback}
            sizes='(max-width: 639px) 200px, 310px'
            alt='Zgrozy Gotyckie'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${wampirMobile} 400w, ${wampirTablet} 800w`}
            src={wampirFallback}
            sizes='(max-width: 639px) 200px, 310px'
            alt='Aż Po Zęby'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${sibirPunkMobile} 400w, ${sibirPunkTablet} 800w`}
            src={sibirPunkFallback}
            sizes='(max-width: 639px) 200px, 310px'
            alt='Sibir Punk'
          />
        </SwiperSlide>
        <div className='tabletop-button-next'></div>
        <div className='tabletop-button-prev'></div>
      </Swiper>
    </>
  );
};

export default TabletopSlider;
