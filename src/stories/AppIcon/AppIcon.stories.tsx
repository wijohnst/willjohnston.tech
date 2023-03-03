import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from 'next/image';

import { AppIcon } from './AppIcon';
import CodeIcon from '../../../public/Icons/code-icon.svg';

export default {
  title: 'Shared/AppIcon',
  component: AppIcon,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof AppIcon>;

export const Default: ComponentStory<typeof AppIcon> = (args) => (
  <AppIcon {...args}></AppIcon>
);
