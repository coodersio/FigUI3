/**
 * Checkbox Component
 *
 * A control that allows the user to toggle between checked and unchecked states.
 * Supports indeterminate (mixed) state for parent checkboxes with nested children.
 *
 * Based on Radix UI Checkbox primitive and Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Checkbox checked={checked} onCheckedChange={setChecked} />
 *
 * // With label
 * <Checkbox
 *   checked={checked}
 *   onCheckedChange={setChecked}
 *   label="Accept terms and conditions"
 * />
 *
 * // With description
 * <Checkbox
 *   checked={checked}
 *   onCheckedChange={setChecked}
 *   label="Enable notifications"
 *   description="Receive email notifications about updates"
 * />
 *
 * // Indeterminate state
 * <Checkbox checked="indeterminate" label="Select all" />
 * ```
 */

import React, { useId } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from '@figui3/icons/16';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      disabled = false,
      label,
      description,
      required = false,
      name,
      value = 'on',
      className,
      style,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const labelId = `${id}-label`;
    const descriptionId = description ? `${id}-description` : undefined;

    // Determine if we should show the indicator
    const showIndicator = checked === true || checked === 'indeterminate';

    return (
      <div
        className={`figui-Checkbox__wrapper ${className || ''}`}
        style={style}
        data-disabled={disabled ? '' : undefined}
      >
        <div className="figui-Checkbox__container">
          <RadixCheckbox.Root
            ref={ref}
            id={id}
            className="figui-Checkbox__root"
            checked={checked}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={required}
            name={name}
            value={value}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={descriptionId}
            {...props}
          >
            <RadixCheckbox.Indicator
              className="figui-Checkbox__indicator"
              forceMount
              data-state={
                checked === 'indeterminate'
                  ? 'indeterminate'
                  : checked
                  ? 'checked'
                  : 'unchecked'
              }
            >
              {showIndicator && (
                <>
                  {checked === 'indeterminate' ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="figui-Checkbox__icon"
                    >
                      <path
                        d="M4 8H12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <Check size={16} className="figui-Checkbox__icon" aria-hidden="true" />
                  )}
                </>
              )}
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>

          {(label || description) && (
            <div className="figui-Checkbox__labelWrapper">
              {label && (
                <label
                  id={labelId}
                  htmlFor={id}
                  className="figui-Checkbox__label"
                  data-disabled={disabled ? '' : undefined}
                >
                  {label}
                  {required && (
                    <span className="figui-Checkbox__required" aria-label="required">
                      {' '}
                      *
                    </span>
                  )}
                </label>
              )}

              {description && (
                <div
                  id={descriptionId}
                  className="figui-Checkbox__description"
                  data-disabled={disabled ? '' : undefined}
                >
                  {description}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
