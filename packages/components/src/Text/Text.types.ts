/**
 * Text Component Types
 *
 * Type definitions for the Text component from FigUI3 Design System
 */

import { ReactNode, HTMLAttributes } from 'react';

/**
 * Text typography variants
 */
export type TextVariant =
  | 'display'              // heading/display - Whyte Medium 48/56
  | 'heading'              // heading/* - Inter Semi Bold
  | 'body';                // body/* - Inter Regular/Medium

/**
 * Text size variants
 */
export type TextSize =
  | 'large'                // Large size
  | 'medium'               // Medium size
  | 'small';               // Small size

/**
 * Text semantic HTML tag types
 */
export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

/**
 * Text color variants using design tokens
 */
export type TextColor =
  | 'default'              // var(--color-text)
  | 'secondary'            // var(--color-text-secondary)
  | 'tertiary'             // var(--color-text-tertiary)
  | 'disabled'             // var(--color-text-disabled)
  | 'brand'                // var(--color-text-brand)
  | 'danger'               // var(--color-text-danger)
  | 'warning'              // var(--color-text-warning)
  | 'success'              // var(--color-text-success)
  | 'onbrand'              // var(--color-text-onbrand)
  | 'ondanger'             // var(--color-text-ondanger)
  | 'onwarning'            // var(--color-text-onwarning)
  | 'onsuccess'            // var(--color-text-onsuccess)
  | 'toolbar';             // var(--color-text-toolbar)

/**
 * Base text component props
 */
export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  /**
   * Typography variant
   * @default 'body'
   */
  variant?: TextVariant;

  /**
   * Size variant
   * Only applies to 'heading' and 'body' variants
   * @default 'medium'
   */
  size?: TextSize;

  /**
   * Use strong (bold) variant for body text
   * Only applies to 'body' variant
   * @default false
   */
  strong?: boolean;

  /**
   * Text color from design tokens
   * @default 'default'
   */
  color?: TextColor;

  /**
   * HTML tag to render
   * @default 'span'
   */
  as?: TextTag;

  /**
   * Text content
   */
  children?: ReactNode;

  /**
   * Additional CSS class name
   */
  className?: string;
}
