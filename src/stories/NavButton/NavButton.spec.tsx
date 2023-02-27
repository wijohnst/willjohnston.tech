import * as React from 'react';
import { NavButton } from './NavButton';
import { screen, render } from '../../test-utils';

describe('NavButton unit tests', () => {
  it('Should render the NavButton component', () => {
    render(<NavButton buttonText="navbutton" isActive={false} />);
    expect(screen.getByText('NAVBUTTON')).toBeInTheDocument();
  });

  it('Should render the active NavButton', () => {
    render(<NavButton buttonText="navbutton" isActive={true} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
