import * as React from 'react';
import Image from 'next/image';

type Props = {
  children?: React.ReactElement;
};

const AppIcon = ({ children }: Props): React.ReactElement => {
  return <div data-testid="app-icon">{children}</div>;
};

export { AppIcon };
