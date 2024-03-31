import * as React from 'react';
import { SemanticElement } from '@/stories/Project/Project.style';
import TechStackDisplay, {
  DefaultControlConfig,
} from './TechStackDisplay/TechStackDisplay';

type Props = {
  title: string;
};

const Project = ({ title = 'Project Title' }: Props): React.ReactElement => {
  return (
    <SemanticElement>
      <div className="project-title-wrapper">
        <h2>{title}</h2>
      </div>
      <div className="project-content-wrapper">
        <div className="content-image-wrapper">
          <span>IMAGE</span>
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
