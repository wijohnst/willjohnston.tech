import * as React from 'react';
import { getRawPackageManifest } from 'query-registry';
import { SemanticElement } from '@/stories/Project/TechStackDisplay/TechStackDisplay.style';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';
import IconLabel from '@/stories/IconLabel/IconLabel';
import Description from '@/stories/Project/TechStackDisplay/Description/Description';

export const DefaultControlConfig = [
  {
    label: 'Label',
    content: <p>Target Text</p>,
    packageName: 'package-name',
  },
];

export type ControlConfigEntry = {
  label: string;
  icon?: React.ReactElement;
  packageName: string;
};

export type ManifestData = {
  description?: string;
  homepage?: string;
  name?: string;
  githubUrl?: string;
};

type Props = {
  controlConfig: ControlConfigEntry[];
};

const TechStackDisplay = ({
  controlConfig = [...DefaultControlConfig],
}: Props): React.ReactElement => {
  const [selectedControlIndex, setSelectedControlIndex] = React.useState(0);
  const [manifestData, setManifestData] = React.useState<ManifestData>({});

  React.useEffect(() => {
    const name = controlConfig[selectedControlIndex].packageName;

    getRawPackageManifest({ name }).then((data) => {
      //@ts-expect-error - data.repository is not defined correctly in type declaration
      const parsedGithubUrl = data.repository?.url.replace('git+', '') ?? '';

      console.log(parsedGithubUrl);
      setManifestData({
        description: data.description,
        homepage: data.homepage,
        name: data.name,
        githubUrl: parsedGithubUrl,
      });
    });
  }, [selectedControlIndex]);

  return (
    <SemanticElement>
      <div className="details">
        <div className="heading-wrapper">
          <PageHeadline>
            <h4>{manifestData.name ?? '???'}</h4>
          </PageHeadline>
        </div>
        <div className="text-wrapper">
          <Description manifestData={manifestData} />
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
