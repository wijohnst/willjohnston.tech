import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavButton } from './NavButton';

export default {
  title: 'Navigation/NavButton',
  component: NavButton,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FFF4E3' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = (args) => (
  <NavButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttonText: 'navbutton',
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isActive: true,
};
