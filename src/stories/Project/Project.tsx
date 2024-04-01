import * as React from 'react';
import Image from 'next/image';

import { SemanticElement } from '@/stories/Project/Project.style';
import TechStackDisplay, {
  DefaultControlConfig,
} from './TechStackDisplay/TechStackDisplay';
import { ImageKey, Project } from '@/stories/Portfolio';

type Props = {
  title: string;
  project: Project;
  breakpoint: ImageKey;
};

const Project = ({ project, breakpoint }: Props): React.ReactElement => {
  return (
    <SemanticElement>
      <div className="project-title-wrapper">
        <h2>{project.title}</h2>
      </div>
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
          <span>TEXT</span>
        </div>
      </div>
      <div className="project-tech-stack-wrapper">
        <TechStackDisplay controlConfig={DefaultControlConfig} />
      </div>
    </SemanticElement>
  );
};

export default Project;
