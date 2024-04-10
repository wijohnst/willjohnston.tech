import styled from 'styled-components';

export const SemanticElement = styled.section`
  p {
    text-align: center;

    /* text-align: left; */
    line-height: 1.5;
  }

  .links-wrapper {
    display: flex;
    justify-content: flex-end;
    a {
      margin: 1rem;
      text-transform: capitalize;
      color: inherit;
    }

    a:link {
      color: inherit;
    }

    a:visited {
      color: inherit;
    }
  }
`;
