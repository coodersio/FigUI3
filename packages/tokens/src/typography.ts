/**
 * Typography System
 *
 * Font families: Inter (base), Whyte (heading)
 * Font weights: regular (400), book (350), medium (450), semibold (550)
 * Text styles: Predefined text styles from the FigUI3 design system
 */

export const fontFamilies = {
  base: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  heading: 'Whyte, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} as const;

export const fontWeights = {
  regular: 400,
  book: 350,
  medium: 450,
  semibold: 550,
} as const;

export const fontSizes = {
  xs: 11,
  sm: 12,
  base: 13,
  lg: 14,
  xl: 16,
  '2xl': 18,
  '3xl': 20,
  '4xl': 24,
  '5xl': 32,
  '6xl': 48,
} as const;

export const lineHeights = {
  tight: 1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

export interface TextStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export type TextStyleName =
  | 'heading.display'
  | 'heading.large'
  | 'heading.medium'
  | 'heading.small'
  | 'body.large'
  | 'body.medium'
  | 'body.small'
  | 'body.xlarge'
  | 'caption'
  | 'code';

export const textStyles: Record<TextStyleName, TextStyle> = {
  'heading.display': {
    fontFamily: 'Whyte',
    fontSize: 48,
    fontWeight: 500,
    lineHeight: 56,
  },
  'heading.large': {
    fontFamily: 'Whyte',
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 40,
  },
  'heading.medium': {
    fontFamily: 'Whyte',
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 32,
  },
  'heading.small': {
    fontFamily: 'Whyte',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 28,
  },
  'body.xlarge': {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 450,
    lineHeight: 20,
  },
  'body.large': {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 450,
    lineHeight: 20,
  },
  'body.medium': {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: 450,
    lineHeight: 16,
  },
  'body.small': {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 450,
    lineHeight: 16,
  },
  caption: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 16,
  },
  code: {
    fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
};
