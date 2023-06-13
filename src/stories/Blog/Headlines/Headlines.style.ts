import styled from 'styled-components';

export const SemanticElement = styled.section<{
  isMobile: boolean;
}>`
  margin: auto 0;
  display: flex;
  margin: 0.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  max-height: 100%;

  .featured-post {
    display: flex;
    justify-content: flex-end;
  }

  .highlight-posts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: scroll;

    .highlight-post-entry {
      margin: 0 0 0.25rem 0.25rem;
    }
  }
`;
