import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import IconLabel from '@/stories/IconLabel/IconLabel';

import FigmaIcon from '@@/public/Icons/figma-icon.svg';

export default {
  title: 'Shared/IconLabel',
  component: IconLabel,
  decorators: [
    (Story) => (
      <div style={{ height: '100px', width: '100px', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof IconLabel>;

export const Default: StoryFn<typeof IconLabel> = (args) => (
  <IconLabel {...args}></IconLabel>
);

export const CustomIcon: StoryFn<typeof IconLabel> = (args) => (
  <IconLabel {...args}>
    <FigmaIcon role="image" alt="Figma Logo" />
  </IconLabel>
);
CustomIcon.args = {
  labelText: 'Figma',
};
