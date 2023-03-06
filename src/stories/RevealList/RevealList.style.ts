import styled from 'styled-components';

export const SemanticElement = styled.section`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto;
  grid-gap: 1rem;

  min-height: 40rem;
`;

export const RevealSection = styled.div`
  display: flex;

  .heading-wrapper {
    background-color: var(--wjt-color-least-prominent);
    border-radius: 0.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    h1 {
      color: var(--wjt-color-most-prominent);
    }
  }

  .reveal-content {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
