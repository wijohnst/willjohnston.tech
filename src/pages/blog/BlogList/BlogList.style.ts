import { ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  border: solid;
  border-color: ${ColorValuesLightTheme['color-least-prominent']};
  color: ${ColorValuesLightTheme['color-least-prominent']};
  padding: 0.5rem;
  margin: 0.5rem 0 0.5rem 0.25rem;

  h4 {
    margin: 0 0 0.5rem 0;
    align-self: center;
  }
`;
