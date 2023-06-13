import { BlogFrontmatter, BlogList } from '@/stories/Blog/Blog.types';

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
