import { getAboutPicDimensionsFromBreakpoint } from './About.utils';

describe('About.utils unit tests', () => {
  describe('getAboutPicDimensionsFromBreakpoint', () => {
    it('Should return the correct dimensions', () => {
      expect(getAboutPicDimensionsFromBreakpoint('desktop')).toEqual({
        height: 292,
        width: 292,
      });
    });
  });
});
