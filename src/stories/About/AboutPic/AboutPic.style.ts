import { ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  width: fit-content;
  padding: 0.25rem;

  border: solid thin;
  border-color: ${ColorValuesLightTheme['color-least-prominent']};
`;
