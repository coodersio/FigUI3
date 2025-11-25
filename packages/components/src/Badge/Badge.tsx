/**
 * Badge Component
 *
 * Small status and labeling component from FigUI3 Design System
 */

import React from 'react';
import type { BadgeProps } from './Badge.types';
import styles from './Badge.module.css';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  strong = false,
  iconLead,
  children,
  className = '',
}) => {
  const classNames = [
    styles.badge,
    styles[`badge--${variant}`],
    strong ? styles['badge--strong'] : styles['badge--light'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames}>
      {iconLead && <span className={styles.badge__icon}>{iconLead}</span>}
      <span className={styles.badge__text}>{children}</span>
    </span>
  );
};

Badge.displayName = 'Badge';
