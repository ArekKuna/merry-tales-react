import heroLowRes from 'assets/hero-image/hero-lowRes.webp';
import hero640 from 'assets/hero-image/hero-640.webp';
import hero750 from 'assets/hero-image/hero-750.webp';
import hero830 from 'assets/hero-image/hero-830.webp';
import hero1080 from 'assets/hero-image/hero-1080.webp';
import hero1200 from 'assets/hero-image/hero-1200.webp';
import hero1920 from 'assets/hero-image/hero-1920.webp';
import heroFallback from 'assets/hero-image/hero-1080.jpg';
import logoLowRes from 'assets/logo/logo-lowRes.webp';
import logo1x from 'assets/logo/logo-1x.webp';
import logo2x from 'assets/logo/logo-2x.webp';

export const homePageImages = {
  hero: {
    id: 1,
    lowQualityImage: heroLowRes,
    srcSet: `${hero640} 640w, ${hero750} 750w, ${hero830} 830w, ${hero1080} 1080w, ${hero1200} 1200w, ${hero1920} 1920w`,
    src: heroFallback,
    sizes: '100vw',
    alt: 'Hero image',
  },
  logo: {
    id: 2,
    lowQualityImage: logoLowRes,
    srcSet: `${logo1x} 1x, ${logo2x} 2x`,
    src: logo2x,
    sizes: '100vw',
    alt: 'Merry Tales Logo',
  },
};
