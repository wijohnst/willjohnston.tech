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
  }

  .close-button-wrapper {
    width: 25px;
  }
`;
