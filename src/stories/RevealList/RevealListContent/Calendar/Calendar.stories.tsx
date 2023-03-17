import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Calendar } from '@/stories/RevealList/RevealListContent/Calendar/Calendar';

export default {
  title: 'Shared/Calendar',
  component: Calendar,
  decorators: [(Story) => <Story />],
} as Meta<typeof Calendar>;

const Template: StoryFn<typeof Calendar> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
