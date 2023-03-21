import fs from 'fs';
import matter from 'gray-matter';

const fileNames = fs.readdirSync('./src/pages/blog');

const fileNamesToIgnore = ['index.tsx'];

const blogListMetaDataArray = fileNames.reduce((blogListMetaData, fileName) => {
  if (!fileNamesToIgnore.includes(fileName)) {
    const fileContents = fs.readFileSync(
      `./src/pages/blog/${fileName}`,
      'utf-8',
    );
    const { data, content } = matter(fileContents);
    return [...blogListMetaData, { data, content }];
  }
  return [...blogListMetaData];
}, []);

fs.writeFile(`bloglist.json`, JSON.stringify(blogListMetaDataArray), () => {
  console.log('File written successfully...');
});

export {};
