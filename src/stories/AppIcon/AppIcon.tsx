import * as React from 'react';

import MissingIcon from '../../../public/Icons/missing-icon.svg';

type Props = {
  /** What should be displayed? */
  children?: React.ReactElement;
};

const AppIcon = ({ children }: Props): React.ReactElement => {
  return (
    <div data-testid="app-icon">
      {children ? (
        children
      ) : (
        <MissingIcon role="image" alt="Question mark icon" />
      )}
    </div>
  );
};

export { AppIcon };
