import { Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;

  border-bottom: solid thin;
  border-color: var(--wjt-color-stroke-least-prominent);
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: var(--wjt-color-most-prominent);
`;

export const IconWrapper = styled.div`
  width: 75px;

  @media ${Breakpoints.laptop}, ${Breakpoints.laptop_small} {
    width: 60px;
  }

  @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
    width: 50px;
  }

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    width: 0;
  }
`;
