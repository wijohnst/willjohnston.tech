import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';
import { PageHeadline } from '@/stories/PageHeadline/PageHeadline';

export default {
  title: 'Shared/PageHeadline',
  component: PageHeadline,
  decorators: [(Story) => <Story />],
} as Meta<typeof PageHeadline>;

const Template: StoryFn<typeof PageHeadline> = (args) => <PageHeadline />;

export const Default = Template.bind({});
Default.args = {};
