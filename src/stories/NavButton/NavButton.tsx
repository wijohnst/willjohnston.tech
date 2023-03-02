import * as React from 'react';
import { Element } from './NavButton.style';

type Props = {
  /** What should the button say? */
  buttonText: string;
  /** Is the current button selected? */
  isActive: boolean;
};

const NavButton = ({ buttonText, isActive }: Props): React.ReactElement => {
  return <Element isActive={isActive}>{buttonText.toUpperCase()}</Element>;
};

export { NavButton };
