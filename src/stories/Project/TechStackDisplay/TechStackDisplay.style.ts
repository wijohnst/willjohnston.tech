import { Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  display: flex;
  flex-flow: column;
  width: 75%;

  @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
    flex-flow: column nowrap;
    width: 100%;
  }

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    flex-flow: column wrap;
    width: 100%;
  }

  .details {
    border-color: var(--wjt-color-least-prominent);
    border: solid thin;
    flex-grow: 1;

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      border: none;
    }

    .heading-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      h4 {
        text-align: center;
        background-color: var(--wjt-color-least-prominent);
      }
    }

    .text-wrapper {
      text-align: center;
    }
  }

  .controls {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    min-width: 25%;
    padding: 1rem;

    .icon-container {
      margin: 0 0.5rem 0 0;
    }

    svg {
      height: 50px;
      width: 50px;
    }
  }
`;
