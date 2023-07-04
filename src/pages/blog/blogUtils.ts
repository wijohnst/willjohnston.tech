import { BlogList, NextPath } from '@/stories/Blog/Blog.types';

import { remark } from 'remark';
import html from 'remark-html';

/**
 * Accepts a `blogList : BlogListMetaData[]` and returns an array of Next.js `path` objects
 *
 * @param { BlogList } blogList
 * @returns { NextPath[] }
 */
export const getBlogPostPaths = (blogList: BlogList): NextPath[] => {
  return blogList.map((blogPost) => {
    return {
      params: {
        slug: blogPost.data.slug,
      },
    };
  });
};

export const convertContentToHTML = async (
  content: string,
): Promise<string> => {
  const result = await remark().use(html).process(content);
  return result.toString();
};
