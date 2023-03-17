import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { AppIcon } from '@/stories/AppIcon/AppIcon';
import CodeIcon from '@@/public/Icons/code-icon.svg';

export default {
  title: 'Shared/AppIcon',
  component: AppIcon,
  decorators: [
    (Story) => (
      <div style={{ width: '75px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof AppIcon>;

export const Default: StoryFn<typeof AppIcon> = (args) => (
  <AppIcon {...args}></AppIcon>
);

export const CustomIcon: StoryFn<typeof AppIcon> = (args) => (
  <AppIcon {...args}>
    <CodeIcon role="image" alt="WillJohnston.tech Logo" />
  </AppIcon>
);
