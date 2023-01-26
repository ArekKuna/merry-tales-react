import ksiegaStraznikalowRes from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-lowRes.webp';
import ksiegaStraznika400 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-400.webp';
import ksiegaStraznika600 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-600.webp';
import ksiegaStraznika800 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-800.webp';
import ksiegaStraznika1000 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-1000.webp';
import ksiegaStraznika1200 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-1200.webp';
import ksiegaStraznikaFallback from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-800.jpg';
import zewCthulhuLowRes from 'assets/tabletop/cthulhu/cthulhu-zew-lowRes.webp';
import zewCthulhu400 from 'assets/tabletop/cthulhu/cthulhu-zew-400.webp';
import zewCthulhu600 from 'assets/tabletop/cthulhu/cthulhu-zew-600.webp';
import zewCthulhu800 from 'assets/tabletop/cthulhu/cthulhu-zew-800.webp';
import zewCthulhu1000 from 'assets/tabletop/cthulhu/cthulhu-zew-1000.webp';
import zewCthulhu1200 from 'assets/tabletop/cthulhu/cthulhu-zew-1200.webp';
import zewCthulhuFallback from 'assets/tabletop/cthulhu/cthulhu-zew-800.jpg';
import nutkaLowRes from 'assets/tabletop/other/nutka-w-nutke-lowRes.webp';
import nutka400 from 'assets/tabletop/other/nutka-w-nutke-400.webp';
import nutka600 from 'assets/tabletop/other/nutka-w-nutke-600.webp';
import nutka800 from 'assets/tabletop/other/nutka-w-nutke-800.webp';
import nutka1000 from 'assets/tabletop/other/nutka-w-nutke-1000.webp';
import nutka1200 from 'assets/tabletop/other/nutka-w-nutke-1200.webp';
import nutkaFallback from 'assets/tabletop/other/nutka-w-nutke-800.jpg';
import fantastykaLowRes from 'assets/tabletop/other/fantastyka-lowRes.webp';
import fantastyka400 from 'assets/tabletop/other/fantastyka-400.webp';
import fantastyka600 from 'assets/tabletop/other/fantastyka-600.webp';
import fantastyka800 from 'assets/tabletop/other/fantastyka-800.webp';
import fantastyka1000 from 'assets/tabletop/other/fantastyka-1000.webp';
import fantastyka1200 from 'assets/tabletop/other/fantastyka-1200.webp';
import fantastykaFallback from 'assets/tabletop/other/fantastyka-800.jpg';
import sibirPunkLowRes from 'assets/tabletop/other/sibir-punk-lowRes.webp';
import sibirPunk400 from 'assets/tabletop/other/sibir-punk-400.webp';
import sibirPunk600 from 'assets/tabletop/other/sibir-punk-600.webp';
import sibirPunk800 from 'assets/tabletop/other/sibir-punk-800.webp';
import sibirPunk1000 from 'assets/tabletop/other/sibir-punk-1000.webp';
import sibirPunk1200 from 'assets/tabletop/other/sibir-punk-1200.webp';
import sibirPunkFallback from 'assets/tabletop/other/sibir-punk-800.jpg';

export const homePageTabletops = [
  {
    id: 1,
    lowQualityImage: ksiegaStraznikalowRes,
    srcSet: `${ksiegaStraznika400} 400w, ${ksiegaStraznika600} 600w, ${ksiegaStraznika800} 800w, ${ksiegaStraznika1000} 1000w, ${ksiegaStraznika1200} 1200w`,
    src: ksiegaStraznikaFallback,
    sizes: '100vw',
    alt: 'Zew Cthulhu - Księga Strażnika',
  },
  {
    id: 2,
    lowQualityImage: zewCthulhuLowRes,
    srcSet: `${zewCthulhu400} 400w, ${zewCthulhu600} 600w, ${zewCthulhu800} 800w, ${zewCthulhu1000} 1000w, ${zewCthulhu1200} 1200w`,
    src: zewCthulhuFallback,
    sizes: '100vw',
    alt: 'Zew Cthulhu - Usłysz Zew Cthulhu',
  },
  {
    id: 3,
    lowQualityImage: nutkaLowRes,
    srcSet: `${nutka400} 400w, ${nutka600} 600w, ${nutka800} 800w, ${nutka1000} 1000w, ${nutka1200} 1200w`,
    src: nutkaFallback,
    sizes: '100vw',
    alt: 'Nutka W Nutkę.exe',
  },
  {
    id: 4,
    lowQualityImage: fantastykaLowRes,
    srcSet: `${fantastyka400} 400w, ${fantastyka600} 600w, ${fantastyka800} 800w, ${fantastyka1000} 1000w, ${fantastyka1200} 1200w`,
    src: fantastykaFallback,
    sizes: '100vw',
    alt: 'Nowa Fantastyka',
  },
  {
    id: 5,
    lowQualityImage: sibirPunkLowRes,
    srcSet: `${sibirPunk400} 400w, ${sibirPunk600} 600w, ${sibirPunk800} 800w, ${sibirPunk1000} 1000w, ${sibirPunk1200} 1200w`,
    src: sibirPunkFallback,
    sizes: '100vw',
    alt: 'Sibir Punk',
  },
];
