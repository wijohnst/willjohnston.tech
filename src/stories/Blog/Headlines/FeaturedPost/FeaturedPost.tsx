import * as React from 'react';
import Image from 'next/image';

import { useMediaQuery } from '@/hooks';
import { Breakpoints } from '@/types/app.types';

import { SemanticElement } from '@/stories/Blog/Headlines/FeaturedPost/FeaturedPost.style';
import { HeadlineMetaData, ImagePaths } from '@/stories/Blog/Blog.types';

type Props = {
  featuredPostMetaData: HeadlineMetaData;
  heroImagePaths: ImagePaths;
};

const FeaturedPost = ({ featuredPostMetaData, heroImagePaths }: Props) => {
  const { heroImageAlt, title, summary } = featuredPostMetaData;

  const isMobile = useMediaQuery(Breakpoints.mobile);
  React.useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <SemanticElement>
      <Image
        alt={heroImageAlt}
        src={
          isMobile ? `/${heroImagePaths.mobile}` : `/${heroImagePaths.desktop}`
        }
        quality={isMobile ? 50 : 75}
        height={isMobile ? 130 : 454}
        width={isMobile ? 131 : 680}
      />
      <div className="summary-content">
        <h5>featured</h5>
        <h4>{title}</h4>
        <span>{summary}</span>
      </div>
    </SemanticElement>
  );
};

export default FeaturedPost;
