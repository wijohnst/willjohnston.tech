import * as React from 'react';
import Image from 'next/image';

import { useMediaQuery } from '@/hooks';
import { Breakpoints } from '@/types/app.types';

import { SemanticElement } from '@/stories/Blog/Headlines/FeaturedPost/FeaturedPost.style';
import { HeadlineMetaData, HeroImages } from '@/stories/Blog/Blog.types';

type Props = {
  featuredPostMetaData: HeadlineMetaData;
  heroImages: HeroImages;
};

const FeaturedPost = ({ featuredPostMetaData, heroImages }: Props) => {
  const { heroImageAlt, title, summary } = featuredPostMetaData;

  const isMobile = useMediaQuery(Breakpoints.mobile);

  return (
    <SemanticElement>
      <Image
        alt={heroImageAlt}
        src={isMobile ? heroImages.mobile : heroImages.desktop}
        quality={isMobile ? 50 : 75}
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
