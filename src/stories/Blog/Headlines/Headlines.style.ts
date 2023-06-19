import styled from 'styled-components';

export const SemanticElement = styled.section<{
  isMobile: boolean;
}>`
  margin: 0.25rem 0 0.25rem 0;
  display: ${({ isMobile }) => (isMobile ? 'flex' : 'grid')};
  flex-flow: column nowrap;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  overflow-x: ${({ isMobile }) => (isMobile ? 'scroll' : 'hidden')};
  overflow-y: hidden;
  max-height: ${({ isMobile }) => (isMobile ? '75vh' : '100%')};
  max-width: ${({ isMobile }) => (isMobile ? '100%' : '75vw')};
  background-color: lightblue;
  padding: 0.25rem;

  .featured-post {
    display: ${({ isMobile }) => (isMobile ? 'block' : 'flex')};
    justify-content: flex-end;
    width: 100%;
  }

  .highlight-posts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-x: ${({ isMobile }) => (isMobile ? 'hidden' : 'scroll')};
    height: 100%;

    .highlight-post-entry {
      margin: ${({ isMobile }) =>
        isMobile ? '0.11rem 0 0.1rem 0' : '0 0 0.25rem 0.25rem'};

      :first-child {
        margin: ${({ isMobile }) => (isMobile ? '0.25rem 0 0.1rem 0' : '')};
      }
    }

    :last-child {
      margin-bottom: 0;
    }
  }
`;
