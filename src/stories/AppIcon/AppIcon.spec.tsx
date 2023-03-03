import * as React from 'react';

import { screen, render } from '@testing-library/react';

import { AppIcon } from './AppIcon';

describe('AppIcon Unit tests', () => {
  it('Should render the AppIcon component', () => {
    render(
      <AppIcon>
        <span>ICON</span>
      </AppIcon>,
    );
    expect(screen.getByTestId('app-icon')).toBeInTheDocument();
  });
});
