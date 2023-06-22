import { Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.section<{
  isMobile: boolean;
}>`
  margin: 0.25rem 0 0.25rem 0;
  padding: 0.25rem;
  max-width: 1300px;

  display: grid;
  grid-template-rows: 2fr;

  @media ${Breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${Breakpoints.laptop} {
    grid-template-columns: 2fr 1fr;
  }

  @media ${Breakpoints.laptop_small} {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    display: flex;
    flex-flow: column nowrap;
  }

  .featured-post {
    justify-content: flex-end;
    width: 100%;
  }

  .highlight-posts {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .highlight-post-entry {
      margin: 0.25rem 0 0.25rem 0.25rem;

      :first-child {
        margin-top: 0;
      }

      :last-child {
        margin-bottom: 0;
      }
    }
  }

  @media ${Breakpoints.laptop_small},
    ${Breakpoints.tablet},
    ${Breakpoints.mobile},
    ${Breakpoints.mobile_small} {
    .highlight-posts {
      .highlight-post-entry {
        :first-child {
          margin-top: 0.25rem;
        }

        :last-child {
          margin-bottom: 0.25rem;
        }
      }
    }
  }
`;
