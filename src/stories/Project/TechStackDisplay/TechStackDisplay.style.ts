import styled from 'styled-components';

export const SemanticElement = styled.div`
  .details {
    border-color: var(--wjt-color-least-prominent);
    border: solid thin;

    .heading-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        text-align: center;
      }
    }

    .text-wrapper {
      padding: 0.5rem;
      height: 200px;
      overflow-y: scroll;
    }
  }

  .controls {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 0.3rem 0 0 0;

    .icon-container {
      margin: 0 0.5rem 0 0;
    }

    svg {
      height: 50px;
      width: 50px;
    }
  }
`;
