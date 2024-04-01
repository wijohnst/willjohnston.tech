import Portfolio from '@/pages/Portfolio';

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
  techStack: string[];
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
    width: 385,
  },
  mobile: {
    height: 430,
    width: 430,
  },
};

export const portfolio: Portfolio = [
  {
    title: 'Project 1',
    images: [
      {
        alt: 'A friendly kitty',
        imagePaths: getImagePaths('Project 1'),
        imageDimensions: defaultImageDimensions,
      },
    ],
    techStack: ['React', 'TypeScript', 'Next.js'],
  },
];
