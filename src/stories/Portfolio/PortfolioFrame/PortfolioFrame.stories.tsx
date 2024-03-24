import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PortfolioFrame } from '@/stories/Portfolio/PortfolioFrame/PortfolioFrame';

export default {
  title: 'Portfolio/PortfolioFrame',
  component: PortfolioFrame,
  decorators: [(Story) => <Story />],
} as Meta<typeof PortfolioFrame>;

const Template: StoryFn<typeof PortfolioFrame> = (args) => (
  <PortfolioFrame {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <span>PortfolioFrame Works!</span>,
};
