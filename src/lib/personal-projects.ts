export type PersonalProjectCategory = 'web' | 'mobile' | 'graphics';
export type GalleryLayout = 'feature' | 'standard' | 'portrait';

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: GalleryLayout;
};

export type PersonalProjectCollection = {
  id: string;
  title: string;
  description: string;
  categoryLabel: string;
  categories: PersonalProjectCategory[];
  images: GalleryImage[];
};

const landscape = (
  path: string,
  alt: string,
  layout: GalleryLayout = 'standard',
): GalleryImage => ({
  src: `/images/personal-projects/${path}`,
  alt,
  width: 1920,
  height: 1243,
  layout,
});

const portrait = (path: string, alt: string, width: number, height: number): GalleryImage => ({
  src: `/images/personal-projects/${path}`,
  alt,
  width,
  height,
  layout: 'portrait',
});

const graphic = (path: string, alt: string): GalleryImage => ({
  src: `/images/personal-projects/${path}`,
  alt,
  width: 1920,
  height: 1080,
  layout: 'feature',
});

export const personalProjectCollections: PersonalProjectCollection[] = [
  {
    id: 'travis-scott-nike',
    title: 'Travis Scott × Nike',
    description:
      'An independent, unofficial creative concept exploring Nike and Travis Scott-inspired campaign design.',
    categoryLabel: 'Campaign / E-commerce',
    categories: ['web'],
    images: [
      landscape(
        'nike-travis-scott/01-la-flame-hero.png',
        'Unofficial Travis Scott-inspired Nike campaign hero concept',
        'feature',
      ),
      landscape(
        'nike-travis-scott/02-product-grid.png',
        'Unofficial Travis Scott-inspired Nike product grid concept',
      ),
      landscape(
        'nike-travis-scott/03-new-clothing.png',
        'Unofficial Travis Scott-inspired Nike clothing collection concept',
      ),
      landscape(
        'nike-travis-scott/04-new-shoes.png',
        'Unofficial Travis Scott-inspired Nike shoes collection concept',
      ),
      landscape(
        'nike-travis-scott/05-music-section.png',
        'Unofficial Travis Scott-inspired Nike music section concept',
      ),
    ],
  },
  {
    id: 'y2k-nike',
    title: 'Y2K Nike Redesign',
    description:
      'An experimental Nike website concept exploring Y2K-inspired visuals, bold typography, and expressive layouts.',
    categoryLabel: 'Experimental Web Design',
    categories: ['web'],
    images: [
      landscape(
        'nike-y2k/01-black-simple-sleek.png',
        'Nike Y2K redesign concept for a black, simple, sleek collection',
        'feature',
      ),
      landscape(
        'nike-y2k/02-step-into-the-future.png',
        'Nike Y2K redesign concept with expressive Step Into the Future typography',
      ),
      landscape(
        'nike-y2k/03-new-kicks.png',
        'Nike Y2K redesign concept for a New Kicks collection',
      ),
      landscape(
        'nike-y2k/04-sustainability.png',
        'Nike Y2K redesign concept for a sustainability editorial section',
      ),
      landscape(
        'nike-y2k/05-air-collection.png',
        'Nike Y2K redesign concept for an Air collection',
      ),
    ],
  },
  {
    id: 'modern-nike',
    title: 'Nike Modern Redesign',
    description:
      'A clean, contemporary Nike e-commerce redesign concept focused on product presentation and modern interface design.',
    categoryLabel: 'E-commerce / Web Design',
    categories: ['web'],
    images: [
      landscape(
        'nike-modern/01-product-grid.png',
        'Nike modern redesign concept product grid',
        'feature',
      ),
      landscape('nike-modern/02-new-releases.png', 'Nike modern redesign concept for new releases'),
      landscape(
        'nike-modern/03-dunk-low-product.png',
        'Nike modern redesign concept product page for a Dunk Low',
      ),
      landscape('nike-modern/04-footer.png', 'Nike modern redesign concept footer navigation'),
      landscape(
        'nike-modern/05-game-time-campaign.png',
        'Nike modern redesign concept campaign section for Game Time',
      ),
      landscape(
        'nike-modern/06-air-max-products.png',
        'Nike modern redesign concept Air Max product presentation',
      ),
    ],
  },
  {
    id: 'streaming',
    title: 'Streaming Platform',
    description: 'Entertainment and sports streaming interface concepts.',
    categoryLabel: 'Web / Entertainment',
    categories: ['web'],
    images: [
      landscape(
        'streaming-platform/01-entertainment-home.png',
        'Streaming platform concept entertainment home screen',
        'feature',
      ),
      landscape(
        'streaming-platform/02-sports-discovery.png',
        'Streaming platform concept sports discovery screen',
      ),
      landscape(
        'streaming-platform/03-sports-home.png',
        'Streaming platform concept sports home screen',
      ),
      landscape(
        'streaming-platform/04-sports-team-page.png',
        'Streaming platform concept sports team page',
      ),
      landscape(
        'streaming-platform/05-football-team-page.png',
        'Streaming platform concept football team page',
      ),
      landscape(
        'streaming-platform/06-sports-browse.png',
        'Streaming platform concept sports browse screen',
      ),
    ],
  },
  {
    id: 'yeezy',
    title: 'Yeezy — Music & Shopping',
    description: 'A mobile interface exploring music and fashion shopping.',
    categoryLabel: 'Mobile / Concept',
    categories: ['mobile'],
    images: [
      portrait(
        'yeezy-mobile/01-splash-screen.png',
        'Yeezy mobile splash screen concept',
        882,
        1912,
      ),
      portrait(
        'yeezy-mobile/02-shopping.png',
        'Yeezy mobile shopping concept with new drops, sneakers, and clothes',
        880,
        1910,
      ),
      portrait(
        'yeezy-mobile/03-music-library.png',
        'Yeezy mobile music library concept with album artwork',
        882,
        1912,
      ),
      portrait('yeezy-mobile/04-album-detail.png', 'Yeezy mobile album detail concept', 880, 1914),
      portrait('yeezy-mobile/05-music-player.png', 'Yeezy mobile music player concept', 884, 1906),
    ],
  },
  {
    id: 'latino',
    title: 'Latino Experience',
    description: 'Bilingual event graphics and visual communication.',
    categoryLabel: 'Graphic Design',
    categories: ['graphics'],
    images: [
      graphic(
        'latino-experience/01-event-graphic-a.jpg',
        'Latino Experience event graphic for a Latin American Studies art competition',
      ),
      graphic(
        'latino-experience/02-event-graphic-b.jpg',
        'Latino Experience event graphic with bilingual visual communication',
      ),
    ],
  },
];

export const personalProjectPreviewImages = [
  personalProjectCollections[0].images[0],
  personalProjectCollections[4].images[1],
  personalProjectCollections[5].images[0],
];
