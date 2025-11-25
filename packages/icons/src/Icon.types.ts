/**
 * Icon Component Types
 *
 * Type definitions for icon components from FigUI3 Design System
 */

import { SVGAttributes } from 'react';

/**
 * Icon component props
 */
export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'color'> {
  /**
   * Icon size in pixels
   * @default Default size of the icon (16 or 24)
   */
  size?: number;

  /**
   * Icon color
   * Uses currentColor by default, inheriting from text color
   */
  color?: string;

  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Options for creating an icon component
 */
export interface CreateIconOptions {
  /**
   * SVG path element(s)
   */
  path: React.ReactElement;

  /**
   * Display name for the component
   */
  displayName?: string;

  /**
   * Default size (16 or 24)
   * @default 16
   */
  defaultSize?: 16 | 24;

  /**
   * Custom viewBox
   * @default "0 0 {defaultSize} {defaultSize}"
   */
  viewBox?: string;
}
