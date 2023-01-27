import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';

import CardsSliderImage from 'components/TabletopCardsSlider/CardsSliderImage/CardsSliderImage';

const TableTopCardsSlider = ({ images }) => {
  return (
    <Swiper
      modules={[EffectCards, Autoplay]}
      effect={'cards'}
      grabCursor={true}
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      className='w-1/2 mx-0 h-full sm:w-[30%] md:w-[40%] lg:w-1/4 xl:w-[40%]'
    >
      {images?.map((image) => (
        <SwiperSlide key={image.id}>
          <CardsSliderImage image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TableTopCardsSlider;
