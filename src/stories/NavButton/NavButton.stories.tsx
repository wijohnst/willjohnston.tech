import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { NavButton } from './NavButton';
import { ColorValuesLightTheme } from '@/types/app.types';

export default {
  title: 'Navigation/NavButton',
  component: NavButton,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: ColorValuesLightTheme['color-most-prominent'],
          padding: '1rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof NavButton>;

const Template: StoryFn<typeof NavButton> = (args) => <NavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  pathname: '',
  buttonText: 'navbutton',
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isActive: true,
};
