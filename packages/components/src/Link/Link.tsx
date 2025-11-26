/**
 * Link Component
 *
 * Accessible link component from FigUI3 Design System
 */

import React from 'react';
import styles from './Link.module.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Size variant
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether to render as a child component (for composition)
   */
  asChild?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ size = 'medium', className = '', children, ...props }, ref) => {
    const classNames = [styles.link, styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`], className]
      .filter(Boolean)
      .join(' ');

    return (
      <a ref={ref} className={classNames} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
