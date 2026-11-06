import type { ProjectImageCrop } from '@/components/ui/ProjectImage';

export type ResearchGrantRoleId = 'faculty' | 'judges' | 'administrators';

export type ResearchGrantScreen = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  crop?: ProjectImageCrop;
};

export type ResearchGrantRole = {
  id: ResearchGrantRoleId;
  label: string;
  responsibility: string;
  screens: ResearchGrantScreen[];
};

export const grantsHomeScreen: ResearchGrantScreen = {
  src: '/images/grants/01-grants-home.png',
  alt: 'Research Grants Management grants home screen',
  label: 'Grants home',
  width: 3840,
  height: 5800,
  crop: {
    aspectRatio: '16 / 10',
    objectPosition: '50% 14%',
    scale: 1.08,
    responsive: {
      tablet: { aspectRatio: '16 / 10', objectPosition: '50% 13%', scale: 1.06 },
      mobile: { aspectRatio: '4 / 3', objectPosition: '50% 12%', scale: 1.1 },
    },
  },
};

export const researchGrantRoles: ResearchGrantRole[] = [
  {
    id: 'faculty',
    label: 'Faculty',
    responsibility: 'Request research grants.',
    screens: [
      {
        src: '/images/grants/02-faculty-my-applications.png',
        alt: 'Research Grants Management faculty applications screen',
        label: 'Grant applications',
        width: 3840,
        height: 2814,
      },
      {
        src: '/images/grants/03-faculty-application-form.png',
        alt: 'Research Grants Management faculty application form screen',
        label: 'Application forms',
        width: 3840,
        height: 7194,
      },
      {
        src: '/images/grants/04-application-review-details.png',
        alt: 'Research Grants Management application review details screen',
        label: 'Application management',
        width: 3840,
        height: 6728,
      },
    ],
  },
  {
    id: 'judges',
    label: 'Judges',
    responsibility: 'Evaluate grant requests.',
    screens: [
      {
        src: '/images/grants/05-reviewer-dashboard.png',
        alt: 'Research Grants Management reviewer dashboard screen',
        label: 'Reviewer dashboards',
        width: 3840,
        height: 2814,
      },
      {
        src: '/images/grants/06-reviewer-pending-reviews.png',
        alt: 'Research Grants Management pending reviews screen',
        label: 'Pending reviews',
        width: 3840,
        height: 6426,
      },
      {
        src: '/images/grants/07-reviewer-submitted-reviews.png',
        alt: 'Research Grants Management submitted reviews screen',
        label: 'Completed reviews',
        width: 3840,
        height: 6432,
      },
    ],
  },
  {
    id: 'administrators',
    label: 'Administrators',
    responsibility: 'Manage the overall process.',
    screens: [
      {
        src: '/images/grants/08-department-chair.png',
        alt: 'Research Grants Management department chair screen',
        label: 'Administrative dashboards',
        width: 3840,
        height: 2814,
      },
      {
        src: '/images/grants/09-committee-review.png',
        alt: 'Research Grants Management committee review screen',
        label: 'Application oversight',
        width: 3840,
        height: 5638,
      },
      {
        src: '/images/grants/10-admin-application-management.png',
        alt: 'Research Grants Management admin application management screen',
        label: 'Management workflows',
        width: 2526,
        height: 2638,
      },
      {
        src: '/images/grants/11-admin-grant-overview.png',
        alt: 'Research Grants Management admin grant overview screen',
        label: 'Grant overview',
        width: 3840,
        height: 3012,
      },
      {
        src: '/images/grants/12-admin-application-details.png',
        alt: 'Research Grants Management admin application details screen',
        label: 'Application details',
        width: 3840,
        height: 5446,
      },
    ],
  },
];

export const consistencyExamples = [
  researchGrantRoles[0].screens[0],
  researchGrantRoles[1].screens[0],
  researchGrantRoles[2].screens[0],
];
