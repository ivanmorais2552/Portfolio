export type DesignSystemAsset = {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  crop?: {
    aspectRatio?: string;
    objectPosition?: string;
    scale?: number;
  };
};

export type DesignSystemGroup = {
  id: string;
  label: string;
  description: string;
  assets: DesignSystemAsset[];
};

export const designSystemOverview: DesignSystemAsset = {
  id: 'overview',
  label: 'Complete component overview',
  src: '/images/byu-design-system/00-component-overview-light-dark.png',
  alt: 'BYU Design System light and dark component overview',
  width: 1930,
  height: 1242,
  caption: 'The complete system across light and dark appearances.',
};

export const designSystemGroups: DesignSystemGroup[] = [
  {
    id: 'actions',
    label: 'Actions',
    description: 'Primary, outlined, and text actions with shared states and sizing.',
    assets: [
      {
        id: 'buttons',
        label: 'Buttons',
        src: '/images/byu-design-system/01-buttons.png',
        alt: 'BYU Design System button variants and interaction states',
        width: 2048,
        height: 1364,
        caption: 'Primary, outlined, and text actions organized by state.',
      },
    ],
  },
  {
    id: 'inputs-selection',
    label: 'Inputs & Selection',
    description: 'Inputs and selection controls organized around predictable interaction states.',
    assets: [
      {
        id: 'text-fields',
        label: 'Text fields',
        src: '/images/byu-design-system/06-text-fields.png',
        alt: 'BYU Design System text field states',
        width: 948,
        height: 1240,
        caption: 'Text fields with default, focused, error, and disabled states.',
      },
      {
        id: 'toggle-buttons',
        label: 'Toggle buttons',
        src: '/images/byu-design-system/07-toggle-buttons.png',
        alt: 'BYU Design System toggle button variants',
        width: 2048,
        height: 1568,
        caption: 'Toggle patterns translated into reusable states.',
        crop: { aspectRatio: '4 / 3', objectPosition: '50% 35%', scale: 1.08 },
      },
      {
        id: 'checkboxes',
        label: 'Checkboxes',
        src: '/images/byu-design-system/02-checkboxes.png',
        alt: 'BYU Design System checkbox variants and states',
        width: 2048,
        height: 1569,
        caption: 'Selection states that remain consistent across applications.',
        crop: { aspectRatio: '4 / 3', objectPosition: '50% 33%', scale: 1.08 },
      },
      {
        id: 'radio-buttons',
        label: 'Radio buttons',
        src: '/images/byu-design-system/05-radio-buttons.png',
        alt: 'BYU Design System radio button variants and states',
        width: 2048,
        height: 1661,
        caption: 'Radio controls documented as a shared component pattern.',
        crop: { aspectRatio: '4 / 3', objectPosition: '50% 33%', scale: 1.08 },
      },
    ],
  },
  {
    id: 'navigation-feedback',
    label: 'Navigation & Feedback',
    description:
      'Menus, dialogs, and tooltips that give navigation and system feedback a common language.',
    assets: [
      {
        id: 'menus',
        label: 'Menus',
        src: '/images/byu-design-system/04-menus.png',
        alt: 'BYU Design System menu patterns',
        width: 1944,
        height: 1680,
        caption: 'Menus that carry the same hierarchy into navigation.',
      },
      {
        id: 'dialogs',
        label: 'Dialogs',
        src: '/images/byu-design-system/03-dialogs.png',
        alt: 'BYU Design System dialog patterns',
        width: 1450,
        height: 1680,
        caption: 'Dialog structure, actions, and supporting states.',
      },
      {
        id: 'tooltips',
        label: 'Tooltips',
        src: '/images/byu-design-system/08-tooltips.png',
        alt: 'BYU Design System tooltip patterns',
        width: 1708,
        height: 1668,
        caption: 'Tooltips for adding context without changing the layout.',
      },
    ],
  },
];

export const designSystemAssets = designSystemGroups.flatMap((group) => group.assets);
