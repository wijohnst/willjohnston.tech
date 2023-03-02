import * as React from 'react';
import { Nav } from './NavBar.style';

type Props = {};

const NavBar = ({}: Props): React.ReactElement => {
  return <Nav className="nav-bar">NavBar Works!</Nav>;
};

export { NavBar };
