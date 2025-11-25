/**
 * Button Component Types
 *
 * Type definitions for the Button component from FigUI3 Design System
 */

import { ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * Button visual variants
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'secondary-destructive'
  | 'figjam'
  | 'inverse'
  | 'success'
  | 'link'
  | 'link-danger';

/**
 * Button size variants
 */
export type ButtonSize = 'default' | 'large';

/**
 * Button type variants
 */
export type ButtonType =
  | 'default'           // Standard button
  | 'wide'              // Full width button
  | 'icon'              // Icon only button
  | 'icon-toggle'       // Toggle state icon button
  | 'icon-split'        // Split button with dropdown
  | 'icon-dialog-toggle'; // Dialog toggle button

/**
 * Base button component props
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'default'
   */
  size?: ButtonSize;

  /**
   * Button type variant
   * @default 'default'
   */
  buttonType?: ButtonType;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Optional leading icon
   */
  iconLead?: ReactNode;

  /**
   * Optional trailing icon
   */
  iconTrail?: ReactNode;

  /**
   * Button content
   */
  children?: ReactNode;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * HTML button type attribute
   * @default 'button'
   */
  htmlType?: 'button' | 'submit' | 'reset';
}
