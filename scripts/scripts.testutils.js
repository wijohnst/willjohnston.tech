import { defaultBlogFrontmatter } from './generateBlogListUtils.mjs';

export const generateMockBlogFile = (
  content,
  frontMatter = { ...defaultBlogFrontmatter },
) => {
  const {
    title,
    slug,
    createdDate,
    summary,
    featuredImage,
    highlightImage,
    heroImageAlt,
    isFeatured,
    isHighlight,
  } = frontMatter;
  return `---\ntitle: ${title}\nslug: ${slug}\ncreatedDate: ${createdDate}\nsummary: ${summary}\nfeaturedImage: ${JSON.stringify(
    featuredImage,
  )}\nhighlightImage: ${JSON.stringify(
    highlightImage,
  )}\nheroImageAlt: ${heroImageAlt}\nisFeatured: ${isFeatured}\nisHighlight: ${isHighlight}\n---${content}`;
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
