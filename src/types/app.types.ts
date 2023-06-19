export type IconSize = 'lg' | 'md' | 'sm' | 'xs';

export enum Breakpoints {
  desktop = '(min-width: 1440px)',
  laptop = '(max-width: 1439px) and (min-width: 912px)',
  tablet = '(max-width: 911px) and (min-width: 768px)',
  tablet_small = '(max-width: 767px) and (min-width: 431px)',
  mobile = '(max-width: 430px) and (min-width: 391px)',
  mobile_small = '(max-width: 390px)',
}

/** Prominence based colors for a light theme */
export enum ColorValuesLightTheme {
  'color-most-prominent' = '#FFF4E3',
  'color-least-prominent' = '#434343',
  'stroke-least-prominent' = '#1E1E1E',
}

/** Prominence based colors that are consistent regardless of theme */
export enum ColorValuesThemeAgnostic {
  'color-accent' = '#737445',
  'color-accent-plus-2' = '#8B8C54',
  'color-least-prominent-light' = '#434343',
  'color-accent-brown-gray' = '#CCC3B6',
}
