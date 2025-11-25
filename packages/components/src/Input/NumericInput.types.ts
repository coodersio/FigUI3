/**
 * NumericInput Component Types
 */

import type React from 'react';

export interface NumericInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'min' | 'max' | 'type' | 'size'> {
  /**
   * The numeric value
   */
  value: number;

  /**
   * Callback when value changes
   */
  onChange: (value: number) => void;

  /**
   * Minimum allowed value
   */
  min?: number;

  /**
   * Maximum allowed value
   */
  max?: number;

  /**
   * Decimal precision (number of decimal places)
   * @default 2
   */
  precision?: number;

  /**
   * Suffix to display (e.g., "px", "%")
   */
  suffix?: string;

  /**
   * Small nudge amount (arrow key)
   * @default 1
   */
  smallNudge?: number;

  /**
   * Big nudge amount (shift + arrow key)
   * @default 10
   */
  bigNudge?: number;

  /**
   * The size of the input
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large';

  /**
   * Leading icon or label element
   */
  leadingIcon?: React.ReactNode;

  /**
   * Input ref
   */
  inputRef?: React.Ref<HTMLInputElement>;
}
