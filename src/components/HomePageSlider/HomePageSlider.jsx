import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from '../../layout/Image/Image';

import evilWest from '../../assets/mobile/games/evil-west.jpeg';
import lordsOfTheFallen from '../../assets/mobile/games/lords-of-the-fallen.jpg';
import ghostWarrior3 from '../../assets/mobile/games/sniper-ghost-warrior-3.jpg';
import ghostWarriorContracts from '../../assets/mobile/games/ghost-warrior-contracts.jpeg';
import shadwoWarrior3 from '../../assets/mobile/games/shadow-warrior-3.jpeg';

import 'swiper/css';
import 'swiper/css/navigation';

const HomePageSlider = () => {
  return (
    <Swiper modules={[Navigation]} navigation>
      <SwiperSlide>
        <Image src={evilWest} alt='Evil West' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={lordsOfTheFallen} alt='Lords Of The Fallen' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={ghostWarrior3} alt='Sniper Ghost Warrior 3' />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={ghostWarriorContracts}
          alt='Sniper Ghost Warrior Contracts'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={shadwoWarrior3} alt='Shadow Warrior 3' />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePageSlider;
