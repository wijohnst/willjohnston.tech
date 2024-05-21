import { Breakpoints, ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const OfferingContentWrapper = styled(motion.div)`
  .offering-content {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    border-radius: 0.5rem;

    padding: 1rem;

    h2 {
      text-align: left;

      color: ${ColorValuesLightTheme['color-least-prominent']};
    }

    p {
      line-height: 1.5;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    }

    button {
      width: 33%;
    }

    .form-content {
      padding: 1rem 0.2rem 0.2rem 0.2rem;
      background-color: ${ColorValuesLightTheme['color-most-prominent']};
      border: solid thin ${ColorValuesLightTheme['color-most-prominent']};
      border-radius: 0.25rem;

      h3 {
        color: ${ColorValuesLightTheme['color-least-prominent']};
        margin: 0 0 1rem 0.25rem;
      }

      form {
        background-color: ${ColorValuesLightTheme['color-least-prominent']};

        display: flex;
        flex-flow: column;

        /* padding: 0.5rem 0.5rem 0.5rem 0.5rem; */
        padding: 1rem 1rem 1rem 1rem;

        label {
          margin: 0 0 0.25rem 0;
        }

        label + input {
          margin: 0 0 1rem 0;
        }

        input {
          border-color: ${ColorValuesLightTheme['color-most-prominent']};

          width: clamp(9rem, 100%, 33rem);
        }

        button {
          h4 {
            color: ${ColorValuesLightTheme['color-most-prominent']};
            width: 100%;

            font-size: 1rem;

            margin: 0;
          }
        }
      }
    }
  }

  @media ${Breakpoints.tablet}, ${Breakpoints.tablet_small} {
    .offering-content {
      button {
        width: 100%;
      }
    }
  }

  @media ${Breakpoints.mobile}, ${Breakpoints.mobile_small} {
    .offering-content {
      padding: 0.25rem;

      h2 {
        text-align: center;
        color: red;
      }

      p {
        margin: 0.25rem 0.25rem 0.25rem 0.25rem;
      }

      button {
        width: 100%;
      }

      .form-content {
        background-color: ${ColorValuesLightTheme['color-least-prominent']};
        padding: 0.25rem 0.25rem 0.25rem 0.25rem;

        p:first-of-type {
          margin: 0 0.25rem 0.25rem 0.25rem;
        }

        h3 {
          text-align: center;
          color: ${ColorValuesLightTheme['color-most-prominent']};
          margin: 0.25rem 0 0 0;
        }

        form {
        }
      }
    }
  }
`;
