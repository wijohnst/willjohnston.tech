import matter from 'gray-matter';
import { StaticImageData } from 'next/image';

export type BlogFrontmatter = {
  title: string;
  slug: string;
  createdDate: string;
  summary: string;
  featuredImage: {
    desktop: string;
    mobile: string;
  };
  highlightImage: {
    desktop: string;
    mobile: string;
  };
  heroImageAlt: string;
  isFeatured: boolean;
  isHighlight: boolean;
};

export type BlogListMetaData = ReturnType<typeof matter>;
export type BlogListMetaDataArray = BlogListMetaData[];

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
