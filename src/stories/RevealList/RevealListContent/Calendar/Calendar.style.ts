import { Breakpoints } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 40px);
  grid-template-columns: repeat(7, 40px);
  grid-gap: 12px;

  @media ${Breakpoints.tablet} {
    grid-template-rows: repeat(5, 30px);
    grid-template-columns: repeat(7, 30px);
    grid-gap: 12px;
  }
  @media ${Breakpoints.mobile} {
    grid-template-rows: repeat(5, 25px);
    grid-template-columns: repeat(7, 25px);
    grid-gap: 12px;
  }
`;

export const CalendarEntry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
  width: 35px;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='black' stroke-width='4' stroke-dasharray='1.25%2c10' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 5px;
`;
