import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import TabletopSliderImageSlide from 'components/HomePage/TabletopSlider/TabletopSliderSlides/TabletopSliderImageSlide';
import TabletopSliderTextSlide from 'components/HomePage/TabletopSlider/TabletopSliderSlides/TabletopSliderTextSlide';

import { homePageTabletops } from 'data/homepageTabletops';

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
        {homePageTabletops?.map((image) => (
          <SwiperSlide key={image.id} className='flex items-center'>
            <TabletopSliderImageSlide image={image} />
          </SwiperSlide>
        ))}
        <SwiperSlide className='h-auto w-full flex items-center justify-center'>
          <TabletopSliderTextSlide to='tabletopGames' text='More stories...' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TabletopSlider;