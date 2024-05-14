import * as React from 'react';

import { MorphButton as Button } from './MorphButton.style';

type Props = {
  label: string;
  children?: React.ReactNode;
};

const MorphButton = ({ label, children }: Props): React.ReactElement => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    if (isActive) {
      return;
    }

    setIsActive(true);
  };

  return (
    <Button isActive onClick={() => handleClick()} layout>
      {!isActive && <h3 onClick={() => setIsActive(false)}>{label}</h3>}
      {isActive && children}
    </Button>
  );
};

export default MorphButton;
