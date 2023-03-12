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

  it('Should render with the correct aria role', () => {
    render(<AppIcon />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('Should render with the correct aria role', () => {
    render(<AppIcon handleClick={() => {}} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
