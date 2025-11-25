/**
 * Input Component
 *
 * A text input field for single-line text entry.
 * Based on Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Input placeholder="Enter text..." />
 *
 * // With value
 * <Input value={value} onChange={(e) => setValue(e.target.value)} />
 *
 * // With leading icon
 * <Input leadingIcon={<SearchIcon />} placeholder="Search..." />
 *
 * // Disabled
 * <Input disabled placeholder="Disabled input" />
 * ```
 */

import React, { useRef, useCallback } from 'react';
import type { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const {
      type = 'text',
      size = 'default',
      className = '',
      selectOnClick = false,
      leadingIcon,
      trailingIcon,
      disabled,
      inputRef,
      ...inputProps
    } = props;

    const internalRef = useRef<HTMLInputElement | null>(null);
    const isMouseDownRef = useRef(false);

    // Combine refs
    const setRef = useCallback(
      (node: HTMLInputElement | null) => {
        internalRef.current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
        if (typeof inputRef === 'function') {
          inputRef(node);
        } else if (inputRef) {
          (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
      },
      [forwardedRef, inputRef]
    );

    // Select on click handlers
    const handleMouseDown = useCallback(() => {
      if (selectOnClick) {
        isMouseDownRef.current = true;
      }
    }, [selectOnClick]);

    const handleMouseUp = useCallback(() => {
      if (selectOnClick && isMouseDownRef.current) {
        isMouseDownRef.current = false;
      }
    }, [selectOnClick]);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (selectOnClick) {
          // Delay to allow click to complete
          requestAnimationFrame(() => {
            e.target.select();
          });
        }
        inputProps.onFocus?.(e);
      },
      [selectOnClick, inputProps.onFocus]
    );

    const handleMouseLeave = useCallback(() => {
      if (selectOnClick) {
        isMouseDownRef.current = false;
      }
    }, [selectOnClick]);

    const classNames = [
      'figui-Input',
      `figui-Input--${size}`,
      disabled && 'figui-Input--disabled',
      leadingIcon && 'figui-Input--has-leading',
      trailingIcon && 'figui-Input--has-trailing',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // If we have icons, wrap in a container
    if (leadingIcon || trailingIcon) {
      return (
        <div
          className={`figui-InputWrapper figui-InputWrapper--${size}`}
          data-disabled={disabled ? '' : undefined}
        >
          {leadingIcon && (
            <span className="figui-Input__icon figui-Input__icon--leading">
              {leadingIcon}
            </span>
          )}
          <input
            ref={setRef}
            type={type}
            className={classNames}
            disabled={disabled}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            {...inputProps}
            onFocus={handleFocus}
          />
          {trailingIcon && (
            <span className="figui-Input__icon figui-Input__icon--trailing">
              {trailingIcon}
            </span>
          )}
        </div>
      );
    }

    return (
      <input
        ref={setRef}
        type={type}
        className={classNames}
        disabled={disabled}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...inputProps}
        onFocus={handleFocus}
      />
    );
  }
);

Input.displayName = 'Input';
