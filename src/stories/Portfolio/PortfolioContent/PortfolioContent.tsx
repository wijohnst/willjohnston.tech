import * as React from 'react';
import { PortfolioFrame } from '@/stories/Portfolio/PortfolioFrame/PortfolioFrame';

import { SemanticElement } from '@/stories/Portfolio/PortfolioContent/PortfolioContent.style';

type Props = {
  portfolioFrames: React.ReactElement<typeof PortfolioFrame>[];
};

const PortfolioContent = ({ portfolioFrames }: Props): React.ReactElement => {
  const [targetPortfolioFrame, _setTargetPortfolioFrame] =
    React.useState<React.ReactElement | null>(portfolioFrames[0]);

  return <SemanticElement>{targetPortfolioFrame}</SemanticElement>;
};

export { PortfolioContent };
