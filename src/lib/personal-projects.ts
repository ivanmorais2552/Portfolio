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

const landscape = (file: string, alt: string, layout: GalleryLayout = 'standard'): GalleryImage => ({
  src: `/images/personal-projects/${file}`,
  alt,
  width: 1920,
  height: 1243,
  layout,
});

const portrait = (file: string, alt: string): GalleryImage => ({
  src: `/images/personal-projects/${file}`,
  alt,
  width: 882,
  height: 1912,
  layout: 'portrait',
});

export const personalProjectCollections: PersonalProjectCollection[] = [
  {
    id: 'nike',
    title: 'Nike — E-commerce Concepts',
    description: 'E-commerce interfaces and promotional designs.',
    categoryLabel: 'Web / E-commerce',
    categories: ['web'],
    images: [
      landscape(
        '0a8d7daf-74af-4663-be82-2fda5dc20c60_rw_1920.png',
        'Nike concept homepage with a bright orange collage and sticker-like product imagery',
        'feature',
      ),
      landscape(
        '3ea011e3-79c7-43fd-95e7-f6d62569219d_rw_1920.png',
        'Nike concept category page with clothing, sports, and shoe collections',
      ),
      landscape(
        '4b092d9b-50e8-412e-9949-78d34aaf9aa7_rw_1920.png',
        'Nike concept campaign page with a tennis athlete and oversized swoosh',
      ),
      landscape(
        '63865e99-4d70-4888-bdf7-192bf10711c7_rw_1920.png',
        'Nike concept editorial page for a V2K Run artist collection',
      ),
      landscape(
        '638a011f-ade8-4c10-a09a-dd9086d973be_rw_1920.png',
        'Nike concept editorial page for new shoes',
      ),
      landscape(
        '1489d100-ae52-462f-87a2-e6c5e9666f68_rw_1920.png',
        'Nike concept sustainability editorial page',
      ),
      landscape(
        'c1120379-3255-4a30-96bc-9904de7056a9_rw_1920.png',
        'Nike concept new clothing product grid',
      ),
      landscape(
        'c4f9837e-8dcd-46df-a0be-cdd09c441457_rw_1920.png',
        'Nike concept clothing product grid with collaborative pieces',
      ),
      landscape(
        'f33652ad-211d-4c79-aee9-21fb95d7ca89_rw_1920.png',
        'Nike concept new kicks editorial page',
      ),
      landscape(
        'f67a80aa-0120-4abb-a729-a7fb01fc1afa_rw_1920.png',
        'Nike concept product page for a fuzzy blue Dunk Low',
      ),
      landscape(
        'cbc7d670-77eb-4eaf-8f84-40dc4751ab4d_rw_1920.png',
        'Nike concept product feature page with colorful Air Max shoes',
      ),
      landscape(
        'aec89fef-72ff-4f29-9f09-a06bfb937de6_rw_1920.png',
        'Nike concept new shoes product grid',
      ),
      landscape(
        'ed006203-6235-485e-a009-b3863983d7a9_rw_1920.png',
        'Nike concept new releases landing page',
      ),
      landscape(
        '6dd28a92-f63d-483a-aa82-9bc1276dd4ca_rw_1920.png',
        'Nike concept e-commerce footer navigation',
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
        'ebdb0b72-dcf1-4fae-a40c-c4fb970a3992_rw_1920.png',
        'Streaming platform concept home screen with shows and movies',
        'feature',
      ),
      landscape(
        '10b44141-6c06-4c59-a1d0-02558aae8a05_rw_1920.png',
        'College sports streaming concept home screen in orange and green',
      ),
      landscape(
        '170fca83-9755-4a7c-a211-325020d472e1_rw_1920.png',
        'College sports streaming concept home screen in blue',
      ),
      landscape(
        '6e7b8df4-7c19-43b4-8ad9-643ab6bb0bcf_rw_1920.png',
        'College sports streaming concept home screen in purple',
      ),
      landscape(
        '7c43b815-1d84-4bdc-bb96-e28b6ea965e2_rw_1920.png',
        'College football streaming concept for a national championship',
      ),
      landscape(
        'faed6d79-6730-452c-bdea-86f8957dab15_rw_1920.png',
        'College football streaming concept for a live studio broadcast',
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
        'f8692a78-75d8-4bfc-9770-3d8159bbd0b6_rw_1200.png',
        'Yeezy mobile music library concept with album artwork',
      ),
      portrait(
        'f4e2f731-6c45-4ae8-9f6b-cd4e461f109c_rw_1200.png',
        'Yeezy mobile shopping concept with new drops, sneakers, and clothes',
      ),
      portrait(
        '45cabc3d-00c6-4ce2-ab40-603a5852764c_rw_1200.png',
        'Yeezy mobile splash screen concept',
      ),
      portrait(
        '8104242e-e3dc-4e1c-a49a-6205f08b7a4a_rw_1200.png',
        'Yeezy mobile playlist concept with track list and playback controls',
      ),
      portrait(
        'e3e4a7db-8053-449a-9899-2595b51be79a_rw_1200.png',
        'Yeezy mobile music player concept for an album',
      ),
    ],
  },
  {
    id: 'fashion',
    title: 'Fashion & Lifestyle',
    description: 'Editorial fashion, e-commerce, and visual exploration.',
    categoryLabel: 'Web / Editorial',
    categories: ['web'],
    images: [
      landscape(
        '88b93712-86fc-40bf-b852-a6ceed61d90b_rw_1920.png',
        'Editorial music and lifestyle event listing concept',
        'feature',
      ),
      landscape(
        'cae80856-6578-4ecd-99c8-0123ae2ff04b_rw_1920.png',
        'Editorial fashion and lifestyle visual composition',
      ),
    ],
  },
  {
    id: 'latino',
    title: 'Latino Experience',
    description: 'Bilingual event graphics and visual communication.',
    categoryLabel: 'Graphic Design',
    categories: ['graphics'],
    images: [
      {
        src: '/images/personal-projects/a1e2458c-0a5b-4629-b817-30027fe5c1fb_rw_1920.jpg',
        alt: 'Latino Experience event graphic for a BYU Latin American Studies art competition',
        width: 1920,
        height: 1080,
        layout: 'feature',
      },
    ],
  },
];

export const personalProjectPreviewImages = [
  personalProjectCollections[0].images[0],
  personalProjectCollections[2].images[1],
  personalProjectCollections[4].images[0],
];
