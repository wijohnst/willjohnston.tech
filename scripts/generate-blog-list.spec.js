import {
  failedTestOutput,
  getBlogListMetaDataArray,
  isBlogListMetaDataValid,
  defaultBlogFrontmatterAsJsObject,
} from './generateBlogListUtils.mjs';
import mock from 'mock-fs';
import {
  generateMockBlogFile,
  generateMockBlogFileMinusKey,
} from './scripts.testutils.js';

describe('generate-blog-list unit tests', () => {
  beforeEach(() => {
    const absolutePath = process.cwd();

    // Creates a mock file system
    mock({
      [`${absolutePath}/src/pages/blog`]: {
        ['someComponent.tsx']: generateMockBlogFile('1234', {}),
      },
      [`${absolutePath}/src/pages/testDir`]: {
        ['someComponent.tsx']: generateMockBlogFile('5678', {
          isFeatured: true,
        }),
      },
      [`${absolutePath}/src/pages/multipleFeatured`]: {
        ['someComponent.tsx']: generateMockBlogFile('1234', {
          isFeatured: true,
        }),
        ['someOtherComponent.tsx']: generateMockBlogFile('5678', {
          isFeatured: true,
        }),
      },
      [`${absolutePath}/src/pages/noneFeatured`]: {
        ['someComponent.tsx']: generateMockBlogFile('1234', {
          isFeatured: false,
        }),
        ['someOtherComponent.tsx']: generateMockBlogFile('5678', {
          isFeatured: false,
        }),
      },
      [`${absolutePath}/src/pages/missingKey`]: {
        ['some-post.mdx']: generateMockBlogFileMinusKey('isHighlight', 'ABCD', {
          title: 'Test Post 3',
          isFeatured: true,
        }),
      },
      [`${absolutePath}/src/pages/isFeaturedAndIsHighlight`]: {
        ['some-post.mdx']: generateMockBlogFile('EFGH', {
          isFeatured: true,
          isHighlight: true,
        }),
      },
    });
  });

  afterEach(() => mock.restore());

  it('Should return a the correct meta data array when no params are supplied', () => {
    const result = getBlogListMetaDataArray();
    const control = [
      {
        data: defaultBlogFrontmatterAsJsObject,
        content: '1234\n',
      },
    ];

    expect(result).toEqual(control);
  });

  it('Should return the correct meta data array', () => {
    const result = getBlogListMetaDataArray('./src/pages/testDir');
    const control = [
      {
        data: { ...defaultBlogFrontmatterAsJsObject, isFeatured: true },
        content: '5678\n',
      },
    ];

    expect(result).toEqual(control);
  });

  it(`Should throw an error when multiple posts are marked as 'featured'`, () => {
    const blogListMetaDataArray = getBlogListMetaDataArray(
      './src/pages/multipleFeatured',
    );

    expect(function () {
      isBlogListMetaDataValid(blogListMetaDataArray);
    }).toThrow(failedTestOutput[0]);
  });

  it(`Should throw an error when no post is marked as 'featured'`, () => {
    const blogListMetaDataArray = getBlogListMetaDataArray(
      './src/pages/noneFeatured',
    );

    expect(function () {
      isBlogListMetaDataValid(blogListMetaDataArray);
    }).toThrow(failedTestOutput[1]);
  });

  it(`Should throw an error when any post is missing a frontmatter field`, () => {
    const blogListMetaDataArray = getBlogListMetaDataArray(
      './src/pages/missingKey',
    );

    expect(function () {
      isBlogListMetaDataValid(blogListMetaDataArray);
    }).toThrow(failedTestOutput[2]);
  });

  it(`Should throw an error when any post "isFeatured" and "isHighlight"`, () => {
    const blogListMetaDataArray = getBlogListMetaDataArray(
      './src/pages/isFeaturedAndIsHighlight',
    );

    expect(function () {
      isBlogListMetaDataValid(blogListMetaDataArray);
    }).toThrow(failedTestOutput[3]);
  });
});
