import * as React from 'react';
import Project from '@/stories/Project/Project';
import { portfolio } from '@/stories/Portfolio';
import useGetMediaQuery from '@/hooks/useGetMediaQuery/useGetMediaQuery';

interface Props {}

const Portfolio = ({}: Props) => {
  const breakpoint = useGetMediaQuery();

  const getMatchingBreakpoint = (
    breakpoint: string,
  ): 'desktop' | 'tablet' | 'mobile' => {
    switch (breakpoint) {
      case 'desktop':
      case 'laptop':
      case 'laptop_small':
        return 'desktop';
      case 'tablet':
      case 'tablet_small':
        return 'tablet';
      case 'mobile':
      case 'mobile_small':
        return 'mobile';
      default:
        return 'mobile';
    }
  };

  return (
    <Project
      title="Testing"
      project={portfolio[0]}
      breakpoint={getMatchingBreakpoint(breakpoint)}
    />
  );
};

export default Portfolio;
