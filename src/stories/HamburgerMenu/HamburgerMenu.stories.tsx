import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { HamburgerMenu } from '@/stories/HamburgerMenu/HamburgerMenu';
import { BlogList } from '@/pages/blog/BlogList/BlogList';

export default {
  title: 'Shared/HamburgerMenu',
  component: HamburgerMenu,
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof HamburgerMenu>;

const Template: StoryFn<typeof HamburgerMenu> = (args) => (
  <HamburgerMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <BlogList />,
};
