import * as React from 'react';

import {
  NavLink,
  SemanticElement,
} from '@/pages/blog/BlogList/BlogListEntry/BlogListEntry.style';
import { BlogNav } from '@/stories/Blog/Blog.types';
import Link from 'next/link';

const BlogListEntry = ({
  yearValue,
  blogMetaDataArray,
}: BlogNav.BlogListEntryProps): React.ReactElement => {
  return (
    <SemanticElement>
      <h5>{yearValue}</h5>
      <ul>
        {blogMetaDataArray.map((blogMetaData, index) => {
          const { title, slug } = blogMetaData;
          return (
            <li key={slug}>
              <NavLink href={`/blog/${slug}`}>{`· ${title}`}</NavLink>
            </li>
          );
        })}
      </ul>
    </SemanticElement>
  );
};

export { BlogListEntry };
