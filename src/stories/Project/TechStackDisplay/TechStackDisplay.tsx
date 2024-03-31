import * as React from 'react';
import { SemanticElement } from '@/stories/Project/TechStackDisplay/TechStackDisplay.style';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';
import IconLabel from '@/stories/IconLabel/IconLabel';

export const DefaultControlConfig = [
  {
    label: 'Label',
    targetText: 'Default display text.',
  },
];

export type ControlConfigEntry = {
  label: string;
  icon?: React.ReactElement;
  targetText?: string;
};

type Props = {
  controlConfig: ControlConfigEntry[];
};

const TechStackDisplay = ({
  controlConfig = [...DefaultControlConfig],
}: Props): React.ReactElement => {
  const [selectedControlIndex, setSelectedControlIndex] = React.useState(0);

  return (
    <SemanticElement>
      <div className="details">
        <div className="heading-wrapper">
          <PageHeadline>
            <h3>{controlConfig[selectedControlIndex].label}</h3>
          </PageHeadline>
        </div>
        <div className="text-wrapper">
          <p>{controlConfig[selectedControlIndex].targetText}</p>
        </div>
      </div>
      <div className="controls">
        {controlConfig.map((entry, index) => (
          <div className="icon-container" key={`${entry.label}-${index}`}>
            <IconLabel
              labelText={entry.label}
              handleClick={() => setSelectedControlIndex(index)}
            >
              {entry.icon}
            </IconLabel>
          </div>
        ))}
      </div>
    </SemanticElement>
  );
};

export default TechStackDisplay;
