import fs from 'fs';
import matter from 'gray-matter';

const fileNames = fs.readdirSync('./src/pages/blog');

const blogListMetaDataArray = fileNames.reduce((blogListMetaData, fileName) => {
  const fileContents = fs.readFileSync(`./src/pages/blog/${fileName}`, 'utf-8');
  const { data } = matter(fileContents);
  return [...blogListMetaData, data];
}, []);

fs.writeFile(`bloglist.json`, JSON.stringify(blogListMetaDataArray), () => {
  console.log('File written successfully...');
});

export {};
