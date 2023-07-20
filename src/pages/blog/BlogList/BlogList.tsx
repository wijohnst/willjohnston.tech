import * as React from 'react';

import { SemanticElement } from '@/pages/blog/BlogList/BlogList.style';
import { BlogNav } from '@/stories/Blog/Blog.types';
import { getBlogYears } from './BlogList.utils';
import { BlogListEntry } from './BlogListEntry/BlogListEntry';

const BlogList = () => {
  const blogYears = Object.entries(getBlogYears()).reverse();

  return (
    <SemanticElement>
      <h4>Posts</h4>
      {blogYears.map((year, index) => {
        const [yearValue, blogMetaDataArray] = year;
        return (
          <BlogListEntry
            yearValue={yearValue}
            blogMetaDataArray={blogMetaDataArray}
            key={yearValue}
          />
        );
      })}
    </SemanticElement>
  );
};

export { BlogList };
