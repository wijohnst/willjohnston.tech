import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Headlines } from '@/stories/Blog/Headlines/Headlines';

export default {
  title: 'Blog/Headlines',
  component: Headlines,
  decorators: [(Story) => <Story />],
} as Meta<typeof Headlines>;

const Template: StoryFn<typeof Headlines> = (args) => <Headlines {...args} />;

export const Default = Template.bind({});
Default.args = {};
