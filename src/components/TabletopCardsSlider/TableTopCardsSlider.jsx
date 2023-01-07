import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import CardsSliderImage from './CardsSliderImage/CardsSliderImage';

import 'swiper/css';

import samotnie400 from 'assets/tabletop/cthulhu/cthulhu-samotnie-przeciwko-ciemnosci-400.webp';
import samotnie600 from 'assets/tabletop/cthulhu/cthulhu-samotnie-przeciwko-ciemnosci-600.webp';
import samotnie800 from 'assets/tabletop/cthulhu/cthulhu-samotnie-przeciwko-ciemnosci-800.webp';
import samotnie1000 from 'assets/tabletop/cthulhu/cthulhu-samotnie-przeciwko-ciemnosci-1000.webp';
import samotnie1200 from 'assets/tabletop/cthulhu/cthulhu-samotnie-przeciwko-ciemnosci-1200.webp';
import samotnieFallback from 'assets/tabletop/cthulhu/cthulhu-samotnie-przeciwko-ciemnosci-800.jpg';
import ksiegaStraznika400 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-400.webp';
import ksiegaStraznika600 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-600.webp';
import ksiegaStraznika800 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-800.webp';
import ksiegaStraznika1000 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-1000.webp';
import ksiegaStraznika1200 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-1200.webp';
import ksiegaStraznikaFallback from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-800.jpg';
import zewCthulhu400 from 'assets/tabletop/cthulhu/cthulhu-zew-400.webp';
import zewCthulhu600 from 'assets/tabletop/cthulhu/cthulhu-zew-600.webp';
import zewCthulhu800 from 'assets/tabletop/cthulhu/cthulhu-zew-800.webp';
import zewCthulhu1000 from 'assets/tabletop/cthulhu/cthulhu-zew-1000.webp';
import zewCthulhu1200 from 'assets/tabletop/cthulhu/cthulhu-zew-1200.webp';
import zewCthulhuFallback from 'assets/tabletop/cthulhu/cthulhu-zew-800.jpg';
import cienieTatr400 from 'assets/tabletop/cthulhu/cthulhu-cienie-tatr-400.webp';
import cienieTatr600 from 'assets/tabletop/cthulhu/cthulhu-cienie-tatr-600.webp';
import cienieTatr800 from 'assets/tabletop/cthulhu/cthulhu-cienie-tatr-800.webp';
import cienieTatr1000 from 'assets/tabletop/cthulhu/cthulhu-cienie-tatr-1000.webp';
import cienieTatr1200 from 'assets/tabletop/cthulhu/cthulhu-cienie-tatr-1200.webp';
import cienieTatrFallback from 'assets/tabletop/cthulhu/cthulhu-cienie-tatr-800.jpg';
import duchy400 from 'assets/tabletop/cthulhu/cthulhu-uwierz-w-duchy-400.webp';
import duchy600 from 'assets/tabletop/cthulhu/cthulhu-uwierz-w-duchy-600.webp';
import duchy800 from 'assets/tabletop/cthulhu/cthulhu-uwierz-w-duchy-800.webp';
import duchy1000 from 'assets/tabletop/cthulhu/cthulhu-uwierz-w-duchy-1000.webp';
import duchy1200 from 'assets/tabletop/cthulhu/cthulhu-uwierz-w-duchy-1200.webp';
import duchyFallback from 'assets/tabletop/cthulhu/cthulhu-uwierz-w-duchy-800.jpg';
import twarz400 from 'assets/tabletop/cthulhu/cthulhu-twarza-w-twarz-400.webp';
import twarz600 from 'assets/tabletop/cthulhu/cthulhu-twarza-w-twarz-600.webp';
import twarz800 from 'assets/tabletop/cthulhu/cthulhu-twarza-w-twarz-800.webp';
import twarz1000 from 'assets/tabletop/cthulhu/cthulhu-twarza-w-twarz-1000.webp';
import twarz1200 from 'assets/tabletop/cthulhu/cthulhu-twarza-w-twarz-1200.webp';
import twarzFallback from 'assets/tabletop/cthulhu/cthulhu-twarza-w-twarz-800.jpg';
import carmilla400 from 'assets/tabletop/cthulhu/cthulhu-carmilla-400.webp';
import carmilla600 from 'assets/tabletop/cthulhu/cthulhu-carmilla-600.webp';
import carmilla800 from 'assets/tabletop/cthulhu/cthulhu-carmilla-800.webp';
import carmilla1000 from 'assets/tabletop/cthulhu/cthulhu-carmilla-1000.webp';
import carmilla1200 from 'assets/tabletop/cthulhu/cthulhu-carmilla-1200.webp';
import carmillaFallback from 'assets/tabletop/cthulhu/cthulhu-carmilla-800.jpg';
import rlyeh400 from 'assets/tabletop/cthulhu/cthulhu-powrot-do-rlyeh-400.webp';
import rlyeh600 from 'assets/tabletop/cthulhu/cthulhu-powrot-do-rlyeh-600.webp';
import rlyeh800 from 'assets/tabletop/cthulhu/cthulhu-powrot-do-rlyeh-800.webp';
import rlyeh1000 from 'assets/tabletop/cthulhu/cthulhu-powrot-do-rlyeh-1000.webp';
import rlyeh1200 from 'assets/tabletop/cthulhu/cthulhu-powrot-do-rlyeh-1200.webp';
import rlyehFallback from 'assets/tabletop/cthulhu/cthulhu-powrot-do-rlyeh-800.jpg';
import zgrozy400 from 'assets/tabletop/cthulhu/cthulhu-zgrozy-gotyckie-400.webp';
import zgrozy600 from 'assets/tabletop/cthulhu/cthulhu-zgrozy-gotyckie-600.webp';
import zgrozy800 from 'assets/tabletop/cthulhu/cthulhu-zgrozy-gotyckie-800.webp';
import zgrozy1000 from 'assets/tabletop/cthulhu/cthulhu-zgrozy-gotyckie-1000.webp';
import zgrozy1200 from 'assets/tabletop/cthulhu/cthulhu-zgrozy-gotyckie-1200.webp';
import zgrozyFallback from 'assets/tabletop/cthulhu/cthulhu-zgrozy-gotyckie-800.jpg';

const TableTopCardsSlider = () => {
  return (
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${samotnie400} 400w, ${samotnie600} 600w, ${samotnie800} 800w, ${samotnie1000} 1000w, ${samotnie1200} 1200w`}
          src={samotnieFallback}
          alt='Zew Cthulhu - Samotnie Przeciwko Ciemności'
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${ksiegaStraznika400} 400w, ${ksiegaStraznika600} 600w, ${ksiegaStraznika800} 800w, ${ksiegaStraznika1000} 1000w, ${ksiegaStraznika1200} 1200w`}
          src={ksiegaStraznikaFallback}
          alt='Zew Cthulhu - Księga Strażnika'
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${zewCthulhu400} 400w, ${zewCthulhu600} 600w, ${zewCthulhu800} 800w, ${zewCthulhu1000} 1000w, ${zewCthulhu1200} 1200w`}
          src={zewCthulhuFallback}
          alt='Zew Cthulhu - Usłysz Zew Cthulhu'
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${cienieTatr400} 400w, ${cienieTatr600} 600w, ${cienieTatr800} 800w, ${cienieTatr1000} 1000w, ${cienieTatr1200} 1200w`}
          src={cienieTatrFallback}
          alt='Zew Cthulhu - Cienie Tatr'
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${duchy400} 400w, ${duchy600} 600w, ${duchy800} 800w, ${duchy1000} 1000w, ${duchy1200} 1200w`}
          src={duchyFallback}
          alt='Zew Cthulhu - Uwierz w duchy'
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${twarz400} 400w, ${twarz600} 600w, ${twarz800} 800w, ${twarz1000} 1000w, ${twarz1200} 1200w`}
          src={twarzFallback}
          alt='Zew Cthulhu - Twarzą w Twarz'
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${carmilla400} 400w, ${carmilla600} 600w, ${carmilla800} 800w, ${carmilla1000} 1000w, ${carmilla1200} 1200w`}
          src={carmillaFallback}
          alt='Carmilla - Studium We Krwi'
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${rlyeh400} 400w, ${rlyeh600} 600w, ${rlyeh800} 800w, ${rlyeh1000} 1000w, ${rlyeh1200} 1200w`}
          src={rlyehFallback}
          alt="Zew Cthulhu - Powrót do R'lyeh"
          sizes=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardsSliderImage
          srcSet={`${zgrozy400} 400w, ${zgrozy600} 600w, ${zgrozy800} 800w, ${zgrozy1000} 1000w, ${zgrozy1200} 1200w`}
          src={zgrozyFallback}
          alt='Zgrozy Gotyckie'
          sizes=''
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default TableTopCardsSlider;
