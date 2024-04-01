import styled from 'styled-components';
import { Breakpoints } from '@/types/app.types';

export const SemanticElement = styled.section`
  background-color: var(--wjt-color-least-prominent);
  padding: 0.33rem;

  div {
    background-color: var(--wjt-color-most-prominent);
  }

  .project-title-wrapper {
    background-color: var(--wjt-color-most-prominent);
    margin-bottom: 0.33rem;
    padding: 0.25rem;
  }

  h2 {
    text-align: center;

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      /* font-size: 1.5rem; */
    }
  }

  .project-content-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0.33rem;
    background-color: var(--wjt-color-least-prominent);

    div {
    }

    .content-image-wrapper {
      padding: 0.33rem;
    }

    .content-text-wrapper {
      min-height: 420px;
    }

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      display: flex;
      flex-direction: column;
    }
  }
  .project-tech-stack-wrapper {
    margin: 0.33rem 0 0 0;
    padding: 0.33rem;
  }
`;
