import * as React from 'react';
import { Project } from '@/stories/Project/Project';
import { portfolio } from '@/stories/Portfolio';
import useGetMediaQuery from '@/hooks/useGetMediaQuery';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';
import { SemanticElement } from './Portfolio.style';

export enum ScrollActions {
  'INCREMENT',
  'DECREMENT',
}

interface Props {}

const Portfolio = ({}: Props) => {
  const breakpoint = useGetMediaQuery();

  const [projectIndex, setProjectIndex] = React.useState(0);

  const getMatchingBreakpoint = (
    breakpoint: string,
  ): 'desktop' | 'tablet' | 'mobile' => {
    switch (breakpoint) {
      case 'desktop':
        return 'desktop';
      case 'laptop':
      case 'laptop_small':
      case 'tablet':
        return 'tablet';
      case 'tablet_small':
      case 'mobile':
      case 'mobile_small':
        return 'mobile';
      default:
        return 'mobile';
    }
  };

  /**
   * Reducer function to handle scrolling through projects
   *
   * @param {ScrollActions} action
   * @returns {void}
   */
  const handleScrollProject = (action: ScrollActions) => {
    switch (action) {
      case ScrollActions.INCREMENT:
        setProjectIndex((prevIndex) => {
          if (prevIndex === portfolio.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        });
        break;
      case ScrollActions.DECREMENT:
        setProjectIndex((prevIndex) => {
          if (prevIndex === 0) {
            return portfolio.length - 1;
          }
          return prevIndex - 1;
        });
        break;
      default:
        break;
    }
  };

  return (
    <SemanticElement>
      <PageHeadline>
        <h1>Portfolio</h1>
      </PageHeadline>
      <Project
        project={portfolio[projectIndex]}
        breakpoint={getMatchingBreakpoint(breakpoint)}
        handleScrollProject={handleScrollProject}
      />
    </SemanticElement>
  );
};

export default Portfolio;
