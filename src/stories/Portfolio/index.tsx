import Portfolio from '@/pages/Portfolio';

import { TechStackKeys } from '@/stories/Project/TechStackDisplay/TechStack';

import { JhhContent } from '../Project/Content';

export type ImageKey = 'desktop' | 'tablet' | 'mobile';

export type ImagePaths = Record<ImageKey, string>;
export type ImageDimensions = Record<
  ImageKey,
  { height: number; width: number }
>;

export type ImageConfig = {
  alt: string;
  imagePaths: ImagePaths;
  imageDimensions: ImageDimensions;
};

export type Project = {
  title: string;
  images: ImageConfig[];
  techStack: Partial<TechStackKeys>[];
  content: React.ReactElement;
};

export type Portfolio = Project[];

const defaultImagePath = `/TestImages/Project`;

const getImagePaths = (title: string): ImagePaths => {
  const normalizedTitle = title.toLowerCase().replace(/\s/g, '-');

  return {
    desktop: `${defaultImagePath}/${normalizedTitle}-desktop.png`,
    tablet: `${defaultImagePath}/${normalizedTitle}-tablet.png`,
    mobile: `${defaultImagePath}/${normalizedTitle}-mobile.png`,
  };
};

const defaultImageDimensions: ImageDimensions = {
  desktop: {
    height: 450,
    width: 450,
  },
  tablet: {
    height: 420,
    width: 735,
  },
  mobile: {
    height: 375,
    width: 375,
  },
};

export const portfolio: Portfolio = [
  {
    title: 'Johnston Home Hub',
    images: [
      {
        alt: 'A friendly kitty',
        imagePaths: getImagePaths('Project 1'),
        imageDimensions: defaultImageDimensions,
      },
    ],
    techStack: ['react', 'typescript'],
    content: <JhhContent />,
  },
];
