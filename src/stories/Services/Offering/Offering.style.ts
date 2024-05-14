import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const OfferingElement = styled.li<{
  isActive: boolean;
}>`
  display: flex;
  flex-flow: column;
  min-height: ${({ isActive }) => (isActive ? '400px' : '0')};
  padding: 0.75rem;
  list-style: none;
  background-color: ${({ isActive }) =>
    isActive ? ColorValuesLightTheme['color-least-prominent'] : 'none'};
  color: ${({ isActive }) =>
    isActive && ColorValuesLightTheme['color-most-prominent']};
  transition: all 0.75s ease-in-out;

  h2 {
    text-align: ${({ isActive }) => (isActive ? 'left' : 'center')};
    margin: 0 0 1rem 0;
    word-break: word;
    font-size: 2.5rem;

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      font-size: 1.5rem;
    }
  }
`;
