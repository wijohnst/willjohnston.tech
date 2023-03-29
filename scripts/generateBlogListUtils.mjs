import fs from 'fs';
import matter from 'gray-matter';

export const defaultBlogFrontmatter = {
  title: 'TestPost',
  slug: '/test-post',
  createdDate: '03/20/2023',
  summary: 'A sample test post for WillJohnston.tech',
  featuredImage: {
    desktop: 'public/TestImages/Desktop.png',
    mobile: 'public/TestImages/Mobile.png',
  },
  highlightImage: {
    desktop: 'public/TestImages/Highlight-Desktop.png',
    mobile: 'public/TestImages/Highlight-Mobile.png',
  },
  heroImageAlt: 'A sample image',
  isFeatured: false,
  isHighlight: false,
};

export const frontmatterKeys = Object.keys(defaultBlogFrontmatter);

export const getBlogListMetaDataArray = (dirToTarget) => {
  const targetDir = dirToTarget ?? './src/pages/blog';
  const fileNames = fs.readdirSync(targetDir);
  const fileNamesToIgnore = ['index.tsx'];
  return fileNames.reduce((blogListMetaData, fileName) => {
    if (!fileNamesToIgnore.includes(fileName)) {
      const fileContents = fs.readFileSync(`${targetDir}/${fileName}`, 'utf-8');
      const { data, content } = matter(fileContents);
      return [...blogListMetaData, { data, content }];
    }
    return [...blogListMetaData];
  }, []);
};

export const failedTestOutput = [
  'Only one post can be "featured"',
  'At least one post must be "featured"',
  'One or more post is missing a frontmatter field',
  'A post cannot be featured and highlighted at the same time',
];

export const isBlogListMetaDataValid = (blogListMetaDataArray) => {
  let failedTestMessage = '';
  let failedPostName = 'Cannot determine Post with error';

  /** Cannot have more than one "featured" post */
  const hasMultipleFeatured =
    blogListMetaDataArray.filter(
      (blogListEntry) => blogListEntry.data.isFeatured === true,
    ).length > 1;

  /** Cannot have less than one "featured" post */
  const hasNoneFeatured =
    blogListMetaDataArray.filter(
      (blogListEntry) => blogListEntry.data.isFeatured === true,
    ).length < 1;

  /** All posts have all frontmatter fields */
  const isMissingKey = blogListMetaDataArray
    .filter((blogListEntry) => {
      const postFrontmatterKeys = Object.keys(blogListEntry.data);

      const hasAllKeys = frontmatterKeys.every((key) =>
        postFrontmatterKeys.includes(key),
      );

      if (hasAllKeys) {
        return true;
      } else {
        failedPostName = blogListEntry.data.title;
        return false;
      }
    })
    .every((testCase) => testCase === true);

  /** A post cannot be both Featured and Highlighted */
  const isFeaturedAndIsHighlight = blogListMetaDataArray.some(
    (blogListEntry) => {
      if (
        blogListEntry.data.isFeatured === true &&
        blogListEntry.data.isHighlight === true
      ) {
        failedPostName = blogListEntry.data.title;
        return true;
      }
      return false;
    },
  );

  const tests = [
    hasMultipleFeatured,
    hasNoneFeatured,
    isMissingKey,
    isFeaturedAndIsHighlight,
  ];

  const isValid = tests.every((test, index) => {
    // If a test is "true" that means it has failed
    if (test === true) {
      failedTestMessage = failedTestOutput[index];
    }
    return test === false;
  });

  if (isValid) {
    return true;
  } else {
    throw new Error(
      `Invalid frontmatter detected: ${failedTestMessage} - See ${failedPostName}`,
    );
  }
};
