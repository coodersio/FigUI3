/**
 * Slider Component Types
 *
 * Based on Figma UI3 Design System
 */

import type * as RadixSlider from '@radix-ui/react-slider';

/**
 * Slider props extending Radix Slider
 */
export interface SliderProps extends Omit<RadixSlider.SliderProps, 'asChild' | 'children'> {
  /** Show range fill from anchor to current value */
  range?: boolean;
  /** Anchor point for range fill (defaults to min) */
  rangeAnchor?: number;
  /** Base/default value for styling hints */
  baseValue?: number;
  /** Array of hint positions to show tick marks */
  hints?: number[];
}
