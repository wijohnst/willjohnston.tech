import * as React from 'react';

import {
  RevealListContext,
  RevealListDispatchContext,
  Quality,
} from '@/stories/RevealList/RevealListContent/RevealListContext';
import {
  BodyContentContainer,
  BuildingBlock,
  ConsultingHeadingContentContainer,
  FreelanceHeadingContentContainer,
  MentorshipHeadingContentContainer,
  SemanticElement,
  WebDevHeadingContentContainer,
} from '@/stories/RevealList/RevealListContent/RevealListContent.style';
import { AppIcon } from '@/stories/AppIcon/AppIcon';

import ReactIcon from '@@/public/Icons/react-icon.svg';
import TypeScriptIcon from '@@/public/Icons/typescript-icon.svg';
import FigmaIcon from '@@/public/Icons/figma-icon.svg';
import NodeIcon from '@@/public/Icons/node-icon.svg';
import NextIcon from '@@/public/Icons/next-icon.svg';
import ReduxIcon from '@@/public/Icons/redux-icon.svg';
import CodeIcon from '@@/public/Icons/code-icon.svg';
import EmpathyIcon from '@@/public/Icons/empathy-icon.svg';
import DataIcon from '@@/public/Icons/data-icon.svg';
import ExperienceIcon from '@@/public/Icons/experience-icon.svg';
import { ColorValuesThemeAgnostic } from '@/types/app.types';
import { Calendar } from './Calendar/Calendar';

type RevealListContentProps = {
  children: React.ReactElement | React.ReactElement[];
};

const RevealListContent = ({
  children,
}: RevealListContentProps): React.ReactElement => {
  return <SemanticElement>{children}</SemanticElement>;
};

const WebdevHeadingContent = (): React.ReactElement => {
  return (
    <WebDevHeadingContentContainer>
      <div className="icons">
        <div className="icon-wrapper">
          <AppIcon>
            <ReactIcon />
          </AppIcon>
        </div>
        <div className="icon-wrapper">
          <AppIcon>
            <TypeScriptIcon />
          </AppIcon>
        </div>
        <div className="icon-wrapper">
          <AppIcon>
            <FigmaIcon />
          </AppIcon>
        </div>
        <div className="icon-wrapper">
          <AppIcon>
            <NodeIcon />
          </AppIcon>
        </div>
        <div className="icon-wrapper">
          <AppIcon>
            <NextIcon />
          </AppIcon>
        </div>
        <div className="icon-wrapper">
          <AppIcon>
            <ReduxIcon />
          </AppIcon>
        </div>
      </div>
    </WebDevHeadingContentContainer>
  );
};

const WebdevBodyContent = (): React.ReactElement => {
  return (
    <BodyContentContainer>
      Delivery leadership for{' '}
      <span className="highlight-text">{`the web's most in-demand technologies.`}</span>
    </BodyContentContainer>
  );
};

const MentorshipHeadingContent = (): React.ReactElement => {
  return (
    <MentorshipHeadingContentContainer>
      <div className="blocks">
        <div className="block-column">
          <BuildingBlock isFilled />
        </div>
        <div className="block-column">
          <BuildingBlock isFilled />
          <BuildingBlock />
        </div>
        <div className="block-column">
          <BuildingBlock isFilled />
          <BuildingBlock />
          <BuildingBlock />
        </div>
        <div className="block-column">
          <BuildingBlock isFilled />
          <BuildingBlock />
          <BuildingBlock />
          <BuildingBlock />
        </div>
        <div className="block-column">
          <BuildingBlock isFilled />
          <BuildingBlock />
          <BuildingBlock />
          <BuildingBlock />
          <BuildingBlock />
        </div>
      </div>
    </MentorshipHeadingContentContainer>
  );
};

const MentorshipBodyContent = (): React.ReactElement => {
  return (
    <BodyContentContainer>
      Helping software engineers at all levels{' '}
      <span className="highlight-text">take the next step.</span>
    </BodyContentContainer>
  );
};

const ConsultingHeadingContent = (): React.ReactElement => {
  const { currentQuality } = React.useContext(RevealListContext);
  const dispatch = React.useContext(RevealListDispatchContext);

  const getStyle = (isActive: boolean) =>
    isActive
      ? {
          backgroundColor: ColorValuesThemeAgnostic['color-accent'],
          borderRadius: '10px',
        }
      : {};

  const updateCurrentQuality = (updatedQuality: Quality): void => {
    dispatch({
      type: 'UPDATE_QUALITY',
      payload: updatedQuality,
    });
  };

  return (
    <ConsultingHeadingContentContainer>
      <div className="icons">
        <div
          className="icon-wrapper"
          style={getStyle(currentQuality === 'empathy')}
        >
          <div
            className="icon-fill"
            style={getStyle(currentQuality === 'empathy')}
          >
            <AppIcon handleClick={() => updateCurrentQuality('empathy')}>
              <EmpathyIcon />
            </AppIcon>
          </div>
        </div>
        <div className="icon-wrapper">
          <div
            className="icon-fill"
            style={getStyle(currentQuality === 'technology')}
          >
            <AppIcon handleClick={() => updateCurrentQuality('technology')}>
              <CodeIcon />
            </AppIcon>
          </div>
        </div>
        <div className="icon-wrapper">
          <div
            className="icon-fill"
            style={getStyle(currentQuality === 'data')}
          >
            <AppIcon handleClick={() => updateCurrentQuality('data')}>
              <DataIcon />
            </AppIcon>
          </div>
        </div>
        <div className="icon-wrapper">
          <div
            className="icon-fill"
            style={getStyle(currentQuality === 'experience')}
          >
            <AppIcon handleClick={() => updateCurrentQuality('experience')}>
              <ExperienceIcon />
            </AppIcon>
          </div>
        </div>
      </div>
    </ConsultingHeadingContentContainer>
  );
};

const ConsultingBodyContent = (): React.ReactElement => {
  const { currentQuality } = React.useContext(RevealListContext);
  const dispatch = React.useContext(RevealListDispatchContext);

  React.useEffect(() => {
    const getNextQuality = (quality: Quality): Quality => {
      switch (quality) {
        case 'empathy':
          return 'technology';
        case 'technology':
          return 'data';
        case 'data':
          return 'experience';
        case 'experience':
          return 'empathy';
        default:
          return 'empathy';
      }
    };
    const updateQualityTimer = setTimeout(() => {
      dispatch({
        type: 'UPDATE_QUALITY',
        payload: getNextQuality(currentQuality),
      });
    }, 2800);
    return () => clearTimeout(updateQualityTimer);
  }, [currentQuality, dispatch]);

  return (
    <BodyContentContainer>
      Leveraging
      <br />
      <span className="highlight-text">{currentQuality}</span>
      <br /> to empower teams of all sizes.
    </BodyContentContainer>
  );
};

const FreelanceHeadingContent = (): React.ReactElement => {
  return (
    <FreelanceHeadingContentContainer>
      <div className="calendar-wrapper">
        <Calendar />
      </div>
    </FreelanceHeadingContentContainer>
  );
};

const FreelanceBodyContent = (): React.ReactElement => {
  return (
    <BodyContentContainer>
      Offering on-demand service that{' '}
      <span className="highlight-text">fits your schedule</span>.
    </BodyContentContainer>
  );
};

RevealListContent.FreelanceBodyContent = FreelanceBodyContent;
RevealListContent.FreelanceHeadingContent = FreelanceHeadingContent;
RevealListContent.ConsultingBodyContent = ConsultingBodyContent;
RevealListContent.ConsultingHeadingContent = ConsultingHeadingContent;
RevealListContent.MentorshipBodyContent = MentorshipBodyContent;
RevealListContent.MentorshipHeadingContent = MentorshipHeadingContent;
RevealListContent.WebdevHeadingContent = WebdevHeadingContent;
RevealListContent.WebdevBodyContent = WebdevBodyContent;
export default RevealListContent;
