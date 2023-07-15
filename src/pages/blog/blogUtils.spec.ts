import { BlogList, NextPath } from '@/stories/Blog/Blog.types';
import { getBlogPostPaths, convertContentToHTML } from './blogUtils';
import { remark } from 'remark';

jest.mock('remark', () => ({
  remark: jest.fn().mockImplementation(() => ({
    use: jest.fn().mockImplementation(() => ({
      process: jest.fn().mockImplementation(() => '<h1>Test Header</h1>'),
    })),
  })),
}));

jest.mock('remark-html', () => ({
  html: jest.fn(),
}));

describe('Blog Utils', () => {
  const defaultBlogFrontmatterAsJsObject = {
    title: 'TestPost',
    slug: '/test-post',
    createdDate: '03/20/2023',
    summary: 'A sample test post for WillJohnston.tech',
    featuredImageDesktop: '/TestImages/Desktop.png',
    featuredImageMobile: '/TestImages/Mobile.png',
    highlightImageDesktop: '/TestImages/Highlight-Desktop.png',
    highlightImageMobile: '/TestImages/Highlight-Mobile.png',
    heroImageAlt: 'A sample image',
    isFeatured: false,
    isHighlight: false,
  };

  describe('getBlogPostPaths', () => {
    it('should return an array of paths', () => {
      const blogList: BlogList = [
        {
          content: 'content',
          data: defaultBlogFrontmatterAsJsObject,
        },
        {
          content: 'content',
          data: { ...defaultBlogFrontmatterAsJsObject, slug: '/test-post-2' },
        },
      ];
      const result: NextPath[] = [
        {
          params: {
            slug: '/test-post',
          },
        },
        {
          params: {
            slug: '/test-post-2',
          },
        },
      ];

      expect(getBlogPostPaths(blogList)).toEqual(result);
    });
  });

  describe('convertContentToHTML', () => {
    it('should convert markdown to HTML', async () => {
      const content = '# Test Header';
      const result = '<h1>Test Header</h1>';

      expect(await convertContentToHTML(content)).toEqual(result);
    });
  });
});
