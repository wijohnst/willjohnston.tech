import { ColorValuesLightTheme } from '@/types/app.types';
import Link from 'next/link';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  margin: 0 0 0.5rem 0;

  ul {
    margin: 0.25rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.75rem;
  color: ${ColorValuesLightTheme['color-least-prominent']};
  margin: 0.1rem 0 0 0.5rem;
`;
