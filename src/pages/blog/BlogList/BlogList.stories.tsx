import * as React from 'react';

import { BlogList } from '@/pages/blog/BlogList/BlogList';

import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Blog/BlogList',
  component: BlogList,
  decorators: [(Story) => <Story />],
} as Meta<typeof BlogList>;

const Template: StoryFn<typeof BlogList> = (args) => <BlogList />;

export const Default = Template.bind({});
Default.args = {};
