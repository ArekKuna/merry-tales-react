import workshopsOne640 from 'assets/workshops/workshops-1-640.webp';
import workshopsOne750 from 'assets/workshops/workshops-1-750.webp';
import workshopsOne830 from 'assets/workshops/workshops-1-830.webp';
import workshopsOne1080 from 'assets/workshops/workshops-1-1080.webp';
import workshopsOne1200 from 'assets/workshops/workshops-1-1200.webp';
import workshopsOne1920 from 'assets/workshops/workshops-1-1920.webp';
import workshopsOneFallback from 'assets/workshops/workshops-1-1080.jpg';
import workshopsTwo640 from 'assets/workshops/workshops-2-640.webp';
import workshopsTwo750 from 'assets/workshops/workshops-2-750.webp';
import workshopsTwo830 from 'assets/workshops/workshops-2-830.webp';
import workshopsTwo1080 from 'assets/workshops/workshops-2-1080.webp';
import workshopsTwo1200 from 'assets/workshops/workshops-2-1200.webp';
import workshopsTwo1920 from 'assets/workshops/workshops-2-1920.webp';
import workshopsTwoFallback from 'assets/workshops/workshops-2-1080.jpg';
import workshopsThree640 from 'assets/workshops/workshops-3-640.webp';
import workshopsThree750 from 'assets/workshops/workshops-3-750.webp';
import workshopsThree830 from 'assets/workshops/workshops-3-830.webp';
import workshopsThree1080 from 'assets/workshops/workshops-3-1080.webp';
import workshopsThree1200 from 'assets/workshops/workshops-3-1200.webp';
import workshopsThree1920 from 'assets/workshops/workshops-3-1920.webp';
import workshopsThreeFallback from 'assets/workshops/workshops-3-1080.jpg';
import workshopsFour640 from 'assets/workshops/workshops-4-640.webp';
import workshopsFour750 from 'assets/workshops/workshops-4-750.webp';
import workshopsFour830 from 'assets/workshops/workshops-4-830.webp';
import workshopsFour1080 from 'assets/workshops/workshops-4-1080.webp';
import workshopsFour1200 from 'assets/workshops/workshops-4-1200.webp';
import workshopsFour1920 from 'assets/workshops/workshops-4-1920.webp';
import workshopsFourFallback from 'assets/workshops/workshops-4-1080.jpg';

export const workshops = [
  {
    id: 1,
    srcSet: `${workshopsOne640} 640w, ${workshopsOne750} 750w, ${workshopsOne830} 830w, ${workshopsOne1080} 1080w, ${workshopsOne1200} 1200w, ${workshopsOne1920} 1920w`,
    src: workshopsOneFallback,
    sizes: '100vw',
    alt: 'Workshops',
  },
  {
    id: 2,
    srcSet: `${workshopsTwo640} 642w, ${workshopsTwo750} 750w, ${workshopsTwo830} 830w, ${workshopsTwo1080} 1080w, ${workshopsTwo1200} 1200w, ${workshopsTwo1920} 1920w`,
    src: workshopsTwoFallback,
    sizes: '100vw',
    alt: 'Workshops',
  },
  {
    id: 3,
    srcSet: `${workshopsThree640} 640w, ${workshopsThree750} 750w, ${workshopsThree830} 830w, ${workshopsThree1080} 1080w, ${workshopsThree1200} 1200w, ${workshopsThree1920} 1920w`,
    src: workshopsThreeFallback,
    sizes: '100vw',
    alt: 'Workshops',
  },
  {
    id: 4,
    srcSet: `${workshopsFour640} 640w, ${workshopsFour750} 750w, ${workshopsFour830} 830w, ${workshopsFour1080} 1080w, ${workshopsFour1200} 1200w, ${workshopsFour1920} 1920w`,
    src: workshopsFourFallback,
    sizes: '100vw',
    alt: 'Workshops',
  },
];
