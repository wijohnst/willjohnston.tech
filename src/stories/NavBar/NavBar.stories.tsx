import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'Navigation/NavBar',
  component: NavBar,
  decorators: [(Story) => <Story />],
} as Meta<typeof NavBar>;

const Template: StoryFn<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
