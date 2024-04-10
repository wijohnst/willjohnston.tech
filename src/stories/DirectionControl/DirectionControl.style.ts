import styled from 'styled-components';

export const SemanticElement = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    :hover {
      transform: scale(1.1);
    }
  }

  div:first-of-type {
    margin: 0 0.5rem 0 0;
    transform: rotate(180deg);

    :hover {
      transform: rotate(180deg) scale(1.1);
    }
  }
`;
