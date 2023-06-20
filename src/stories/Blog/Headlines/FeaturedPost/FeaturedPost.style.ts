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

  @media ${Breakpoints.laptop} {
    max-width: 680px;
  }

  @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
    max-width: 475px;
  }

  @media ${(Breakpoints.mobile, Breakpoints.mobile_small)} {
    max-width: 475px;
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
