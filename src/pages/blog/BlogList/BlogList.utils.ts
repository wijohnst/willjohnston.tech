import { BlogNav, BlogListMetaData, BlogList } from '@/stories/Blog/Blog.types';
import bloglist from '../../../../bloglist.json';

/**
 * Returns an array of years and their blog posts
 *
 * @returns {BlogNav.BlogYears} An array of years and their blog posts
 */
export const getBlogYears = (
  blogList: BlogList = bloglist,
): BlogNav.BlogYears | [] => {
  return blogList.reduce(
    (years: BlogNav.BlogYears | [], blogListEntry: BlogListMetaData) => {
      const targetYear: string = getYearsAsAString(
        new Date(blogListEntry.data.createdDate),
      );
      return {
        ...years,
        [targetYear]: [
          // @ts-ignore
          ...(years[targetYear] || []),
          {
            title: blogListEntry.data.title,
            slug: blogListEntry.data.slug,
          },
        ],
      };
    },
    [],
  );
};

/**
 * Accepts a Date and returns the date's year as a string
 *
 * @param { Date } date
 * @returns { string }
 */
export const getYearsAsAString = (date: Date): string => {
  return date.getFullYear().toString();
};
