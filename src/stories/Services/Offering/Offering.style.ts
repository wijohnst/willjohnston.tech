import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

import { motion } from 'framer-motion';

export const OfferingElement = styled(motion.li)<{
  active: boolean;
}>`
  display: flex;
  flex-flow: column;
  padding: 0.75rem;
  list-style: none;
  background-color: ${({ active }) =>
    active ? ColorValuesLightTheme['color-least-prominent'] : 'none'};
  color: ${({ active }) =>
    active && ColorValuesLightTheme['color-most-prominent']};

  h2 {
  }
`;

export const OfferingHeader = styled(motion.h2)<{
  active: boolean;
}>`
  text-align: ${({ active }) => (active ? 'left' : 'center')};
  color: ${({ active }) =>
    active
      ? ColorValuesLightTheme['color-most-prominent']
      : ColorValuesLightTheme['color-least-prominent']};
  margin: 0 0 1rem 0;
  word-break: word;
  font-size: 2.5rem;

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    font-size: 1.5rem;
  }
`;
