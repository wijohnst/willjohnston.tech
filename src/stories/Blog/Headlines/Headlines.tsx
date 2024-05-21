import * as React from 'react';

import bloglist from '../../../../bloglist.json';
import { parseBlogList } from './Headlines.utils';

import { SemanticElement } from '@/stories/Blog/Headlines/Headlines.style';
import FeaturedPost from './FeaturedPost/FeaturedPost';
import { HighlightPost } from './HighlightPost/HighlightPost';

import useGetMediaQuery from '@/hooks/useGetMediaQuery';
import { useRouter } from 'next/router';

export type Props = {};

const Headlines = ({}: Props): React.ReactElement => {
  const { featuredPost, highlightPosts } = parseBlogList(bloglist);

  const matches = useGetMediaQuery();
  const router = useRouter();
  const isMobile = matches === 'mobile' || matches === 'mobile_small';

  return (
    <SemanticElement isMobile={isMobile}>
      <div
        className="featured-post"
        onClick={() => router.push(`blog/${featuredPost.slug}`)}
        role="link"
      >
        <FeaturedPost
          featuredPostMetaData={{
            title: featuredPost.title,
            createdDate: featuredPost.createdDate,
            heroImageAlt: featuredPost.heroImageAlt,
            summary: featuredPost.summary,
          }}
          heroImagePaths={{
            mobile: featuredPost.featuredImageMobile,
            desktop: featuredPost.featuredImageDesktop,
            tablet: 'TestImages/Tablet.png',
          }}
        />
      </div>
      <div className="highlight-posts">
        {highlightPosts.map((highlightPost) => (
          <div
            className="highlight-post-entry"
            key={highlightPost.slug}
            onClick={() => router.push(`blog/${highlightPost.slug}`)}
            role="link"
          >
            <HighlightPost
              highlighPostMetaData={{
                title: highlightPost.title,
                createdDate: highlightPost.createdDate,
                heroImageAlt: highlightPost.heroImageAlt,
                summary: highlightPost.summary,
              }}
              heroImagePaths={{
                mobile: highlightPost.highlightImageMobile,
                desktop: highlightPost.highlightImageDesktop,
                tablet: 'TestImages/Highlight-Tablet.png',
              }}
            />
          </div>
        ))}
      </div>
    </SemanticElement>
  );
};

export { Headlines };
