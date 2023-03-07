import * as React from 'react';

import {
  SemanticElement,
  RevealSection,
} from '@/stories/RevealList/RevealList.style';
import {
  defaultRevealListContent,
  getHeadingString,
  RevealListContent,
  RevealListItem,
} from '@/stories/RevealList/RevealList.utils';

type Props = {
  activeHeading: string | undefined;
  revealListContent?: RevealListContent;
};
const RevealList = ({
  activeHeading,
  revealListContent = defaultRevealListContent,
}: Props): React.ReactElement => {
  return (
    <SemanticElement data-testid="reveal-list">
      {revealListContent.map(({ heading, underlayContent }: RevealListItem) => {
        const isActive = heading === activeHeading;
        return (
          <RevealSection key={heading} isActive={isActive}>
            <div className="overlay">
              <h1>{getHeadingString(heading, isActive ? 'half' : 'full')}</h1>
            </div>
            <div className="underlay">
              <div className="underlay-left"></div>
              <div className="underlay-right">{underlayContent}</div>
            </div>
          </RevealSection>
        );
      })}
    </SemanticElement>
  );
};

export { RevealList };
