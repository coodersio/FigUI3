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
      // Destructure aria-label to ensure it's handled properly for icon-only buttons
      'aria-label': ariaLabel,
      ...restProps
    },
    ref
  ) => {
    const isIconOnly = buttonType === 'icon' || buttonType === 'icon-toggle';

    // Accessibility warning for icon-only buttons without an explicit accessible name
    if (process.env.NODE_ENV !== 'production' && isIconOnly && !ariaLabel && !children) {
      console.warn(
        'Accessibility Warning: Icon-only buttons should have an `aria-label` prop for screen reader users.',
        'Component:', Button.displayName,
        'Props:', { variant, size, buttonType, disabled, loading, iconLead, iconTrail, children, className, htmlType, ariaLabel, ...restProps }
      );
    }

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
        aria-label={ariaLabel} // Pass aria-label to the button element
        {...restProps}
      >
        {loading && (
          <span className="figui-Button__loader">
            <span className="figui-Button__spinner" />
            <span className="visually-hidden">Loading...</span> {/* Visually hidden text */}
          </span>
        )}

        {!loading && iconLead && (
          <span className="figui-Button__icon" aria-hidden={children ? 'true' : undefined}>
            {iconLead}
          </span>
        )}

        {!isIconOnly && children && (
          <span className="figui-Button__text">{children}</span>
        )}

        {isIconOnly && !loading && children && (
          <span className="figui-Button__icon" aria-hidden="true"> {/* Mark icon as aria-hidden */}
            {children}
          </span>
        )}

        {!loading && iconTrail && (
          <span className="figui-Button__icon" aria-hidden={children ? 'true' : undefined}>
            {iconTrail}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
