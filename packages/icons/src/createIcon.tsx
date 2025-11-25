/**
 * Icon Factory Function
 *
 * Creates icon components with consistent API
 */

import React from 'react';
import type { IconProps, CreateIconOptions } from './Icon.types';
import styles from './Icon.module.css';

/**
 * Creates an icon component from SVG path
 *
 * @param options - Icon configuration
 * @returns Icon component
 *
 * @example
 * ```tsx
 * const PlusIcon = createIcon({
 *   path: <path d="M8 3v10M3 8h10" stroke="currentColor" />,
 *   displayName: 'Plus16',
 *   defaultSize: 16,
 * });
 * ```
 */
export function createIcon(options: CreateIconOptions) {
  const {
    path,
    displayName = 'Icon',
    defaultSize = 16,
    viewBox,
  } = options;

  const Component = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {
      size = defaultSize,
      color,
      className = '',
      style,
      ...restProps
    } = props;

    const computedViewBox = viewBox || `0 0 ${defaultSize} ${defaultSize}`;

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={computedViewBox}
        width={size}
        height={size}
        className={[styles.icon, className].filter(Boolean).join(' ')}
        fill="none"
        style={{
          ...style,
          ...(color && { color }),
        }}
        {...restProps}
      >
        {path}
      </svg>
    );
  });

  Component.displayName = displayName;

  return Component;
}
