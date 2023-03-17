import * as React from 'react';

import { SemanticElement } from '@/stories/RevealList/RevealListContent/Calendar/Calendar.style';

import {
  CalendarEntry,
  CalendarEntryConfig,
} from '@/stories/RevealList/RevealListContent/Calendar/CalendarEntry/CalendarEntry';

const calendarEntries: CalendarEntryConfig[] = [
  {
    textContent: 'S',
  },
  {
    textContent: 'M',
  },
  {
    textContent: 'T',
  },
  {
    textContent: 'W',
  },
  {
    textContent: 'T',
  },
  {
    textContent: 'F',
  },
  {
    textContent: 'S',
  },
  {
    fillColor: 'color-accent-brown-gray',
    transitionTime: 0,
    timeoutValue: 0,
  },
  {
    fillColor: 'color-accent-brown-gray',
    transitionTime: 0,
    timeoutValue: 0,
  },
  {
    fillColor: 'color-accent-brown-gray',
    transitionTime: 0,
    timeoutValue: 0,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-accent',
    timeoutValue: 1000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-least-prominent-light',
    timeoutValue: 3000,
  },
  {
    fillColor: 'color-accent-brown-gray',
    transitionTime: 0,
    timeoutValue: 0,
  },
  {
    fillColor: 'color-accent-brown-gray',
    transitionTime: 0,
    timeoutValue: 0,
  },
];
type Props = {};

const Calendar = ({}: Props): React.ReactElement => {
  return (
    <SemanticElement>
      {calendarEntries.map((calendarEntry, index) => (
        <CalendarEntry calendarEntryConfig={calendarEntry} key={index} />
      ))}
    </SemanticElement>
  );
};

export { Calendar };
