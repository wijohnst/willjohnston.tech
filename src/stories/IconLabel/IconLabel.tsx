import * as React from 'react';

import { SemanticElement } from '@/stories/IconLabel/IconLabel.style';
import { AppIcon } from '../AppIcon/AppIcon';
import MissingIcon from '@@/public/Icons/missing-icon.svg';

type Props = {
  children?: React.ReactElement;
  labelText?: string;
};

const IconLabel = ({
  children,
  labelText = 'Label',
}: Props): React.ReactElement => {
  return (
    <SemanticElement>
      <AppIcon aria-role="button">{children}</AppIcon>
      <label>{labelText}</label>
    </SemanticElement>
  );
};

export default IconLabel;
