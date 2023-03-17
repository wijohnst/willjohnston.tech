import * as React from 'react';

import { SemanticElement } from '@/stories/RevealList/RevealListContent/Calendar/CalendarEntry/CalendarEntry.style';
import { ColorValuesThemeAgnostic } from '@/types/app.types';

export type FillColor = keyof typeof ColorValuesThemeAgnostic;

export type CalendarEntryConfig = {
  textContent?: string;
  timeoutValue?: number;
  transitionTime?: number;
  fillColor?: FillColor | null;
};

type Props = {
  calendarEntryConfig: CalendarEntryConfig;
};

const CalendarEntry = ({ calendarEntryConfig }: Props): React.ReactElement => {
  const {
    textContent = '',
    timeoutValue = 500,
    transitionTime = 7,
    fillColor = 'color-accent-plus-2',
  } = calendarEntryConfig;
  const [shouldTransform, setShouldTransform] = React.useState(false);

  React.useEffect(() => {
    const transformTime = setTimeout(() => {
      setShouldTransform(true);
    }, timeoutValue);

    return () => clearTimeout(transformTime);
  }),
    [];

  return (
    <SemanticElement
      shouldTransform={shouldTransform}
      fillColor={fillColor}
      hasContent={!!textContent}
      transitionTime={transitionTime}
    >
      {textContent ?? ''}
    </SemanticElement>
  );
};

export { CalendarEntry };
