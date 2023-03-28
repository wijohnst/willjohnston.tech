import * as React from 'react';
import Image from 'next/image';

import { useMediaQuery } from '@/hooks';
import { Breakpoints } from '@/types/app.types';
import { SemanticElement } from '@/stories/Blog/Headlines/HighlightPost/HighlightPost.style';
import { HeadlineMetaData, HeroImages } from '@/stories/Blog/Blog.types';

type Props = {
  highlighPostMetaData: HeadlineMetaData;
  heroImages: HeroImages;
};

const HighlightPost = ({
  highlighPostMetaData,
  heroImages,
}: Props): React.ReactElement => {
  const { heroImageAlt, title } = highlighPostMetaData;

  const isMobile = useMediaQuery(Breakpoints.mobile);

  return (
    <SemanticElement>
      <Image
        alt={heroImageAlt}
        src={isMobile ? heroImages.mobile : heroImages.desktop}
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
