import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from 'next/image';

import { AppIcon } from './AppIcon';
import CodeIcon from '../../../public/Icons/code-icon.svg';

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
} as ComponentMeta<typeof AppIcon>;

export const Default: ComponentStory<typeof AppIcon> = (args) => (
  <AppIcon {...args}></AppIcon>
);

export const CustomIcon: ComponentStory<typeof AppIcon> = (args) => (
  <AppIcon {...args}>
    <CodeIcon role="image" alt="WillJohnston.tech Logo" />
  </AppIcon>
);
