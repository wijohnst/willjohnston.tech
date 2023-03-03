import * as React from 'react';
import { NavButton } from './NavButton';
import { screen, render } from '../../test-utils';

describe('NavButton unit tests', () => {
  it('Should render the NavButton component', () => {
    render(<NavButton pathname="" buttonText="navbutton" isActive={false} />);
    expect(screen.getByText('NAVBUTTON')).toBeInTheDocument();
  });

  it('Should include the correct aria role', () => {
    render(<NavButton pathname="" buttonText="navbutton" isActive={false} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Active NavButton should include the correct aria-current value', () => {
    render(<NavButton pathname="" buttonText="navbutton" isActive={true} />);
    expect(screen.getByRole('button', { current: 'page' })).toBeInTheDocument();
  });

  it('Inactive NavButton should include the correct aria-current value', () => {
    render(<NavButton pathname="" buttonText="navbutton" isActive={false} />);
    expect(
      screen.getByRole('button', { current: undefined }),
    ).toBeInTheDocument();
  });
});
