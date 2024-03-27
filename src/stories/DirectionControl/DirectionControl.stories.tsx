import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { DirectionControl } from '@/stories/DirectionControl/DirectionControl';

export default {
  title: 'Shared/DirectionControl',
  component: DirectionControl,
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof DirectionControl>;

const Template: StoryFn<typeof DirectionControl> = (args) => (
  <DirectionControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleLeftClick: () => {
    console.log('Left');
  },
  handleRightClick: () => {
    console.log('Right');
  },
};
