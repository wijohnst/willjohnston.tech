import { BlogFrontmatter, BlogList } from '@/stories/Blog/Blog.types';
import { Breakpoints } from '@/types/app.types';

export type ParsedBlogList = {
  featuredPost: BlogFrontmatter;
  highlightPosts: BlogFrontmatter[];
};

/**
 * Function that accepts BlogListand returns a ParsedBlogList object
 *
 * @param { BlogList } blogList
 * @returns { ParsedBlogList } parsedBlogList
 */
export const parseBlogList = (blogList: BlogList): ParsedBlogList => {
  const blogMetaData = blogList.map((blog) => blog.data);
  const featuredPost = blogMetaData.find(
    (blog) => blog.isFeatured,
  ) as BlogFrontmatter;
  const highlightPosts = blogMetaData.filter((blog) => blog.isHighlight);

  return { featuredPost, highlightPosts };
};

export const getImagePath = (
  currentBreakpoint: keyof typeof Breakpoints,
): 'desktop' | 'tablet' | 'mobile' => {
  switch (currentBreakpoint) {
    case 'mobile':
    case 'mobile_small':
      return 'mobile';
    case 'tablet_small':
    case 'tablet':
      return 'tablet';
    case 'desktop':
    case 'laptop':
    case 'laptop_small':
      return 'desktop';
  }
};

export const getMaxWidth = (
  currentBreakpoint: keyof typeof Breakpoints,
): number => {
  switch (currentBreakpoint) {
    case 'desktop':
    case 'laptop':
    case 'laptop_small':
      return 680;
    case 'tablet':
      return 475;
    case 'tablet_small':
      return 420;
    case 'mobile':
      return 385;
    case 'mobile_small':
      return 360;
    default:
      return 680;
  }
};
