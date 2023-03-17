import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { RevealList } from '@/stories/RevealList/RevealList';

export default {
  title: 'Shared/RevealList',
  component: RevealList,
  decorators: [(Story) => <Story />],
  argTypes: {
    activeHeading: {
      options: ['webdev', 'mentorship', 'consulting', 'freelance'],
    },
  },
} as Meta<typeof RevealList>;

const Template: StoryFn<typeof RevealList> = (args) => <RevealList {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeHeading: undefined,
	handleHeadingChange: (activeHeading) => console.log(activeHeading),
};
