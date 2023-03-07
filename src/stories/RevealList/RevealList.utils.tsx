import { m } from 'framer-motion';
import * as React from 'react';

export type RevealListItem = {
  heading: string;
  underlayContent: React.ReactElement;
};

export type RevealListContent = RevealListItem[];

export const defaultRevealListContent: RevealListContent = [
  {
    heading: 'webdev',
    underlayContent: <span>WEBDEV CONTENT</span>,
  },
  {
    heading: 'mentorship',
    underlayContent: <span>MENTORSHIP CONTENT</span>,
  },
  {
    heading: 'consulting',
    underlayContent: <span>CONSULTING CONTENT</span>,
  },
  {
    heading: 'freelance',
    underlayContent: <span>FREELANCE CONTENT</span>,
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
