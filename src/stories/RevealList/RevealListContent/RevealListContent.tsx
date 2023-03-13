import * as React from 'react';

import {
  RevealListContextProvider,
  RevealListContext,
  RevealListDispatchContext,
} from '@/stories/RevealList/RevealListContent/RevealListContext';
import {
  BodyContentContainer,
  BuildingBlock,
  ConsultingBodyContentContainer,
  ConsultingHeadingContentContainer,
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

  return (
    <ConsultingHeadingContentContainer>
      <div className="icons">
        <div
          className="icon-wrapper"
          style={getStyle(currentQuality === 'empathy')}
          onClick={() =>
            dispatch({
              type: 'UPDATE_QUALITY',
              payload: 'empathy',
            })
          }
        >
          <AppIcon>
            <EmpathyIcon />
          </AppIcon>
        </div>
        <div
          className="icon-wrapper"
          style={getStyle(currentQuality === 'technology')}
          onClick={() =>
            dispatch({ type: 'UPDATE_QUALITY', payload: 'technology' })
          }
        >
          <AppIcon>
            <CodeIcon />
          </AppIcon>
        </div>
        <div
          className="icon-wrapper"
          style={getStyle(currentQuality === 'data')}
          onClick={() => dispatch({ type: 'UPDATE_QUALITY', payload: 'data' })}
        >
          <AppIcon>
            <DataIcon />
          </AppIcon>
        </div>
        <div
          className="icon-wrapper"
          style={getStyle(currentQuality === 'experience')}
          onClick={() =>
            dispatch({ type: 'UPDATE_QUALITY', payload: 'experience' })
          }
        >
          <AppIcon>
            <ExperienceIcon />
          </AppIcon>
        </div>
      </div>
    </ConsultingHeadingContentContainer>
  );
};

const ConsultingBodyContent = (): React.ReactElement => {
  const { currentQuality } = React.useContext(RevealListContext);
  const dispatch = React.useContext(RevealListDispatchContext);

  return (
    <ConsultingBodyContentContainer>
      {currentQuality}
    </ConsultingBodyContentContainer>
  );
};

RevealListContent.ConsultingBodyContent = ConsultingBodyContent;
RevealListContent.ConsultingHeadingContent = ConsultingHeadingContent;
RevealListContent.MentorshipBodyContent = MentorshipBodyContent;
RevealListContent.MentorshipHeadingContent = MentorshipHeadingContent;
RevealListContent.WebdevHeadingContent = WebdevHeadingContent;
RevealListContent.WebdevBodyContent = WebdevBodyContent;
export default RevealListContent;
