import fs from 'fs';

import {
  getBlogListMetaDataArray,
  isBlogListMetaDataValid,
} from './generateBlogListUtils.mjs';

try {
  const blogListMetadataArray = getBlogListMetaDataArray();
  const isValid = isBlogListMetaDataValid(blogListMetadataArray);
  if (isValid) {
    fs.writeFile(`bloglist.json`, JSON.stringify(blogListMetadataArray), () => {
      console.log('File written successfully...');
      return;
    });
  }
} catch (error) {
  if (process.env.NODE_ENV !== 'test') {
    console.error(error);
  }
}
