require('@testing-library/jest-dom/extend-expect');
/**
 * This is a work-around while Next & SVG work out how to play well together. For now, any SVG that are referenced in a test need to be mocked.
 *
 * Mocking like this will address the error:
 *
 * `Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.`
 */
jest.mock('../../../public/Icons//.svg', () => 'svg');
