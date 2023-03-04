import { PropsWithChildren } from 'react';

export * from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';
interface ExtendedRenderOptions {}

export function renderWithProviders(
  ui: React.ReactElement,
  {}: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <>{children}</>;
  }
}
