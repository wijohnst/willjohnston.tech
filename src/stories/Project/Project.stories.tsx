import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Project from '@/stories/Project/Project';

export default {
  title: 'Project/Project',
  component: Project,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Project>;

const Template: StoryFn<typeof Project> = (args) => <Project {...args} />;

export const Default = Template.bind({});
Default.args = {};
