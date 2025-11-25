/**
 * Text Component
 *
 * Typography component from FigUI3 Design System
 */

import React from 'react';
import type { TextProps } from './Text.types';
import styles from './Text.module.css';

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  size = 'medium',
  strong = false,
  color = 'default',
  as: Tag = 'span',
  children,
  className = '',
  ...restProps
}) => {
  const classNames = [
    styles.text,
    styles[`text--${variant}`],
    // Size only applies to heading and body variants, not display
    variant !== 'display' && styles[`text--size-${size}`],
    // Strong only applies to body variant
    strong && variant === 'body' && styles['text--strong'],
    styles[`text--color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classNames} {...restProps}>
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';
