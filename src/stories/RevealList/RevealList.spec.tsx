import * as React from 'react';
import { screen, render } from '@/test-utils';

import { RevealList } from '@/stories/RevealList/RevealList';
import { getHeadingString } from '@/stories/RevealList/RevealList.utils';

describe(`RevealList`, () => {
  describe('Render Tests', () => {
    it.skip('Should render the component', () => {
      render(
        <RevealList activeHeading={undefined} handleHeadingChange={() => {}} />,
      );
      expect(screen.getByTestId('reveal-list')).toBeInTheDocument();
    });
  });

  describe('Utility Tests', () => {
    it('Should return the correct heading string', () => {
      const result = getHeadingString('test', 'half');
      expect(result).toBe('test');
    });

    it('Should return the correct heading string', () => {
      const result = getHeadingString('test', 'full');
      expect(result).toBe('[test]');
    });
  });
});
