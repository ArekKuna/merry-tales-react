import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';

import CardsSliderImage from 'components/TabletopCardsSlider/CardsSliderImage/CardsSliderImage';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

const TableTopCardsSlider = ({ images }) => {
  return (
    <Swiper
      modules={[EffectCards, Autoplay]}
      effect={'cards'}
      grabCursor={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      className='max-w-1/2 h-full sm:max-w-1/3 xl:max-w-[40%]'
    >
      {images?.map((image) => (
        <SwiperSlide key={image.id} className=''>
          <CardsSliderImage image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TableTopCardsSlider;
