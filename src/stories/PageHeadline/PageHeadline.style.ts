import { ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  background-color: ${ColorValuesLightTheme['color-least-prominent']};
  color: ${ColorValuesLightTheme['color-most-prominent']};
  width: 100%;
`;
