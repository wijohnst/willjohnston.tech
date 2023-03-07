import styled from 'styled-components';

export const SemanticElement = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;

  min-height: 40rem;
`;

export const RevealSection = styled.div<{
  isActive: boolean;
}>`
  position: relative;
  h1 {
    color: var(--wjt-color-most-prominent);
    font-size: ${({ isActive }) => (isActive ? '2.5rem' : '3rem')};
    transition: all 0.75 s ease-in-out;
  }
  .overlay {
    background-color: var(--wjt-color-least-prominent);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    height: 100%;
    z-index: 10;

    width: ${({ isActive }) => (isActive ? '50%' : '100%')};
    transition: all 0.75s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.05rem 0 0.05rem;
  }

  .underlay {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .underlay-left {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      height: 100%;
    }
    .underlay-right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      height: 100%;
    }
  }
`;
