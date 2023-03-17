import * as React from 'react';

import { Element } from '@/stories/AppIcon/AppIcon.style';
import MissingIcon from '@@/public/Icons/missing-icon.svg';

type Props = {
  /** What should be displayed? */
  children?: React.ReactElement;
  /** What should happen in the icon is clicked? */
  handleClick?: () => void;
};

const AppIcon = ({ children, handleClick }: Props): React.ReactElement => {
  return (
    <Element
      data-testid="app-icon"
      onClick={handleClick}
      role={handleClick ? 'button' : 'none'}
    >
      {children ? (
        children
      ) : (
        <MissingIcon role="img" alt="Question mark icon" />
      )}
    </Element>
  );
};

export { AppIcon };
