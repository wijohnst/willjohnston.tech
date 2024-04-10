import styled from 'styled-components';
import { Breakpoints } from '@/types/app.types';

export const SemanticElement = styled.section`
  padding: 0.33rem;

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    background-color: inherit;
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
    grid-template-columns: auto 1fr auto;

    div:has(img) {
      display: flex;
      justify-content: center;
      align-items: center;

      overflow-x: hidden;

      img {
        border: solid thin var(--wjt-color-stroke-least-prominent);
        padding: 0.25rem;
      }

      @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
        img {
          border: none;
        }
      }
    }

    .content-controls-wrapper {
      padding: 1rem 2rem 0 0;

      nav {
        margin: 1rem 0 0 0;
      }

      span {
      }

      @media ${Breakpoints.tablet},
        ${Breakpoints.tablet_small},
        ${Breakpoints.mobile},
        ${Breakpoints.mobile_small} {
        display: none;
      }
    }

    .content-image-wrapper {
      @media ${Breakpoints.desktop}, ${Breakpoints.laptop} {
        padding: 1.5rem;
      }

      @media ${Breakpoints.mobile_small} {
        padding: 0;
      }
    }

    .content-text-wrapper {
      min-height: 420px;

      .header-controls-wrapper {
        display: flex;
        align-items: center;
        margin: 0 0 1rem 0;

        @media ${Breakpoints.tablet},
          ${Breakpoints.tablet_small},
          ${Breakpoints.mobile},
          ${Breakpoints.mobile_small} {
          flex-direction: column;
        }
      }

      .header-controls {
        display: flex;
        height: 50px;

        a {
          height: 50px;
          width: 50px;
        }

        svg {
          margin: 0 0.25rem 0 0.25rem;
          cursor: pointer;
        }

        @media ${Breakpoints.tablet},
          ${Breakpoints.tablet_small},
          ${Breakpoints.mobile},
          ${Breakpoints.mobile_small} {
          margin: 0.5rem 0 0 0;
        }
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

    @media ${Breakpoints.laptop},
      ${Breakpoints.laptop_small},
      ${Breakpoints.tablet},
      ${Breakpoints.tablet_small},
      ${Breakpoints.mobile},
      ${Breakpoints.mobile_small} {
      display: flex;
      flex-direction: column;
    }
  }
  .project-tech-stack-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      margin: 0.5rem 0 0 0;
    }

    h3 {
      margin: 0 0 0.5rem 0;
      text-align: center;
    }
  }
`;
