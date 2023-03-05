require('@testing-library/jest-dom/extend-expect');
/**
 * This is a work-around while Next & SVG work out how to play well together. For now, any SVG that are referenced in a test need to be mocked.
 *
 * Mocking like this will address the error:
 *
 * `Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.`
 */
jest.mock('../../../public/Icons//.svg', () => 'svg');

jest.mock('next/router', () => ({
  push: jest.fn(),
  back: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
