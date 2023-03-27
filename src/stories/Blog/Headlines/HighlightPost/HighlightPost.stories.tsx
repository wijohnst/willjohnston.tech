import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { HighlightPost } from '@/stories/Blog/Headlines/HighlightPost/HighlightPost';
import Desktop from '@@/public/TestImages/Highlight-Desktop.png';
import Mobile from '@@/public/TestImages/Highlight-Mobile.png';

export default {
  title: 'Blog/HighlightPost',
  component: HighlightPost,
  decorators: [(Story) => <Story />],
} as Meta<typeof HighlightPost>;

const Template: StoryFn<typeof HighlightPost> = (args) => (
  <HighlightPost {...args} />
);

export const Default = Template.bind({});
Default.args = {
  highlighPostMetaData: {
    title: 'Making Remote Mentorship Work',
    createdDate: '03/21/2023',
    heroImageAlt: 'A friendly puppy',
  },
  heroImages: {
    mobile: Mobile,
    desktop: Desktop,
  },
};
