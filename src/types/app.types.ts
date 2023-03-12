export type IconSize = 'lg' | 'md' | 'sm' | 'xs';

export enum Breakpoints {
  desktop = '(min-width: 1440px)',
  laptop = '(max-width: 1417px)',
  tablet = '(max-width: 834px)',
  tablet_small = '(max-width: 768px)',
  mobile = '(max-width: 430px)',
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
}
