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

  @media ${Breakpoints.laptop}, ${Breakpoints.laptop_small} {
    min-height: 350px;
  }

  @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
    min-height: 300px;
  }

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    text-align: center;
  }

  .title-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
      h2 {
        font-size: 1.75rem;
      }
    }

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      h2 {
        font-size: 1.5rem;
      }
    }
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

    @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
      h4 {
        font-size: 1rem;
        padding: 0.75rem;
      }
    }

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      justify-content: center;
      align-items: center;

      h4 {
        font-size: 0.75rem;
        padding: 0;
      }
    }
  }
`;
