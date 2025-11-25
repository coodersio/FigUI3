/**
 * Button Component
 *
 * Versatile button component from FigUI3 Design System
 */

import React from 'react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  buttonType = 'default',
  disabled = false,
  loading = false,
  iconLead,
  iconTrail,
  children,
  className = '',
  htmlType = 'button',
  ...restProps
}) => {
  const isIconOnly = buttonType === 'icon' || buttonType === 'icon-toggle';

  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    styles[`button--${buttonType}`],
    disabled && styles['button--disabled'],
    loading && styles['button--loading'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      type={htmlType}
      {...restProps}
    >
      {loading && (
        <span className={styles.button__loader}>
          <span className={styles.button__spinner} />
        </span>
      )}

      {!loading && iconLead && (
        <span className={styles.button__icon}>{iconLead}</span>
      )}

      {!isIconOnly && children && (
        <span className={styles.button__text}>{children}</span>
      )}

      {isIconOnly && !loading && children && (
        <span className={styles.button__icon}>{children}</span>
      )}

      {!loading && iconTrail && (
        <span className={styles.button__icon}>{iconTrail}</span>
      )}
    </button>
  );
};

Button.displayName = 'Button';
