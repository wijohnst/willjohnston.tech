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
  images: ImageConfig;
  techStack: Partial<TechStackKeys>[];
  content: React.ReactElement;
  githubLink: string;
  demoLink: string;
};

export type Portfolio = Project[];

const defaultImagePath = `/TestImages/Project`;

const getImagePaths = (title: string): ImagePaths => {
  const normalizedTitle = title.toLowerCase().replace(/\s/g, '-');

  return {
    desktop: `${defaultImagePath}/${normalizedTitle}-desktop.gif`,
    tablet: `${defaultImagePath}/${normalizedTitle}-tablet.gif`,
    mobile: `${defaultImagePath}/${normalizedTitle}-mobile.gif`,
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
    images: {
      alt: 'Johnston Home Hub Demo',
      imagePaths: getImagePaths('Johnston Home Hub'),
      imageDimensions: defaultImageDimensions,
    },

    techStack: ['react', 'typescript', 'node', 'express', 'mongo'],
    content: <JhhContent />,
    githubLink: 'https://github.com/wijohnst/jhh-mono',
    demoLink: 'https://johnstonhomehub.netlify.app/',
  },
  {
    title: 'Thriving Park',
    images: {
      alt: 'Thriving Park',
      imagePaths: getImagePaths('Thriving Park'),
      imageDimensions: defaultImageDimensions,
    },

    techStack: ['react', 'typescript', 'node', 'express', 'mongo'],
    content: <></>,
    githubLink: 'https://github.com/wijohnst/jhh-mono',
    demoLink: 'https://johnstonhomehub.netlify.app/',
  },
  {
    title: '@wijohnst/color-console',
    images: {
      alt: 'Color Console',
      imagePaths: getImagePaths('@wijohnst/color-console'),
      imageDimensions: defaultImageDimensions,
    },
    techStack: ['typescript', 'node'],
    content: <></>,
    githubLink: '',
    demoLink: '',
  },
];
