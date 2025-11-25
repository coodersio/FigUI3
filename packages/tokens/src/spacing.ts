/**
 * Spacing System
 *
 * 8px grid system with multipliers
 * Values are in pixels
 */

export const spacing = {
  0: 0,
  0.5: 4,   // 0.5x
  1: 8,     // 1x (base)
  1.5: 12,  // 1.5x
  2: 16,    // 2x
  2.5: 20,  // 2.5x
  3: 24,    // 3x
  4: 32,    // 4x
  5: 40,    // 5x
  6: 48,    // 6x
  8: 64,    // 8x
  10: 80,   // 10x
  12: 96,   // 12x
  16: 128,  // 16x
  20: 160,  // 20x
  24: 192,  // 24x
} as const;

export type SpacingKey = keyof typeof spacing;
