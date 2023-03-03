import styled from 'styled-components';
import Link from 'next/link';

export const Element = styled(Link)`
  background: none;
  border: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  border-color: var(--wjt-color-accent);
`;

export const LinkContent = styled.span<{
  isActive: boolean;
}>`
  color: ${({ isActive }) =>
    isActive
      ? `var(--wjt-color-accent)`
      : `var(--wjt-color-stroke-least-prominent)`};
  border-bottom: ${({ isActive }) => (isActive ? `solid thin` : 'none')};

  &:hover {
    color: var(--wjt-color-accent);
  }
`;
