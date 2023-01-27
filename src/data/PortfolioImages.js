import evilWestlowRes from 'assets/video-games/evil-west/evil-west-square-lowRes.webp';
import evilWest640 from 'assets/video-games/evil-west/evil-west-square-640.webp';
import evilWest750 from 'assets/video-games/evil-west/evil-west-square-750.webp';
import evilWest830 from 'assets/video-games/evil-west/evil-west-square-830.webp';
import evilWest1080 from 'assets/video-games/evil-west/evil-west-square-1080.webp';
import evilWest1200 from 'assets/video-games/evil-west/evil-west-square-1200.webp';
import evilWest1920 from 'assets/video-games/evil-west/evil-west-square-1920.webp';
import evilWestFallback from 'assets/video-games/evil-west/evil-west-square-1080.jpg';
import lordsOfTheFallenLowRes from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-lowRes.webp';
import lordsOfTheFallen640 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-640.webp';
import lordsOfTheFallen750 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-750.webp';
import lordsOfTheFallen830 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-830.webp';
import lordsOfTheFallen1080 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-1080.webp';
import lordsOfTheFallen1200 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-1200.webp';
import lordsOfTheFallen1920 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-1920.webp';
import lordsOfTheFallenFallback from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-square-1080.jpg';
import sniperLowRes from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-lowRes.webp';
import sniper640 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-640.webp';
import sniper750 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-750.webp';
import sniper830 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-830.webp';
import sniper1080 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-1080.webp';
import sniper1200 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-1200.webp';
import sniper1920 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-1920.webp';
import sniperFallback from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-square-1080.jpg';
import sniperContractsLowRes from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-lowRes.webp';
import sniperContracts640 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-640.webp';
import sniperContracts750 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-750.webp';
import sniperContracts830 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-830.webp';
import sniperContracts1080 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-1080.webp';
import sniperContracts1200 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-1200.webp';
import sniperContracts1920 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-1920.webp';
import sniperContractsFallback from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-square-1080.jpg';
import shadowWarriorLowRes from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-lowRes.webp';
import shadowWarrior640 from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-640.webp';
import shadowWarrior750 from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-750.webp';
import shadowWarrior830 from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-830.webp';
import shadowWarrior1080 from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-1080.webp';
import shadowWarrior1200 from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-1200.webp';
import shadowWarrior1920 from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-1920.webp';
import shadowWarriorFallback from 'assets/video-games/shadow-warrior/shadow-warrior-3-square-1080.jpg';

export const portfolioImages = [
  {
    id: 1,
    lowQualityImage: evilWestlowRes,
    srcSet: `${evilWest640} 640w, ${evilWest750} 750w, ${evilWest830} 830w, ${evilWest1080} 1080w, ${evilWest1200} 1200w, ${evilWest1920} 1920w`,
    src: evilWestFallback,
    sizes: '100vw',
    alt: 'Evil West',
    studio: 'Flying Wild Hog',
  },
  {
    id: 2,
    lowQualityImage: lordsOfTheFallenLowRes,
    srcSet: `${lordsOfTheFallen640} 640w, ${lordsOfTheFallen750} 750w, ${lordsOfTheFallen830} 830w, ${lordsOfTheFallen1080} 1080w, ${lordsOfTheFallen1200} 1200w, ${lordsOfTheFallen1920} 1920w`,
    src: lordsOfTheFallenFallback,
    sizes: '100vw',
    alt: 'The Lords Of The Fallen iOS',
    studio: 'CI Games',
  },
  {
    id: 3,
    lowQualityImage: sniperLowRes,
    srcSet: `${sniper640} 640w, ${sniper750} 750w, ${sniper830} 830w, ${sniper1080} 1080w, ${sniper1200} 1200w, ${sniper1920} 1920w`,
    src: sniperFallback,
    sizes: '100vw',
    alt: 'Sniper Ghost Warrior 3',
    studio: 'CI Games',
  },
  {
    id: 4,
    lowQualityImage: sniperContractsLowRes,
    srcSet: `${sniperContracts640} 640w, ${sniperContracts750} 750w, ${sniperContracts830} 830w, ${sniperContracts1080} 1080w, ${sniperContracts1200} 1200w, ${sniperContracts1920} 1920w`,
    src: sniperContractsFallback,
    sizes: '100vw',
    alt: 'Sniper Ghost Warrior - Contracts',
    studio: 'CI Games',
  },
  {
    id: 5,
    lowQualityImage: shadowWarriorLowRes,
    srcSet: `${shadowWarrior640} 640w, ${shadowWarrior750} 750w, ${shadowWarrior830} 830w, ${shadowWarrior1080} 1080w, ${shadowWarrior1200} 1200w, ${shadowWarrior1920} 1920w`,
    src: shadowWarriorFallback,
    sizes: '100vw',
    alt: 'Shadow Warrior 3',
    studio: 'Flying Wild Hog',
  },
];
