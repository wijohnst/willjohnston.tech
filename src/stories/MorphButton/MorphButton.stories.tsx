import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import MorphButton from '@/stories/MorphButton/MorphButton';
import { ColorValuesLightTheme } from '@/types/app.types';

export default {
  title: 'MorphButton/MorphButton',
  component: MorphButton,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: ColorValuesLightTheme['color-least-prominent'],
          padding: '1rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof MorphButton>;

const Template: StoryFn<typeof MorphButton> = (args) => (
  <MorphButton {...args}>
    <SampleChild />
  </MorphButton>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Morph Button',
};

const SampleChild = (): React.ReactElement => {
  return <span>This is an example of content!</span>;
};
