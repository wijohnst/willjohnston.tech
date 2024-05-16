import * as React from 'react';
import { Breakpoints } from '@/types/app.types';

/**
 * Accepts an array of Breakpoints and returns the key of the breakpoint that is currently active
 *
 * @param defaultBreakpoint {keyof typeof Breakpoints}
 * @returns {Array<keyof typeof Breakpoints>}
 */
const useGetMediaQuery = (
  defaultBreakpoint?: keyof typeof Breakpoints,
  breakpointsToCheck: Array<keyof typeof Breakpoints> = Object.keys(
    Breakpoints,
  ) as Array<keyof typeof Breakpoints>,
): keyof typeof Breakpoints => {
  const getMatchingBreakpoint = (
    breakpointsToCheck: Array<keyof typeof Breakpoints>,
  ): keyof typeof Breakpoints => {
    if (typeof window !== 'undefined') {
      const match = breakpointsToCheck.find(
        (breakpoint) => window.matchMedia(Breakpoints[breakpoint]).matches,
      );
      if (match) return match;
    }

    return defaultBreakpoint ?? 'mobile';
  };

  const [matchingBreakpoint, setMatchingBreakpoint] = React.useState<
    keyof typeof Breakpoints
  >(getMatchingBreakpoint(breakpointsToCheck));

  React.useEffect(() => {
    const handleResize = () => {
      setMatchingBreakpoint(getMatchingBreakpoint(breakpointsToCheck));
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  });

  return matchingBreakpoint;
};

export default useGetMediaQuery;
