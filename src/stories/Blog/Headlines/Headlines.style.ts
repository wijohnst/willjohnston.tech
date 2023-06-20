import { Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.section<{
  isMobile: boolean;
}>`
  margin: 0.25rem 0 0.25rem 0;
  background-color: lightblue;
  padding: 0.25rem;
  display: flex;
  flex-flow: column nowrap;

  @media ${Breakpoints.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: 75vw;
  }

  @media ${Breakpoints.laptop} {
    max-width: 680px;
  }

  @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
    max-width: 475px;
  }

  .featured-post {
    display: ${({ isMobile }) => (isMobile ? 'block' : 'flex')};
    justify-content: flex-end;
    width: 100%;
  }

  .highlight-posts {
    display: flex;
    flex-direction: column;
    /* overflow-x: ${({ isMobile }) => (isMobile ? 'hidden' : 'scroll')}; */
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
