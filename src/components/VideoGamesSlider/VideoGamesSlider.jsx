import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import VideoGamesSliderSlide from 'components/VideoGamesSlider/VideoGamesSliderSlide/VideoGamesSliderSlide';

import { homePageVideoGames } from 'data/homePageVideoGames';

const VideoGamesSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      slidesPerView={1}
      loop={true}
      speed={1500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className='!mx-0 h-full'
    >
      {homePageVideoGames?.map((image) => (
        <SwiperSlide
          key={image.id}
          className='w-full h-full cursor-pointer bg-gray-500'
        >
          <VideoGamesSliderSlide image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoGamesSlider;
