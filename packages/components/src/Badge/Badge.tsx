/**
 * Badge Component
 *
 * Small status and labeling component from FigUI3 Design System
 */

import React from 'react';
import type { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  strong = false,
  iconLead,
  children,
  className = '',
}) => {
  const classNames = [
    'figui-Badge',
    `figui-Badge--${variant}`,
    strong ? 'figui-Badge--strong' : 'figui-Badge--light',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames}>
      {iconLead && <span className="figui-Badge__icon">{iconLead}</span>}
      <span className="figui-Badge__text">{children}</span>
    </span>
  );
};

Badge.displayName = 'Badge';
