import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.section`
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  background-color: ${ColorValuesLightTheme['color-most-prominent']};
  padding: 0 1rem 0 1rem;

  @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
    h1 {
      font-size: 2rem;
    }
  }

  @media ${(Breakpoints.mobile, Breakpoints.mobile_small)} {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media ${Breakpoints.tablet_small} {
    font-size: 1.5rem;
  }
`;

export const RevealListItemContainer = styled.div<{
  isActive: boolean;
}>`
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 1rem 0;
  position: relative;

  .foreground {
    background-color: ${ColorValuesLightTheme['color-least-prominent']};
    width: ${({ isActive }) => (isActive ? '0%' : '100%')};
    color: ${({ isActive }) =>
      isActive
        ? ColorValuesLightTheme['color-least-prominent']
        : ColorValuesLightTheme['color-most-prominent']};
    height: 100%;

    transition: all 1s ease-out;
    transition-delay: 0.5s;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 2;
    border-radius: 5px;

    h1 {
      margin: 1rem;
    }

    @media ${Breakpoints.tablet} {
      width: 100%;
      height: ${({ isActive }) => (isActive ? '0%' : '100%')};
      text-align: center;
    }
  }

  .background {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    @media ${Breakpoints.mobile} {
      flex-flow: column;
      text-align: center;
    }

    .background-left {
      width: 100%;

      @media ${Breakpoints.mobile} {
        margin: 0 0 1rem 0;
      }
    }

    .background-right {
      width: 100%;
    }
  }
`;
