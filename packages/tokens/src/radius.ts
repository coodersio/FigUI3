/**
 * Border Radius System
 *
 * Border radius tokens for UI components
 * Values are in pixels
 */

export const radius = {
  none: 0,
  small: 2,
  medium: 5,
  large: 8,
  xlarge: 12,
  full: 9999,
} as const;

export type RadiusKey = keyof typeof radius;
