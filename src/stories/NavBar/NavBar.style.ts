import styled from 'styled-components';
import { device } from '@/styles/mediaQueries';

export const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;

  border-bottom: solid thin;
  border-color: var(--wjt-color-stroke-least-prominent);
`;

export const IconWrapper = styled.div`
  @media ${device.laptopL} {
    width: 75px;
  }

  @media ${device.tablet} {
    width: 50px;
  }
`;
