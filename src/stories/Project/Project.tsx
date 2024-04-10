import * as React from 'react';
import Image from 'next/image';

import { SemanticElement } from '@/stories/Project/Project.style';
import TechStackDisplay, {
  ControlConfigEntry,
} from './TechStackDisplay/TechStackDisplay';
import { ImageKey, Project as ProjectType } from '@/stories/Portfolio';
import { TechStackKeys, TechStack } from './TechStackDisplay/TechStack';

import GithubIcon from '@@/public/Icons/github-icon.svg';
import BrowserIcon from '@@/public/Icons/browser-icon.svg';
import { DirectionControl } from '../DirectionControl/DirectionControl';
import { ScrollActions } from '@/pages/Portfolio';

type Props = {
  project: ProjectType;
  breakpoint: ImageKey;
  handleScrollProject: (scrollAction: ScrollActions) => void;
};

const getControlConfigFromTechStackKeys = (
  keys: Partial<TechStackKeys>[],
): ControlConfigEntry[] => {
  return keys.map((key) => {
    return TechStack[key];
  });
};

const Project = ({
  project,
  breakpoint,
  handleScrollProject,
}: Props): React.ReactElement => {
  const controlConfig = getControlConfigFromTechStackKeys(project.techStack);

  return (
    <SemanticElement>
      <div className="project-content-wrapper">
        <div className="content-image-wrapper">
          <Image
            src={project.images[0].imagePaths[breakpoint]}
            height={project.images[0].imageDimensions[breakpoint].height}
            width={project.images[0].imageDimensions[breakpoint].width}
            alt="A friendly kitty"
          />
        </div>
        <div className="content-text-wrapper">
          <div className="header-controls-wrapper">
            <h2>{project.title}</h2>
            <div className="header-controls">
              <a target="_blank" href={project.githubLink}>
                <GithubIcon />
              </a>
              <a target="_blank" href={project.demoLink}>
                <BrowserIcon />
              </a>
            </div>
          </div>
          {project.content}
        </div>
        <div className="content-controls-wrapper">
          <span>Navigate Projects</span>
          <DirectionControl
            handleLeftClick={() => handleScrollProject(ScrollActions.DECREMENT)}
            handleRightClick={() =>
              handleScrollProject(ScrollActions.INCREMENT)
            }
          />
        </div>
      </div>
      <div className="project-tech-stack-wrapper">
        <h3>Tech Stack</h3>
        <TechStackDisplay controlConfig={controlConfig} />
        <label className="caption">Select a technology to learn more.</label>
      </div>
    </SemanticElement>
  );
};

export { Project };
