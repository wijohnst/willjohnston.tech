import React from 'react';

import { OfferingElement, OfferingHeader } from './Offering.style';
import { Offerings } from '@/pages/Services';

import { motion } from 'framer-motion';
import { ColorValuesLightTheme } from '@/types/app.types';

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
  const animateOffering = (isActive: boolean) => {
    return isActive ? { minHeight: '400px' } : { minHeight: '0px' };
  };

  const animateHeading = (isActive: boolean) => {
    return isActive
      ? {
          color: ColorValuesLightTheme['color-most-prominent'],
        }
      : {
          color: ColorValuesLightTheme['color-least-prominent'],
        };
  };

  return (
    <OfferingElement
      active={isActive}
      animate={animateOffering(isActive)}
      exit={{ minHeight: '0px' }}
      transition={{ duration: 0.5 }}
    >
      <OfferingHeader
        onClick={() => handleClick(heading)}
        animate={animateHeading(isActive)}
        transition={{ duration: 0.5 }}
        role="button"
        active={isActive}
      >
        {heading}
      </OfferingHeader>
      <div>{isActive && children}</div>
    </OfferingElement>
  );
};

export default Offering;

const DefaultContent = (): React.ReactElement => (
  <span>No Content Provided</span>
);
