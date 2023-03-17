import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import RevealListContent from '@/stories/RevealList/RevealListContent/RevealListContent';

export default {
  title: 'Shared/RevealListContent',
  component: RevealListContent,
  decorators: [(Story) => <Story />],
} as Meta<typeof RevealListContent>;

export const Default: StoryFn<typeof RevealListContent> = (args) => (
  <RevealListContent>
    <span>Default Content</span>
  </RevealListContent>
);

export const WebdevHeadingContent: StoryFn<typeof RevealListContent> = (
  args,
) => (
  <RevealListContent>
    <RevealListContent.WebdevHeadingContent />
  </RevealListContent>
);

export const MentorshipHeadingContent: StoryFn<typeof RevealListContent> = (
  args,
) => (
  <RevealListContent>
    <RevealListContent.MentorshipHeadingContent />
  </RevealListContent>
);

export const ConsultingHeadingContent: StoryFn<typeof RevealListContent> = (
  args,
) => (
  <RevealListContent>
    <RevealListContent.ConsultingHeadingContent />
  </RevealListContent>
);

export const FreelanceHeadingContent: StoryFn<typeof RevealListContent> = (
  args,
) => (
  <RevealListContent>
    <RevealListContent.FreelanceHeadingContent />
  </RevealListContent>
);
