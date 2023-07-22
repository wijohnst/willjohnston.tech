import { Breakpoints } from '@/types/app.types';

export namespace About {
  export type AboutPicDimensions = {
    height: number;
    width: number;
  };

  export const aboutPicDimensionsMap: Record<
    keyof typeof Breakpoints,
    AboutPicDimensions
  > = {
    desktop: {
      height: 292,
      width: 292,
    },
    laptop: {
      height: 292,
      width: 292,
    },
    laptop_small: {
      height: 292,
      width: 292,
    },
    tablet: {
      height: 222,
      width: 222,
    },
    tablet_small: {
      height: 222,
      width: 222,
    },
    mobile: {
      height: 183,
      width: 183,
    },
    mobile_small: {
      height: 183,
      width: 183,
    },
  };
}
