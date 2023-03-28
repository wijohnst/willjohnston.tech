import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${ColorValuesLightTheme['color-least-prominent']};
  color: ${ColorValuesLightTheme['color-most-prominent']};
  max-width: 675px;

  @media ${Breakpoints.tablet} {
    max-width: 331px;
    position: relative;
  }

  @media ${Breakpoints.mobile} {
    max-width: 378px;

    img {
      padding: 0.25rem;
    }
  }

  .summary-content {
    width: 100%;

    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.5rem;

    .highlight-header {
      width: 100%;
      padding: 0 0 2rem 0;
    }

    .title-container {
      width: 100%;
      height: 100%;
      line-height: 1.5;
    }

    @media ${Breakpoints.tablet} {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 0;

      .highlight-header {
        height: 50%;

        h6 {
          width: 100%;
          padding: 0.25rem 0 0.25rem 0.25rem;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }

      .title-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        max-height: 50%;

        h4 {
          font-size: 1.25rem;
          padding: 0.25rem 0 0.25rem 0.25rem;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }

    @media ${Breakpoints.mobile} {
      position: inherit;
      .highlight-header {
        h6 {
          padding: 0.25rem 0 0 0;
          background-color: transparent;
          font-size: 0.5rem;
        }
      }

      .title-container {
        h4 {
          padding: 0;
          font-size: 0.5rem;
          background-color: transparent;
          line-height: 1;
        }
      }
    }
  }
`;