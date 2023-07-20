import { getBlogYears, getYearsAsAString } from './BlogList.utils';

import { BlogListModule } from '@/stories/Blog/Blog.types';

describe('BlogList utility function unit tests', () => {
  describe('getBlogYears', () => {
    it('should return the correct year', () => {
      expect(getBlogYears(BlogListModule.mockBlogList)).toEqual({
        '2023': [
          {
            title: 'TestPost',
            slug: 'test-post',
          },
          {
            title: 'TestPost 2',
            slug: 'test-post-2',
          },
          {
            title: 'TestPost 3',
            slug: 'test-post-3',
          },
        ],
      });
    });
  });

  describe('getYearsAsAString', () => {
    it('should return the correct year as a string', () => {
      const date = new Date('10/24/1986');
      expect(getYearsAsAString(date)).toEqual('1986');
    });
  });
});
