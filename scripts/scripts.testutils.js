import matter from 'gray-matter';

import {
  defaultBlogFrontmatter,
  defaultBlogFrontmatterAsJsObject,
} from './generateBlogListUtils.mjs';

export const generateMockBlogFile = (content, frontmatterToUpdate) => {
  return generateFrontmatterString(content, frontmatterToUpdate);
};

export const generateMockBlogFileMinusKey = (
  keyToDelete,
  content,
  frontMatter = { ...defaultBlogFrontmatter },
) => {
  let mockBlogFile = generateMockBlogFile(content, frontMatter);
  const keyMatcher = new RegExp(`\\b(${keyToDelete})\\b([\\s\\S]*?)\\n`, 'g');
  const match = mockBlogFile.match(keyMatcher);
  mockBlogFile = mockBlogFile.replace(match, '\n');

  return mockBlogFile;
};

export const generateFrontmatterString = (content, keysToUpdate) => {
  const updatedValues = {
    ...defaultBlogFrontmatterAsJsObject,
    ...keysToUpdate,
  };

  return matter.stringify(content, updatedValues);
};
