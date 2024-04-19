import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const OfferingElement = styled.li<{
  isActive: boolean;
}>`
  display: flex;
  flex-flow: column;
  min-height: ${({ isActive }) => (isActive ? '200px' : '0')};
  border-radius: 10px;
  padding: 0.75rem;
  list-style: none;
  background-color: ${({ isActive }) =>
    isActive ? ColorValuesLightTheme['color-least-prominent'] : 'none'};
  color: ${({ isActive }) =>
    isActive && ColorValuesLightTheme['color-most-prominent']};
  transition: all 0.5s ease-in-out;

  max-width: 500px;

  h2 {
    text-align: center;
    margin: 0 0 1rem 0;
    word-break: word;

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      font-size: 1.5rem;
    }
  }
`;
