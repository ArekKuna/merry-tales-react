import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import TabletopSliderImageSlide from 'components/TabletopSlider/TabletopSliderSlides/TabletopSliderImageSlide';

import { homePageTabletops } from 'data/homepageTabletops';

const TabletopSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        className='w-full mx-auto xl:h-full'
      >
        {homePageTabletops?.map((image) => (
          <SwiperSlide key={image.id} className='flex items-start'>
            <TabletopSliderImageSlide image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TabletopSlider;
