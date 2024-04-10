import * as React from 'react';

import { ManifestData } from '@/stories/Project/TechStackDisplay/TechStackDisplay';
import { SemanticElement } from '@/stories/Project/TechStackDisplay/Description/Description.style';
import {
  TechStackKeys,
  TechStackOverrideKeys,
  techStackOverrideData,
} from '../TechStack';

type Props = {
  manifestData: ManifestData;
};

const Description = ({ manifestData }: Props): React.ReactElement => {
  if (
    Object.keys(techStackOverrideData).includes(
      manifestData?.name as TechStackKeys,
    )
  ) {
    manifestData =
      techStackOverrideData[manifestData.name as TechStackOverrideKeys];
  }
  return (
    <SemanticElement>
      <p>{manifestData?.description ?? 'NO DESCRIPTION AVAILABLE'}</p>
      <div className="links-wrapper">
        {manifestData?.homepage && (
          <a href={manifestData.homepage} target="_blank">
            DOCS
          </a>
        )}
        {manifestData?.githubUrl && (
          <a href={manifestData.githubUrl} target="_blank">
            GITHUB
          </a>
        )}
      </div>
    </SemanticElement>
  );
};

export default Description;
