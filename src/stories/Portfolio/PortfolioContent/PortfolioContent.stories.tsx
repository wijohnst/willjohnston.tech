import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PortfolioContent } from '@/stories/Portfolio/PortfolioContent/PortfolioContent';
import { PortfolioFrame } from '@/stories/Portfolio/PortfolioFrame/PortfolioFrame';

export default {
  title: 'Portfolio/PortfolioContent',
  component: PortfolioContent,
  decorators: [(Story) => <Story />],
} as Meta<typeof PortfolioContent>;

const Template: StoryFn<typeof PortfolioContent> = (args) => (
  <PortfolioContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  portfolioFrames: [
    <PortfolioFrame key="foo">
      <span>Foo</span>
    </PortfolioFrame>,
    <PortfolioFrame key="bar">
      <span>Bar</span>
    </PortfolioFrame>,
  ],
};
