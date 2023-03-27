import { StaticImageData } from 'next/image';

export type BlogPostMetaData = {
  title: String;
  slug: String;
  createdDate: String;
  summary: String;
  heroImageURL: String;
  isFeatured: boolean;
};

export type BlogPostMetaContent = String;

export type HeadlineMetaData = {
  title: string;
  createdDate: string;
  heroImageAlt: string;
  summary?: string;
};

export type HeroImages = {
  mobile: StaticImageData;
  desktop: StaticImageData;
};
