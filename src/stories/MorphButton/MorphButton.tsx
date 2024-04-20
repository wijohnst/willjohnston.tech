import * as React from 'react';

import { MorphButton as Button } from './MorphButton.style';

type Props = {
  label: string;
  children?: React.ReactNode;
};

const MorphButton = ({ label, children }: Props): React.ReactElement => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Button isActive onClick={() => setIsActive(!isActive)}>
      {!isActive && <h3>{label}</h3>}
      {isActive && children}
    </Button>
  );
};

export default MorphButton;
