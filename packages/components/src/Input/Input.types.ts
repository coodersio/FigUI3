/**
 * Input Component Types
 */

import type React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the input
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large';

  /**
   * Whether to select all text on click
   * @default false
   */
  selectOnClick?: boolean;

  /**
   * Leading icon or element
   */
  leadingIcon?: React.ReactNode;

  /**
   * Trailing icon or element
   */
  trailingIcon?: React.ReactNode;

  /**
   * Input ref
   */
  inputRef?: React.Ref<HTMLInputElement>;
}
