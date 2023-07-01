import * as React from 'react';

import { SemanticElement } from '@/stories/Blog/BlogHero/BlogHero.style';

type Props = {
  title: string;
  subtitle?: string;
};

const BlogHero = ({ title, subtitle }: Props): React.ReactElement => {
  return (
    <SemanticElement>
      <div className="title-wrapper">
        <h2>{title}</h2>
      </div>
      <div className="subtitle-wrapper">
        <h4>{subtitle ? subtitle : null}</h4>
      </div>
    </SemanticElement>
  );
};

export { BlogHero };
