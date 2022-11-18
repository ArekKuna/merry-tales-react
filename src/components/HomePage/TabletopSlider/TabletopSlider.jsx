import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import BoxTitle from 'components/Boxes/BoxTitle/BoxTitle';
import TabletopSliderSlide from 'components/HomePage/TabletopSlider/TabletopSliderSlide/TabletopSliderSlide';

import zewCthulhu from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu.webp';
import zewCthulhuFallback from 'assets/tabletop/mobile/cthulhu-uslysz-zew-cthulhu.png';
import nutka from 'assets/tabletop/mobile/nutka-w-nutke-exe.webp';
import nutkaFallback from 'assets/tabletop/mobile/nutka-w-nutke-exe.png';
import zgrozy from 'assets/tabletop/mobile/cthulhu-zgrozy-gotyckie.webp';
import zgrozyFallback from 'assets/tabletop/mobile/cthulhu-zgrozy-gotyckie.jpg';
import wampir from 'assets/tabletop/mobile/az-po-zeby.webp';
import wampitFallback from 'assets/tabletop/mobile/az-po-zeby.png';
import sibirPunk from 'assets/tabletop/mobile/sibir-punk.webp';
import sibirPunkFallback from 'assets/tabletop/mobile/sibir-punk.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TabletopSlider = () => {
  return (
    <>
      <BoxTitle title='tabletop rpg games' />
      <p className='text-lg text-center'>Knack for roleplaying</p>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          enabled: false,
        }}
        navigation={{
          enabled: true,
          // nextEl: '.' ,
          // prevEl: '.',
        }}
      >
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${zewCthulhu} 500w`}
            src={zewCthulhuFallback}
            sizes='100vw'
            alt='Usłysz Zew Cthulhu'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${nutka} 500w`}
            src={nutkaFallback}
            sizes='100vw'
            alt='Nutka W Nutkę.EXE'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${zgrozy} 500w`}
            src={zgrozyFallback}
            sizes='100vw'
            alt='Zgrozy Gotyckie'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${wampir} 500w`}
            src={wampitFallback}
            sizes='100vw'
            alt='Aż Po Zęby'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TabletopSliderSlide
            srcSet={`${sibirPunk} 500w`}
            src={sibirPunkFallback}
            sizes='100vw'
            alt='Sibir Punk'
          />
        </SwiperSlide>
      </Swiper>
      <p className='font-black text-3xl text-center mt-4 underline underline-offset-4'>
        More stories
      </p>
    </>
  );
};

export default TabletopSlider;
