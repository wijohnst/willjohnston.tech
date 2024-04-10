import styled from 'styled-components';
import { Breakpoints } from '@/types/app.types';

export const SemanticElement = styled.section`
  h1 {
    margin: 0.25rem 0 0.25rem 1rem;

    @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
      margin: 0;
      text-align: center;
    }
  }
`;
