import { Breakpoints } from '@/types/app.types';
import matter from 'gray-matter';
import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type BlogFrontmatter = {
  title: string;
  slug: string;
  createdDate: string;
  summary: string;
  featuredImageDesktop: string;
  featuredImageMobile: string;
  highlightImageDesktop: string;
  highlightImageMobile: string;
  heroImageAlt: string;
  isFeatured: boolean;
  isHighlight: boolean;
};

export type BlogListMetaData = { content: string; data: BlogFrontmatter };
export type BlogList = BlogListMetaData[];

export type BlogPostMetaContent = String;

export type HeadlineMetaData = {
  title: string;
  createdDate: string;
  heroImageAlt: string;
  summary?: string;
};

export type ImagePaths = {
  desktop: string;
  mobile: string;
  tablet: string;
};

export type ImageSizeKey = keyof typeof Breakpoints;

export type ImageDimensions = {
  width: number;
  height: number;
};

export type ImageDimensionMap = { [key in ImageSizeKey]: ImageDimensions };

export const featuredPostImageDimensions: ImageDimensionMap = {
  desktop: {
    width: 680,
    height: 454,
  },
  laptop: {
    width: 680,
    height: 454,
  },
  laptop_small: {
    width: 680,
    height: 454,
  },
  tablet: {
    width: 475,
    height: 525,
  },
  tablet_small: {
    width: 475,
    height: 525,
  },
  mobile: {
    width: 385,
    height: 130,
  },
  mobile_small: {
    width: 385,
    height: 130,
  },
};

export const highlightPostImageDimensions: ImageDimensionMap = {
  desktop: {
    width: 338,
    height: 300,
  },
  laptop: {
    width: 338,
    height: 300,
  },
  laptop_small: {
    width: 338,
    height: 300,
  },
  tablet: {
    width: 318,
    height: 274,
  },
  tablet_small: {
    width: 420,
    height: 274,
  },
  mobile: {
    width: 174,
    height: 118,
  },
  mobile_small: {
    width: 174,
    height: 118,
  },
};
