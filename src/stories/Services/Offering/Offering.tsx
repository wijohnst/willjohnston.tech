import React from 'react';

import { OfferingElement } from './Offering.style';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';

type Props = {
  isActive: boolean;
  heading: string;
  activeContent: React.ReactElement;
};

const Offering = ({
  isActive,
  heading,
  activeContent = <DefaultContent />,
}: Props): React.ReactElement => {
  return (
    <OfferingElement isActive={isActive}>
      <h2>{heading}</h2>
      {isActive && activeContent}
    </OfferingElement>
  );
};

export default Offering;

const DefaultContent = (): React.ReactElement => (
  <span>No Content Provided</span>
);
