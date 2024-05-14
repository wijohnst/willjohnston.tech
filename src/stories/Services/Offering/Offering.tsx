import React from 'react';

import { OfferingElement } from './Offering.style';
import { Offerings } from '@/pages/Services';

type Props = {
  isActive: boolean;
  heading: Offerings;
  children: React.ReactNode;
  handleClick: (offering: Offerings) => void;
};

const Offering = ({
  isActive,
  heading,
  children = <DefaultContent />,
  handleClick,
}: Props): React.ReactElement => {
  return (
    <OfferingElement isActive={isActive}>
      <h2 onClick={() => handleClick(heading)} role="button">
        {heading}
      </h2>
      <div>{isActive && children}</div>
    </OfferingElement>
  );
};

export default Offering;

const DefaultContent = (): React.ReactElement => (
  <span>No Content Provided</span>
);
