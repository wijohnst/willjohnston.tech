import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { AboutPic } from '@/stories/About/AboutPic/AboutPic';

export default {
  title: 'About/AboutPic',
  component: AboutPic,
  decorators: [(Story) => <Story />],
} as Meta<typeof AboutPic>;

const Template: StoryFn<typeof AboutPic> = (args) => <AboutPic />;

export const Default = Template.bind({});
Default.args = {};
