import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import VideoGamesSliderSlide from 'components/VideoGamesSlider/VideoGamesSliderSlide/VideoGamesSliderSlide';

import { homePageVideoGames } from 'data/homePageVideoGames';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoGamesSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      slidesPerView={1}
      loop={true}
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
    </Swiper>
  );
};

export default VideoGamesSlider;
