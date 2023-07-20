import * as React from 'react';

import { SemanticElement } from '@/stories/HamburgerMenu/HamburgerMenu.style';
import { AppIcon } from '@/stories/AppIcon/AppIcon';
import HamburgerIcon from '@@/public/Icons/hamburger-icon.svg';
import CloseIcon from '@@/public/Icons/close-icon.svg';

type Props = {
  children: React.ReactElement;
};
const HamburgerMenu = ({ children }: Props): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SemanticElement>
      {!isOpen && (
        <AppIcon handleClick={() => setIsOpen(true)}>
          <HamburgerIcon />
        </AppIcon>
      )}
      {isOpen && (
        <div className="nav-reveal">
          <div className="close-button-wrapper">
            <AppIcon handleClick={() => setIsOpen(false)}>
              <CloseIcon />
            </AppIcon>
          </div>
          {children}
        </div>
      )}
    </SemanticElement>
  );
};

export { HamburgerMenu };
