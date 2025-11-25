/**
 * Button Component
 *
 * Versatile button component from FigUI3 Design System
 */

import React from 'react';
import type { ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
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
    },
    ref
  ) => {
    const isIconOnly = buttonType === 'icon' || buttonType === 'icon-toggle';

    const classNames = [
      'figui-Button',
      `figui-Button--${variant}`,
      `figui-Button--${size}`,
      `figui-Button--${buttonType}`,
      disabled && 'figui-Button--disabled',
      loading && 'figui-Button--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        type={htmlType}
        {...restProps}
      >
        {loading && (
          <span className="figui-Button__loader">
            <span className="figui-Button__spinner" />
          </span>
        )}

        {!loading && iconLead && (
          <span className="figui-Button__icon">{iconLead}</span>
        )}

        {!isIconOnly && children && (
          <span className="figui-Button__text">{children}</span>
        )}

        {isIconOnly && !loading && children && (
          <span className="figui-Button__icon">{children}</span>
        )}

        {!loading && iconTrail && (
          <span className="figui-Button__icon">{iconTrail}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
