import { SemanticElementProps } from '@/stories/RevealList/RevealList.style';

export const getHeadingString = (
  headingText: string,
  headingSize: 'full' | 'half',
): string => {
  if (headingSize === 'full') {
    return `[${headingText}]`;
  }
  return headingText;
};
