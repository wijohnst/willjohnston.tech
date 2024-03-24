import * as React from 'react';
import { PortfolioFrame } from '@/stories/Portfolio/PortfolioFrame/PortfolioFrame';

import { SemanticElement } from '@/stories/Portfolio/PortfolioContent/PortfolioContent.style';

type Props = {
  portfolioFrames: React.ReactElement<typeof PortfolioFrame>[];
};

const PortfolioContent = ({ portfolioFrames }: Props): React.ReactElement => {
  let targetIndex = 0;

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const targetPortfolioFrame = portfolioFrames[targetIndex];

  const handleScroll = () => {
    const scrollPosition = Math.abs(
      wrapperRef?.current?.getBoundingClientRect()?.top ||
        //@ts-ignore
        1 - wrapperRef?.current?.offsetTop ||
        0,
    );
    console.log(scrollPosition);
  };

  React.useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SemanticElement ref={wrapperRef}>{targetPortfolioFrame}</SemanticElement>
  );
};

export { PortfolioContent };
