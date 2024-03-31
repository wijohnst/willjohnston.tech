import * as React from 'react';

import { SemanticElement } from '@/stories/IconLabel/IconLabel.style';
import { AppIcon } from '../AppIcon/AppIcon';

type Props = {
  children?: React.ReactElement;
  labelText?: string;
  handleClick?: () => void;
};

const IconLabel = ({
  children,
  labelText = 'Label',
  handleClick,
}: Props): React.ReactElement => {
  return (
    <SemanticElement>
      <div className="icon-wrapper">
        <AppIcon aria-role="button" handleClick={handleClick}>
          {children}
        </AppIcon>
      </div>
      <label>{labelText}</label>
    </SemanticElement>
  );
};

export default IconLabel;
