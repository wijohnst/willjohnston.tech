import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { BlogHero } from '@/stories/Blog/BlogHero/BlogHero';

export default {
  title: 'Blog/BlogHero',
  component: BlogHero,
  decorators: [
    (Story) => (
      <div style={{ height: '150px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof BlogHero>;

const Template: StoryFn<typeof BlogHero> = (args) => <BlogHero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Blog Post Title',
  subtitle: 'Blog Post Subtitle',
};
