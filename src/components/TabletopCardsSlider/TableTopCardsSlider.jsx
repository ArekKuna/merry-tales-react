import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import CardsSliderImage from 'components/TabletopCardsSlider/CardsSliderImage/CardsSliderImage';

import 'swiper/css';

const TableTopCardsSlider = ({ images }) => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      className='w-[300px] overflow-visible'
    >
      {images?.map((image) => (
        <SwiperSlide key={image.id} className='w-full'>
          <CardsSliderImage image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TableTopCardsSlider;
