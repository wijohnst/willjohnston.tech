import { ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';

export const SemanticElement = styled.div`
  .icon-wrapper {
  }

  .icon-fill {
    height: 50px;
    width: 50px;
    background-color: ${ColorValuesLightTheme['color-most-prominent']};
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }

  .nav-reveal {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    padding: 10px;
  }

  .close-button-wrapper {
    width: 25px;
    position: absolute;
  }

  .close-button-fill {
    height: 25px;
    width: 25px;
    background-color: ${ColorValuesLightTheme['color-most-prominent']};
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }
`;
