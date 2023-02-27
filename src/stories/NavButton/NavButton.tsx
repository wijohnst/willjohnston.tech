import * as React from 'react';

import './NavButton.style.css';

type Props = {
  /** What should the button say? */
  buttonText: string;
  /** Is the current button selected? */
  isActive: boolean;
};

const NavButton = ({ buttonText, isActive }: Props): React.ReactElement => {
  return (
    <button className={isActive ? 'active-nav-button' : ''}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export { NavButton };
