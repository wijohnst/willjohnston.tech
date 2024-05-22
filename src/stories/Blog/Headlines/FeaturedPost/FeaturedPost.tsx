import * as React from 'react';
import Image from 'next/image';

import { SemanticElement } from '@/stories/Blog/Headlines/FeaturedPost/FeaturedPost.style';
import {
  HeadlineMetaData,
  ImagePaths,
  featuredPostImageDimensions,
} from '@/stories/Blog/Blog.types';
import useGetMediaQuery from '@/hooks/useGetMediaQuery';
import { getImagePath, getMaxWidth } from '../Headlines.utils';

type Props = {
  featuredPostMetaData: HeadlineMetaData;
  heroImagePaths: ImagePaths;
};

const FeaturedPost = ({ featuredPostMetaData, heroImagePaths }: Props) => {
  const { heroImageAlt, title, summary } = featuredPostMetaData;

  const currentBreakpoint = useGetMediaQuery('desktop');

  const { height, width } = featuredPostImageDimensions[currentBreakpoint];

  const imageSrc = heroImagePaths[getImagePath(currentBreakpoint)];

  return (
    <SemanticElement maxWidth={getMaxWidth(currentBreakpoint)}>
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
