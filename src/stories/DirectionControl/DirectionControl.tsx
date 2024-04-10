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
      <AppIcon aria-role="button" handleClick={handleLeftClick}>
        <CaretIcon />
      </AppIcon>
      <AppIcon handleClick={handleRightClick}>
        <CaretIcon />
      </AppIcon>
    </SemanticElement>
  );
};

export { DirectionControl };
