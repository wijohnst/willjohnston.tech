import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'Navigation/NavBar',
  component: NavBar,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
