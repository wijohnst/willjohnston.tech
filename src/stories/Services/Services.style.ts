import { ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const ServicesWrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;

  h1 {
    margin: 0.25rem 0 0.25rem 1rem;
  }

  ul {
    margin: 1rem 0 0 0;
    width: 100%;
  }

  li {
    cursor: pointer;

    p {
    }

    button {
      background-color: transparent;
      border: solid ${ColorValuesLightTheme['color-most-prominent']};
      align-self: center;
      color: ${ColorValuesLightTheme['color-most-prominent']};
      border-radius: 0.25rem;
      padding: 0.5rem;
      cursor: pointer;

      h3 {
        font-size: 1rem;
      }
    }
  }
`;
