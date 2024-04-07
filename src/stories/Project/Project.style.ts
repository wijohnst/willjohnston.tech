import styled from 'styled-components';
import { Breakpoints } from '@/types/app.types';

export const SemanticElement = styled.section`
  padding: 0.33rem;

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    background-color: inherit;
  }

  div {
    background-color: var(--wjt-color-most-prominent);
  }

  .project-title-wrapper {
    background-color: var(--wjt-color-most-prominent);
    padding: 0.25rem;
  }

  h2 {
    text-align: center;
  }

  .project-content-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;

    div:has(img) {
      display: flex;
      justify-content: center;
      align-items: center;

      overflow-x: hidden;

      img {
        border: solid thin var(--wjt-color-stroke-least-prominent);
        padding: 0.25rem;
      }
    }

    .content-image-wrapper {
      padding: 1.5rem;

      @media ${Breakpoints.mobile_small} {
        padding: 0;
      }
    }

    .content-text-wrapper {
      min-height: 420px;

      h2 {
        margin: inherit;
        text-align: inherit;
        margin: 0 0 1rem 0;
      }

      @media ${Breakpoints.desktop},
        ${Breakpoints.laptop},
        ${Breakpoints.laptop_small} {
        padding: 1rem 5rem 0 0;
      }

      @media ${Breakpoints.tablet},
        ${Breakpoints.tablet_small},
        ${Breakpoints.mobile},
        ${Breakpoints.mobile_small} {
        padding: 1rem 0.5rem 0 0;
      }
    }

    @media ${Breakpoints.tablet},
      ${Breakpoints.tablet_small},
      ${Breakpoints.mobile},
      ${Breakpoints.mobile_small} {
      display: flex;
      flex-direction: column;
    }
  }
  .project-tech-stack-wrapper {
    padding: 0rem 0rem 0 1.5rem;

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      padding: 0.25rem 1rem 1rem 1rem;
    }

    h3 {
      margin: 0 0 0.5rem 0;
      text-align: center;
    }
  }
`;
