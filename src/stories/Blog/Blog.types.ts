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
  mobile: string;
  desktop: string;
};
