import * as React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { CalendarEntry } from '@/stories/RevealList/RevealListContent/Calendar/CalendarEntry/CalendarEntry';

export default {
  title: 'Shared/Calendar/CalendarEntry',
  component: CalendarEntry,
  decorators: [(Story) => <Story />],
} as Meta<typeof CalendarEntry>;

const Template: StoryFn<typeof CalendarEntry> = (args) => (
  <CalendarEntry {...args} />
);

export const Default = Template.bind({});
Default.args = {
  calendarEntryConfig: {},
};

export const NotBooked = Template.bind({});
NotBooked.args = {
  calendarEntryConfig: {
    fillColor: 'color-least-prominent-light',
  },
};

export const Empty = Template.bind({});
Empty.args = {
  calendarEntryConfig: {
    fillColor: null,
  },
};

export const OutOfBounds = Template.bind({});
OutOfBounds.args = {
  calendarEntryConfig: {
    fillColor: 'color-accent-brown-gray',
  },
};

export const HasText = Template.bind({});
HasText.args = {
  calendarEntryConfig: {
    textContent: 'S',
  },
};
