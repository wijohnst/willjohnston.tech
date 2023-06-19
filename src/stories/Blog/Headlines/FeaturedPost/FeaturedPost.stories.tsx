import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import FeaturedPost from '@/stories/Blog/Headlines/FeaturedPost/FeaturedPost';

export default {
  title: 'Blog/FeaturedPost',
  component: FeaturedPost,
  decorators: [(Story) => <Story />],
} as Meta<typeof FeaturedPost>;

const Template: StoryFn<typeof FeaturedPost> = (args) => (
  <FeaturedPost {...args} />
);

export const Default = Template.bind({});
Default.args = {
  featuredPostMetaData: {
    title: 'Making Remote Mentorship Work',
    createdDate: '03/21/2023',
    heroImageAlt: 'A friendly puppy',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
  },
  heroImagePaths: {
    mobile: '/TestImages/Mobile.png',
    desktop: '/TestImages/Desktop.png',
    tablet: '/TestImages/Tablet.png',
  },
};
