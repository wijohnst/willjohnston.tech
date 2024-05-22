import styled from 'styled-components';

import { motion } from 'framer-motion';
import { ColorValuesLightTheme } from '@/types/app.types';

export const MorphButton = styled(motion.button)<{
  isActive: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  background-color: transparent;
  line-height: 1;
  border-radius: var(--wjt-border-radius-light);
  padding: var(--wjt-padding-medium);

  cursor: pointer;

  border: solid var(--wjt-stroke-light);
  border-color: ${ColorValuesLightTheme['color-most-prominent']};

  h3 {
    font-size: 1rem;
    color: ${ColorValuesLightTheme['color-most-prominent']};
  }
`;
