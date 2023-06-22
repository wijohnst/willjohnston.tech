import { ColorValuesLightTheme, Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: ${ColorValuesLightTheme['color-least-prominent']};
  color: ${ColorValuesLightTheme['color-most-prominent']};
  overflow: hidden;
  margin: 0 0 0.25rem 0;
  height: 100%;

  @media ${Breakpoints.laptop} {
    max-width: 680px;
  }

  @media ${Breakpoints.tablet} {
    max-width: 475px;
  }

  @media ${Breakpoints.tablet_small} {
    max-width: 420px;
  }

  @media ${Breakpoints.mobile} {
    max-width: 385px;
  }

  @media ${Breakpoints.mobile_small} {
    max-width: 360px;
  }

  .summary-content {
    padding: 0.5rem 0.25rem 0.5rem 1rem;
    min-height: 200px;
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

    span {
      max-width: 95%;
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
`;
