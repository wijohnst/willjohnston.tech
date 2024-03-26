import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PortfolioContent } from '@/stories/Portfolio/PortfolioContent/PortfolioContent';
import { PortfolioFrame } from '@/stories/Portfolio/PortfolioFrame/PortfolioFrame';
import { DiscoveryFrame } from '../PortfolioFrame/Frames/Discovery/DiscoveryFrame';

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
      <div style={{ height: '800px' }}>
        <h1>This is the first Frame</h1>
        <div style={{ height: '400px' }}>
          <span>This is the content</span>
        </div>
      </div>
    </PortfolioFrame>,
    <PortfolioFrame key="bar">
      <DiscoveryFrame />
    </PortfolioFrame>,
  ],
};
