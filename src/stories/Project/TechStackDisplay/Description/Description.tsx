import * as React from 'react';

import { ManifestData } from '@/stories/Project/TechStackDisplay/TechStackDisplay';
import { SemanticElement } from '@/stories/Project/TechStackDisplay/Description/Description.style';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';

type Props = {
  manifestData: ManifestData;
};

const Description = ({ manifestData }: Props): React.ReactElement => {
  return (
    <SemanticElement>
      <PageHeadline>
        <h4>{manifestData?.name ?? 'NO NAME AVAILABLE'}</h4>
      </PageHeadline>
      <p>{manifestData?.description ?? 'NO DESCRIPTION AVAILABLE'}</p>
    </SemanticElement>
  );
};

export default Description;
