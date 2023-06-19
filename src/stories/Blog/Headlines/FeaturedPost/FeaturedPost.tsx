import * as React from 'react';
import Image from 'next/image';

import { SemanticElement } from '@/stories/Blog/Headlines/FeaturedPost/FeaturedPost.style';
import {
  HeadlineMetaData,
  ImagePaths,
  featuredPostImageDimensions,
} from '@/stories/Blog/Blog.types';
import { Breakpoints } from '@/types/app.types';
import useGetMediaQuery from '@/hooks/useGetMediaQuery/useGetMediaQuery';

type Props = {
  featuredPostMetaData: HeadlineMetaData;
  heroImagePaths: ImagePaths;
};

const FeaturedPost = ({ featuredPostMetaData, heroImagePaths }: Props) => {
  const { heroImageAlt, title, summary } = featuredPostMetaData;

  const currentBreakpoint = useGetMediaQuery('desktop');

  const { height, width } = featuredPostImageDimensions[currentBreakpoint];

  const getImagePath = (
    currentBreakpoint: keyof typeof Breakpoints,
  ): 'desktop' | 'tablet' | 'mobile' => {
    switch (currentBreakpoint) {
      case 'mobile':
      case 'mobile_small':
        return 'mobile';
      case 'tablet':
      case 'tablet_small':
        return 'tablet';
      case 'desktop':
      case 'laptop':
        return 'desktop';
    }
  };

  const imageSrc = heroImagePaths[getImagePath(currentBreakpoint)];

  return (
    <SemanticElement>
      <Image
        alt={heroImageAlt}
        src={`/${imageSrc}`}
        height={height}
        width={width}
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
