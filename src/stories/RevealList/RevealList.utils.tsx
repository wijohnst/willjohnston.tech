import * as React from 'react';
import RevealListContent from './RevealListContent/RevealListContent';

export type RevealListItem = {
  heading: string;
  underlayContent: React.ReactElement;
  headingContent: React.ReactElement;
};

export type RevealListContent = RevealListItem[];

export const defaultRevealListContent: RevealListContent = [
  {
    heading: 'webdev',
    underlayContent: (
      <RevealListContent>
        <RevealListContent.WebdevBodyContent></RevealListContent.WebdevBodyContent>
      </RevealListContent>
    ),
    headingContent: (
      <RevealListContent>
        <RevealListContent.WebdevHeadingContent />
      </RevealListContent>
    ),
  },
  {
    heading: 'mentorship',
    underlayContent: (
      <RevealListContent>
        <RevealListContent.MentorshipBodyContent />
      </RevealListContent>
    ),
    headingContent: (
      <RevealListContent>
        <RevealListContent.MentorshipHeadingContent />
      </RevealListContent>
    ),
  },
  {
    heading: 'consulting',
    underlayContent: (
      <RevealListContent>
        <RevealListContent.ConsultingBodyContent />
      </RevealListContent>
    ),
    headingContent: (
      <RevealListContent>
        <RevealListContent.ConsultingHeadingContent />
      </RevealListContent>
    ),
  },
  {
    heading: 'freelance',
    underlayContent: (
      <RevealListContent>
        <RevealListContent.FreelanceBodyContent />
      </RevealListContent>
    ),
    headingContent: (
      <RevealListContent>
        <RevealListContent.FreelanceHeadingContent />
      </RevealListContent>
    ),
  },
];

export const getHeadingString = (
  headingText: string,
  headingSize: 'full' | 'half',
): string => {
  if (headingSize === 'full') {
    return `[${headingText}]`;
  }
  return headingText;
};
