import * as React from 'react';

import { SemanticElement } from '@/stories/DirectionControl/DirectionControl.style';
import { AppIcon } from '../AppIcon/AppIcon';
import CaretIcon from '@@/public/Icons/caret-icon.svg';

type Props = {
  handleLeftClick: () => void;
  handleRightClick: () => void;
};

const DirectionControl = ({
  handleLeftClick,
  handleRightClick,
}: Props): React.ReactElement => {
  return (
    <SemanticElement>
      <button onClick={handleLeftClick}>
        <AppIcon aria-role="button">
          <CaretIcon />
        </AppIcon>
      </button>
      <button onClick={handleRightClick}>
        <AppIcon>
          <CaretIcon />
        </AppIcon>
      </button>
    </SemanticElement>
  );
};

export { DirectionControl };
