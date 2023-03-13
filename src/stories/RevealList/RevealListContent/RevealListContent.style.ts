import { ColorValuesLightTheme } from '@/types/app.types';
import styled from 'styled-components';
import { Breakpoints } from '@/types/app.types';

export const SemanticElement = styled.section`
  .highlight-text {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--wjt-color-accent);

    @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
      font-size: 1.5rem;
    }
  }

  .icon-wrapper {
    width: 75px;
    margin: 0.5rem 0.25rem 0.5rem 0.25rem;

    @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
      width: 50px;
      margin: 0.5rem 0.05rem 0.5rem 0.05rem;
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const WebDevHeadingContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const BodyContentContainer = styled.div`
  font-size: 2.5rem;
  color: var(--wjt-color-least-prominent);

  @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
    font-size: 1.5rem;
  }
`;

export const MentorshipHeadingContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .blocks {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 25px 0 0 0;
  }

  .block-column {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BuildingBlock = styled.div<{
  isFilled?: boolean;
}>`
  border: ${`dashed ${ColorValuesLightTheme['color-least-prominent']}`};
  height: 50px;
  width: 50px;

  @media ${(Breakpoints.tablet, Breakpoints.tablet_small)} {
    height: 30px;
    width: 30px;
  }
  border-radius: 10px;

  background-color: ${({ isFilled }) => (isFilled ? '#434343' : 'none')};

  margin: 1px;
`;

export const MentorshipBodyContentContainer = styled.div``;

export const ConsultingHeadingContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
export const ConsultingBodyContentContainer = styled.div``;
