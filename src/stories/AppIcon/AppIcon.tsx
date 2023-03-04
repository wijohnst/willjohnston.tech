import * as React from 'react';

import MissingIcon from '../../../public/Icons/missing-icon.svg';

type Props = {
  /** What should be displayed? */
  children?: React.ReactElement;
  /** What should happen in the icon is clicked? */
  handleClick?: () => void;
};

const AppIcon = ({ children, handleClick }: Props): React.ReactElement => {
  return (
    <div
      data-testid="app-icon"
      onClick={handleClick}
      role={handleClick ? 'button' : 'none'}
    >
      {children ? (
        children
      ) : (
        <MissingIcon role="image" alt="Question mark i con" />
      )}
    </div>
  );
};

export { AppIcon };
