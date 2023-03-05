import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Footer } from '@/stories/Footer/Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [(Story) => <Story />],
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer />;

export const Default = Template.bind({});
Default.args = {};
