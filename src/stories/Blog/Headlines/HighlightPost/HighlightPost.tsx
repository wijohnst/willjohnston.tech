import * as React from 'react';
import Image from 'next/image';

import { SemanticElement } from '@/stories/Blog/Headlines/HighlightPost/HighlightPost.style';
import { HeadlineMetaData, ImagePaths } from '@/stories/Blog/Blog.types';
import useGetMediaQuery from '@/hooks/useGetMediaQuery';
import { getMaxWidth, getImagePath } from '../Headlines.utils';
import { highlightPostImageDimensions } from '@/stories/Blog/Blog.types';

type Props = {
  highlighPostMetaData: HeadlineMetaData;
  heroImagePaths: ImagePaths;
};

const HighlightPost = ({
  highlighPostMetaData,
  heroImagePaths,
}: Props): React.ReactElement => {
  const { heroImageAlt, title } = highlighPostMetaData;
  const currentBreakpoint = useGetMediaQuery();
  const { height, width } = highlightPostImageDimensions[currentBreakpoint];
  const imageSrc = heroImagePaths[getImagePath(currentBreakpoint)];

  return (
    <SemanticElement highlightMaxWidth={getMaxWidth(currentBreakpoint)}>
      <Image
        alt={heroImageAlt}
        src={`/${imageSrc}`}
        height={height}
        width={width}
      />
      <div className="summary-content">
        <div className="highlight-header">
          <h6>popular</h6>
        </div>
        <div className="title-container">
          <h4>{title}</h4>
        </div>
      </div>
    </SemanticElement>
  );
};

export { HighlightPost };
