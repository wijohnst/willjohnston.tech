import * as React from 'react';

import {
  SemanticElement,
  RevealSection,
} from '@/stories/RevealList/RevealList.style';
import { getHeadingString } from '@/stories/RevealList/RevealList.utils';

type Props = {
  activeHeading: string | undefined;
};
const RevealList = ({ activeHeading }: Props): React.ReactElement => {
  return (
    <SemanticElement data-testid="reveal-list">
      <RevealSection>
        <div className="heading-wrapper">
          <h1>
            {getHeadingString(
              'webdev',
              activeHeading === 'webdev' ? 'half' : 'full',
            )}
          </h1>
        </div>
        {activeHeading === 'webdev' && (
          <div className="reveal-content">CONTENT</div>
        )}
      </RevealSection>
      <RevealSection>
        {activeHeading === 'mentorship' && (
          <div className="reveal-content">CONTENT</div>
        )}
        <div className="heading-wrapper">
          <h1>
            {getHeadingString(
              'mentorship',
              activeHeading === 'mentorship' ? 'half' : 'full',
            )}
          </h1>
        </div>
      </RevealSection>
      <RevealSection>
        {activeHeading === 'consulting' && (
          <div className="reveal-content">CONTENT</div>
        )}
        <div className="heading-wrapper">
          <h1>
            {getHeadingString(
              'consulting',
              activeHeading === 'consulting' ? 'half' : 'full',
            )}
          </h1>
        </div>
        {activeHeading === 'consulting' && (
          <div className="reveal-content">CONTENT</div>
        )}
      </RevealSection>
      <RevealSection>
        {activeHeading === 'consulting' && (
          <div className="reveal-content">CONTENT</div>
        )}
        <div className="heading-wrapper">
          <h1>
            {getHeadingString(
              'freelance',
              activeHeading === 'freelance' ? 'half' : 'full',
            )}
          </h1>
        </div>
        {activeHeading === 'freelance' && (
          <div className="reveal-content">CONTENT</div>
        )}
      </RevealSection>
    </SemanticElement>
  );
};

export { RevealList };
