import * as React from 'react';
import blogList from '@@/bloglist.json';
import { convertContentToHTML, getBlogPostPaths } from './blogUtils';
import { BlogList, BlogListMetaData } from '@/stories/Blog/Blog.types';
import { GetStaticPropsContext } from 'next';

const BlogPost = (props: { slug: string; content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: props.content }} />;
};

export function getStaticPaths() {
  return {
    paths: getBlogPostPaths(blogList),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const targetContent = blogList.find(
    (blogListEntry: BlogListMetaData) =>
      blogListEntry.data.slug === params?.slug,
  );
  const content = await convertContentToHTML(targetContent?.content ?? '');
  return {
    props: {
      slug: params?.slug,
      content: content,
    },
  };
}

export default BlogPost;
