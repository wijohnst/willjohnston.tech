import { Breakpoints } from '@/types/app.types';

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

export type NextPath = { params: Record<string, string> };

export namespace BlogListModule {
  export const defaultBlogFrontmatterAsJsObject: BlogFrontmatter = {
    title: 'TestPost',
    slug: 'test-post',
    createdDate: '07/18/2023',
    summary: 'A sample test post for WillJohnston.tech',
    featuredImageDesktop: '/TestImages/Desktop.png',
    featuredImageMobile: '/TestImages/Mobile.png',
    highlightImageDesktop: '/TestImages/Highlight-Desktop.png',
    highlightImageMobile: '/TestImages/Highlight-Mobile.png',
    heroImageAlt: 'A sample image',
    isFeatured: false,
    isHighlight: false,
  };

  export const mockBlogList: BlogList = [
    {
      content: 'content_1',
      data: defaultBlogFrontmatterAsJsObject,
    },
    {
      content: 'content_2',
      data: {
        ...defaultBlogFrontmatterAsJsObject,
        title: 'TestPost 2',
        slug: 'test-post-2',
      },
    },
    {
      content: 'content_3',
      data: {
        ...defaultBlogFrontmatterAsJsObject,
        title: 'TestPost 3',
        slug: 'test-post-3',
      },
    },
  ];
}
export namespace BlogNav {
  type BlogMetaData = {
    title: string;
    slug: string;
  };
  export type BlogYears = Record<string, BlogMetaData[]>;

  export type BlogListEntryProps = {
    yearValue: string;
    blogMetaDataArray: BlogMetaData[];
  };
}
