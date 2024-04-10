import { Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  text-align: justify;
`;

export const P = styled.p`
  line-height: 1.75;

  @media ${Breakpoints.tablet},
    ${Breakpoints.tablet_small},
    ${Breakpoints.mobile},
    ${Breakpoints.mobile_small} {
    padding: 0.5rem;
  }
`;

export const Quote = styled.blockquote`
  font-size: 1.5rem;
  border-left: 0.25rem solid var(--wjt-color-stroke-least-prominent);
  padding: 0 0 0 0.75rem;
  margin: 0.25rem 0 0.25rem 1rem;
  font-style: italic;
  line-height: 2;

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    padding: 0 0 0 0.25rem;
  }
`;
