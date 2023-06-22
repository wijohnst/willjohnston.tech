import { defaultBlogFrontmatterAsJsObject } from '../../../../scripts/generateBlogListUtils.mjs';

import { BlogFrontmatter } from '../Blog.types';
import { ParsedBlogList, parseBlogList } from './Headlines.utils';

describe('Headline utility functions', () => {
  describe('parsedBlogList', () => {
    const mockBlogList: { content: string; data: BlogFrontmatter }[] = [
      {
        content: 'Featured Post',
        data: {
          ...defaultBlogFrontmatterAsJsObject,
          isFeatured: true,
        },
      },
      {
        content: 'Highlight Post 1',
        data: {
          ...defaultBlogFrontmatterAsJsObject,
          title: 'Highlight Post 1',
          isHighlight: true,
        },
      },
      {
        content: 'Highlight Post 2',
        data: {
          ...defaultBlogFrontmatterAsJsObject,
          title: 'Highlight Post 2',
          isHighlight: true,
        },
      },
      {
        content: 'Highlight Post 3',
        data: {
          ...defaultBlogFrontmatterAsJsObject,
          title: 'Highlight Post 3',
          isHighlight: true,
        },
      },
    ];

    it('should return a parsed blog list', () => {
      const control: ParsedBlogList = {
        featuredPost: mockBlogList[0].data,
        highlightPosts: [
          mockBlogList[1].data,
          mockBlogList[2].data,
          mockBlogList[3].data,
        ],
      };

      expect(parseBlogList(mockBlogList)).toEqual(control);
    });
  });
});
