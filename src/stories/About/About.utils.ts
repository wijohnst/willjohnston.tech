import { Breakpoints } from '@/types/app.types';
import { About } from '@/stories/About/About.types';

export const getAboutPicDimensionsFromBreakpoint = (
  breakpoint: keyof typeof Breakpoints,
): About.AboutPicDimensions => {
  return About.aboutPicDimensionsMap[breakpoint];
};
