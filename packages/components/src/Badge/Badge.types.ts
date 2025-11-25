/**
 * Badge Component Types
 *
 * Type definitions for the Badge component from FigUI3 Design System
 */

import { ReactNode } from 'react';

/**
 * Badge visual variants
 */
export type BadgeVariant =
  | 'default'    // Neutral/generic labels
  | 'invert'     // Inverted colors
  | 'brand'      // Brand colors
  | 'figjam'     // FigJam brand
  | 'danger'     // Destructive/errors
  | 'warning'    // Potential issues
  | 'success'    // Confirmation/approval
  | 'component'  // Component status
  | 'assistive'  // Assistive technology
  | 'merged'     // Merged status
  | 'archived';  // Archived status

/**
 * Badge component props
 */
export interface BadgeProps {
  /**
   * Visual variant of the badge
   * @default 'default'
   */
  variant?: BadgeVariant;

  /**
   * Use strong (filled) style instead of light (outline) style
   * @default false
   */
  strong?: boolean;

  /**
   * Optional leading icon
   */
  iconLead?: ReactNode;

  /**
   * Badge text content
   */
  children: ReactNode;

  /**
   * Additional CSS class name
   */
  className?: string;
}
