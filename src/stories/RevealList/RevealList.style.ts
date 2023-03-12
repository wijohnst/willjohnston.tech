import styled from 'styled-components';
import * as React from 'react';

import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';

export const SemanticElement = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  /* margin: 2rem 0 2rem 0; */

  overflow-y: auto;

  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  @media ${Breakpoints.desktop} {
    grid-gap: 2.5rem;
  }

  @media ${Breakpoints.laptop} {
    /* margin: 0.5rem 0 0.5rem 0; */
    /* grid-gap: 1rem; */
  }

  @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
    grid-gap: 0.75rem;
    margin: 0 0 0 0;
  }
`;

export const RevealSection = styled.div<{
  isActive: boolean;
}>`
  position: relative;
  min-height: 35rem;
  scroll-snap-stop: always;
  scroll-snap-align: start;
  /* border-top: ${({ isActive }) => (isActive ? 'solid thin' : 'none')}; */
  /* border-bottom: ${({ isActive }) => (isActive ? 'solid thin' : 'none')}; */

  @media ${Breakpoints.desktop} {
    grid-gap: 2.5rem;
    min-height: 35rem;
  }

  @media ${Breakpoints.laptop} {
    grid-gap: 1rem;
    min-height: 25rem;
  }

  @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
    min-height: 20rem;
  }

  h1 {
    color: ${({ isActive }) =>
      isActive
        ? ColorValuesLightTheme['color-least-prominent']
        : ColorValuesLightTheme['color-most-prominent']};

    @media ${Breakpoints.tablet_small} {
      font-size: 2rem;
    }
    @media ${Breakpoints.tablet} {
      font-size: 2rem;
    }
  }
  .overlay {
    background-color: ${({ isActive }) =>
      isActive ? 'none' : ColorValuesLightTheme['color-least-prominent']};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 10;

    width: ${({ isActive }) => (isActive ? '0%' : '100%')};
    transition: all 0.75s ease-in-out;
    transition-delay: 500ms;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.05rem 0 0.05rem;

    border-radius: 5px;
  }

  .underlay {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media ${Breakpoints.tablet} {
      /* flex-flow: column nowrap; */
    }

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .underlay-left {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      height: 100%;
    }
    .underlay-right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      height: 100%;
    }
  }
`;
