import * as React from 'react';
import { screen, render } from '../../test-utils';

import { NavBar } from './NavBar';

describe('NavBar component unit tests', () => {
  it('Should render the NavBar component', () => {
    render(<NavBar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
