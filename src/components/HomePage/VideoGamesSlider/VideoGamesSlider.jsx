import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import VideoGamesSliderSlide from 'components/HomePage/VideoGamesSlider/VideoGamesSliderSlide/VideoGamesSliderSlide';
import VideoGamesSliderSlideText from 'components/HomePage/VideoGamesSlider/VideoGamesSliderSlide/VideoGamesSliderSlideText';

import { homePageVideoGames } from 'data/homePageVideoGames';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoGamesSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className='!mx-0'
    >
      {homePageVideoGames?.map((image) => (
        <SwiperSlide key={image.id}>
          <VideoGamesSliderSlide image={image} />
        </SwiperSlide>
      ))}
      <SwiperSlide className='h-auto flex justify-center items-center'>
        <VideoGamesSliderSlideText text='More about video games projects...' />
      </SwiperSlide>
    </Swiper>
  );
};

export default VideoGamesSlider;