/**
 * Elevation System
 *
 * 5 shadow levels for light and dark modes
 * Provides depth and hierarchy to UI elements
 */

export type ElevationLevel = 100 | 200 | 300 | 400 | 500;

export type ElevationTokens = Record<ElevationLevel, string>;

export const elevation: { light: ElevationTokens; dark: ElevationTokens } = {
  light: {
    100: '0 1px 2px rgba(0, 0, 0, 0.05)',
    200: '0 2px 4px rgba(0, 0, 0, 0.08)',
    300: '0 4px 8px rgba(0, 0, 0, 0.12)',
    400: '0 8px 16px rgba(0, 0, 0, 0.15)',
    500: '0 16px 32px rgba(0, 0, 0, 0.18)',
  },
  dark: {
    100: '0 1px 2px rgba(0, 0, 0, 0.3)',
    200: '0 2px 4px rgba(0, 0, 0, 0.4)',
    300: '0 4px 8px rgba(0, 0, 0, 0.5)',
    400: '0 8px 16px rgba(0, 0, 0, 0.6)',
    500: '0 16px 32px rgba(0, 0, 0, 0.7)',
  },
};
