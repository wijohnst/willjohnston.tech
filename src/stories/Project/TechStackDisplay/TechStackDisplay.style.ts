import { Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  display: flex;
  /* align-items: center; */

  @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
    flex-flow: column nowrap;
  }

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    flex-flow: column wrap;
  }

  .details {
    border-color: var(--wjt-color-least-prominent);
    border: solid thin;
    width: 100%;

    .heading-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        text-align: center;
      }
    }

    .text-wrapper {
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
