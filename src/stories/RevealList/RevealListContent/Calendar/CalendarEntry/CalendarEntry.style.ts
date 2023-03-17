import styled from 'styled-components';
import { FillColor } from '@/stories/RevealList/RevealListContent/Calendar/CalendarEntry/CalendarEntry';

import {
  Breakpoints,
  ColorValuesLightTheme,
  ColorValuesThemeAgnostic,
} from '@/types/app.types';

const dashedBackground = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='gray' stroke-width='4' stroke-dasharray='1%2c8' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");`;

const getFillColor = (
  shouldTransform: boolean,
  fillColor: FillColor | null,
  hasContent: boolean,
): FillColor | 'inherit' => {
  if (shouldTransform) {
    if (fillColor && fillColor in ColorValuesThemeAgnostic && !hasContent) {
      //@ts-ignore
      return ColorValuesThemeAgnostic[fillColor];
    } else {
      return 'inherit';
    }
  }
  return 'inherit';
};

const getBackgroundImage = (
  hasContent: boolean,
  fillColor: FillColor | null,
  shouldTransform: boolean,
): string => {
  if (hasContent) {
    return 'none';
  }

  if (!shouldTransform) {
    return dashedBackground;
  }

  if (fillColor && shouldTransform) {
    return 'none';
  }

  return dashedBackground;
};
export const SemanticElement = styled.div<{
  shouldTransform: boolean;
  fillColor: FillColor | null;
  hasContent: boolean;
  transitionTime: number;
}>`
  height: 35px;
  width: 35px;

  @media ${Breakpoints.tablet} {
    height: 30px;
    width: 30px;
  }

  @media ${Breakpoints.mobile} {
    height: 25px;
    width: 25px;
  }

  background-color: ${({ shouldTransform, fillColor, hasContent }) =>
    getFillColor(shouldTransform, fillColor, hasContent)};
  transition-duration: ${({ transitionTime }) => `${transitionTime}s`};
  transition-property: ${({ fillColor }) =>
    fillColor === 'color-accent-brown-gray' ? 'none' : 'all'};

  color: ${ColorValuesLightTheme['color-least-prominent']};

  border-radius: 5px;
  background-image: ${({ hasContent, fillColor, shouldTransform }) =>
    getBackgroundImage(hasContent, fillColor, shouldTransform)};

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .calendar-text {
    font-size: 1rem;
  }
`;
