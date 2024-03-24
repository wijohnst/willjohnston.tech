import * as React from 'react';
import { SemanticElement } from '@/stories/Portfolio/PortfolioContent/PortfolioContent.style';

type Props = {
  children: React.ReactNode;
};

const PortfolioFrame = ({ children }: Props): React.ReactElement => {
  return <SemanticElement>{children}</SemanticElement>;
};

export { PortfolioFrame };
