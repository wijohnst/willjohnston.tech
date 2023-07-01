import styled from 'styled-components';
import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';

export const SemanticElement = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;

  color: ${ColorValuesLightTheme['color-most-prominent']};
  background-color: ${ColorValuesLightTheme['color-least-prominent']};

  @media ${Breakpoints.desktop} {
    min-height: 500px;
  }

  .title-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .subtitle-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: flex-end;

    h4 {
      padding: 1rem;
    }
  }
`;
