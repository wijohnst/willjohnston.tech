import * as React from 'react';

import { SemanticElement } from '@/stories/PageHeadline/PageHeadline.style';

type Props = {
  children: React.ReactNode;
};
const PageHeadline = ({ children }: Props): React.ReactElement => {
  return <SemanticElement>{children}</SemanticElement>;
};

export { PageHeadline };
