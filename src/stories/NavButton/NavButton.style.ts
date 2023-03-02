import styled from 'styled-components';

export const Element = styled.button<{
  isActive: boolean;
}>`
  background: none;
  border: none;
  text-decoration: none;
  padding: 0;
  margin: 0;

  /* &:hover {
    color: var(--wjt-color-accent);
  } */

  border-bottom: ${({ isActive }) => (isActive ? 'solid thin' : 'none')};
  border-color: ${({ isActive }) =>
    isActive ? 'var(--wjt-color-stroke-least-prominent)' : 'none'};
  color: ${({ isActive }) =>
    isActive ? 'var(--wjt-color-accent)' : 'inherit'};
`;
