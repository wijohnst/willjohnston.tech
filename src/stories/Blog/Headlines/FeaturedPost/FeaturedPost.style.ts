import { ColorValuesLightTheme, Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div<{
  maxWidth: number;
}>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  background-color: ${ColorValuesLightTheme['color-least-prominent']};
  color: ${ColorValuesLightTheme['color-most-prominent']};

  margin: 0 0 0.25rem 0;

  overflow: hidden;

  height: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};

  .summary-content {
    padding: 0.5rem 0.25rem 0.5rem 1rem;
    min-height: 200px;
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

    @media ${Breakpoints.tablet_small},
      ${Breakpoints.mobile},
      ${Breakpoints.mobile_small} {
      h5 {
        display: none;
      }

      h4 {
        margin: 0.25rem 0 0.25rem 0;
      }
    }

    span {
      max-width: 95%;
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
`;
