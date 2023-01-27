import fantastykaLowRes from 'assets/tabletop/other/fantastyka-lowRes.webp';
import fantastyka400 from 'assets/tabletop/other/fantastyka-400.webp';
import fantastyka600 from 'assets/tabletop/other/fantastyka-600.webp';
import fantastyka800 from 'assets/tabletop/other/fantastyka-800.webp';
import fantastyka1000 from 'assets/tabletop/other/fantastyka-1000.webp';
import fantastyka1200 from 'assets/tabletop/other/fantastyka-1200.webp';
import fantastykaFallback from 'assets/tabletop/other/fantastyka-800.jpg';
import nutkaLowRes from 'assets/tabletop/other/nutka-w-nutke-lowRes.webp';
import nutka400 from 'assets/tabletop/other/nutka-w-nutke-400.webp';
import nutka600 from 'assets/tabletop/other/nutka-w-nutke-600.webp';
import nutka800 from 'assets/tabletop/other/nutka-w-nutke-800.webp';
import nutka1000 from 'assets/tabletop/other/nutka-w-nutke-1000.webp';
import nutka1200 from 'assets/tabletop/other/nutka-w-nutke-1200.webp';
import nutkaFallback from 'assets/tabletop/other/nutka-w-nutke-800.jpg';
import sibirPunkLowRes from 'assets/tabletop/other/sibir-punk-lowRes.webp';
import sibirPunk400 from 'assets/tabletop/other/sibir-punk-400.webp';
import sibirPunk600 from 'assets/tabletop/other/sibir-punk-600.webp';
import sibirPunk800 from 'assets/tabletop/other/sibir-punk-800.webp';
import sibirPunk1000 from 'assets/tabletop/other/sibir-punk-1000.webp';
import sibirPunk1200 from 'assets/tabletop/other/sibir-punk-1200.webp';
import sibirPunkFallback from 'assets/tabletop/other/sibir-punk-800.jpg';
import labiryntLowRes from 'assets/tabletop/other/labirynt-bestii-lowRes.webp';
import labirynt400 from 'assets/tabletop/other/labirynt-bestii-400.webp';
import labirynt600 from 'assets/tabletop/other/labirynt-bestii-600.webp';
import labirynt800 from 'assets/tabletop/other/labirynt-bestii-800.webp';
import labirynt1000 from 'assets/tabletop/other/labirynt-bestii-1000.webp';
import labirynt1200 from 'assets/tabletop/other/labirynt-bestii-1200.webp';
import labiryntFallback from 'assets/tabletop/other/labirynt-bestii-800.jpg';
import nibiruLowRes from 'assets/tabletop/other/nibiru-LowRes.webp';
import nibiru400 from 'assets/tabletop/other/nibiru-400.webp';
import nibiru600 from 'assets/tabletop/other/nibiru-600.webp';
import nibiru800 from 'assets/tabletop/other/nibiru-800.webp';
import nibiru1000 from 'assets/tabletop/other/nibiru-1000.webp';
import nibiru1200 from 'assets/tabletop/other/nibiru-1200.webp';
import nibiruFallback from 'assets/tabletop/other/nibiru-800.jpg';
import wampirLowRes from 'assets/tabletop/other/wampir-az-po-zeby-LowRes.webp';
import wampir400 from 'assets/tabletop/other/wampir-az-po-zeby-400.webp';
import wampir600 from 'assets/tabletop/other/wampir-az-po-zeby-600.webp';
import wampir800 from 'assets/tabletop/other/wampir-az-po-zeby-800.webp';
import wampir1000 from 'assets/tabletop/other/wampir-az-po-zeby-1000.webp';
import wampir1200 from 'assets/tabletop/other/wampir-az-po-zeby-1200.webp';
import wampirFallback from 'assets/tabletop/other/wampir-az-po-zeby-800.jpg';

export const otherTabletops = [
  {
    id: 1,
    lowQualityImage: fantastykaLowRes,
    srcSet: `${fantastyka400} 400w, ${fantastyka600} 600w, ${fantastyka800} 800w, ${fantastyka1000} 1000w, ${fantastyka1200} 1200w`,
    src: fantastykaFallback,
    sizes: '100vw',
    alt: 'Nowa Fantastyka',
  },
  {
    id: 2,
    lowQualityImage: nutkaLowRes,
    srcSet: `${nutka400} 400w, ${nutka600} 600w, ${nutka800} 800w, ${nutka1000} 1000w, ${nutka1200} 1200w`,
    src: nutkaFallback,
    sizes: '100vw',
    alt: 'Nutka W Nutkę.exe',
  },
  {
    id: 3,
    lowQualityImage: sibirPunkLowRes,
    srcSet: `${sibirPunk400} 400w, ${sibirPunk600} 600w, ${sibirPunk800} 800w, ${sibirPunk1000} 1000w, ${sibirPunk1200} 1200w`,
    src: sibirPunkFallback,
    sizes: '100vw',
    alt: 'Sibir Punk',
  },
  {
    id: 4,
    lowQualityImage: labiryntLowRes,
    srcSet: `${labirynt400} 400w, ${labirynt600} 600w, ${labirynt800} 800w, ${labirynt1000} 1000w, ${labirynt1200} 1200w`,
    src: labiryntFallback,
    sizes: '100vw',
    alt: 'Labirynt Bestii',
  },
  {
    id: 5,
    lowQualityImage: nibiruLowRes,
    srcSet: `${nibiru400} 400w, ${nibiru600} 600w, ${nibiru800} 800w, ${nibiru1000} 1000w, ${nibiru1200} 1200w`,
    src: nibiruFallback,
    sizes: '100vw',
    alt: 'Nibiru',
  },
  {
    id: 6,
    lowQualityImage: wampirLowRes,
    srcSet: `${wampir400} 400w, ${wampir600} 600w, ${wampir800} 800w, ${wampir1000} 1000w, ${wampir1200} 1200w`,
    src: wampirFallback,
    sizes: '100vw',
    alt: 'Wampir Maskarada - A Po Zęby',
  },
];
