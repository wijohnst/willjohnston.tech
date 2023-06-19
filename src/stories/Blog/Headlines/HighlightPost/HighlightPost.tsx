import * as React from 'react';
import Image from 'next/image';

import { useMediaQuery } from '@/hooks';
import { Breakpoints } from '@/types/app.types';
import { SemanticElement } from '@/stories/Blog/Headlines/HighlightPost/HighlightPost.style';
import { HeadlineMetaData, ImagePaths } from '@/stories/Blog/Blog.types';
import useGetMediaQuery from '@/hooks/useGetMediaQuery/useGetMediaQuery';

type Props = {
  highlighPostMetaData: HeadlineMetaData;
  heroImagePaths: ImagePaths;
};

const HighlightPost = ({
  highlighPostMetaData,
  heroImagePaths,
}: Props): React.ReactElement => {
  const { heroImageAlt, title } = highlighPostMetaData;

  const match = useGetMediaQuery();

  const isMobile = match === 'mobile' || match === 'mobile_small';
  return (
    <SemanticElement>
      <Image
        alt={heroImageAlt}
        src={isMobile ? heroImagePaths.mobile : heroImagePaths.desktop}
        height={isMobile ? 130 : 300}
        width={isMobile ? 385 : 338}
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
