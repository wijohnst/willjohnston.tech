import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import Offering from '@/stories/Services/Offering/Offering';

export default {
  title: 'Services/Offering',
  component: Offering,
  decorators: [(Story) => <Story />],
} as Meta<typeof Offering>;

const Template: StoryFn<typeof Offering> = (args) => <Offering {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false,
  heading: 'Heading',
};
