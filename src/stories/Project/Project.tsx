import * as React from 'react';
import Image from 'next/image';

import { SemanticElement } from '@/stories/Project/Project.style';
import TechStackDisplay, {
  ControlConfigEntry,
} from './TechStackDisplay/TechStackDisplay';
import { ImageKey, Project as ProjectType } from '@/stories/Portfolio';
import { TechStackKeys, TechStack } from './TechStackDisplay/TechStack';

type Props = {
  project: ProjectType;
  breakpoint: ImageKey;
};

const getControlConfigFromTechStackKeys = (
  keys: Partial<TechStackKeys>[],
): ControlConfigEntry[] => {
  return keys.map((key) => {
    return TechStack[key];
  });
};

const Project = ({ project, breakpoint }: Props): React.ReactElement => {
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
        <div className="content-text-wrapper">{project.content}</div>
      </div>
      <div className="project-tech-stack-wrapper">
        <h3>Tech Stack</h3>
        <TechStackDisplay controlConfig={controlConfig} />
      </div>
    </SemanticElement>
  );
};

export { Project };
