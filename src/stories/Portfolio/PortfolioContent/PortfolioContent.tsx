import * as React from 'react';
import { PortfolioFrame } from '@/stories/Portfolio/PortfolioFrame/PortfolioFrame';

import { SemanticElement } from '@/stories/Portfolio/PortfolioContent/PortfolioContent.style';
import { DirectionControl } from '@/stories/DirectionControl/DirectionControl';

type Props = {
  portfolioFrames: React.ReactElement<typeof PortfolioFrame>[];
};

const PortfolioContent = ({ portfolioFrames }: Props): React.ReactElement => {
  const [targetPortfolioFrame, setTargetPortfolioFrame] =
    React.useState<React.ReactElement | null>(portfolioFrames[0]);

  const handleControlClick = (direction: 'left' | 'right') => {
    const currentIndex = portfolioFrames.indexOf(
      targetPortfolioFrame as React.ReactElement,
    );

    if (direction === 'left') {
      if (currentIndex === 0) {
        setTargetPortfolioFrame(portfolioFrames[portfolioFrames.length - 1]);
      } else {
        setTargetPortfolioFrame(portfolioFrames[currentIndex - 1]);
      }
    } else {
      if (currentIndex === portfolioFrames.length - 1) {
        setTargetPortfolioFrame(portfolioFrames[0]);
      } else {
        setTargetPortfolioFrame(portfolioFrames[currentIndex + 1]);
      }
    }
  };

  return (
    <SemanticElement>
      <div className="frame-wrapper">{targetPortfolioFrame}</div>
      <div className="controls-wrapper">
        <DirectionControl
          handleLeftClick={() => handleControlClick('left')}
          handleRightClick={() => handleControlClick('right')}
        />
      </div>
    </SemanticElement>
  );
};

export { PortfolioContent };
