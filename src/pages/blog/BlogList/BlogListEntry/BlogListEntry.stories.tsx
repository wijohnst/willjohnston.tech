import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { BlogListEntry } from '@/pages/blog/BlogList/BlogListEntry/BlogListEntry';

export default {
  title: 'Blog/BlogListEntry',
  component: BlogListEntry,
  decorators: [(Story) => <Story />],
} as Meta<typeof BlogListEntry>;

const Template: StoryFn<typeof BlogListEntry> = (args) => (
  <BlogListEntry {...args} />
);

export const Default = Template.bind({});
Default.args = {
  yearValue: '2021',
  blogMetaDataArray: [
    {
      title: 'Mazes in Reverse: The Power of Test Driven Development',
      slug: 'test',
    },
  ],
};
