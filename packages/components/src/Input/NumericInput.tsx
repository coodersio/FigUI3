/**
 * NumericInput Component
 *
 * A specialized input for numeric values with increment/decrement support.
 * Based on Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <NumericInput value={24} onChange={setValue} />
 *
 * // With suffix
 * <NumericInput value={100} onChange={setValue} suffix="px" />
 *
 * // With min/max
 * <NumericInput value={50} onChange={setValue} min={0} max={100} suffix="%" />
 *
 * // With precision
 * <NumericInput value={3.14} onChange={setValue} precision={2} />
 * ```
 */

import React, { useRef, useState, useCallback } from 'react';
import type { NumericInputProps } from './NumericInput.types';

// Clamp value between min and max
const clamp = (value: number, min?: number, max?: number): number => {
  let result = value;
  if (min !== undefined && result < min) result = min;
  if (max !== undefined && result > max) result = max;
  return result;
};

// Round to precision
const roundToPrecision = (value: number, precision: number): number => {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
};

// Parse numeric value from string, handling expressions
const parseNumericValue = (
  input: string,
  currentValue: number,
  suffix?: string
): number | null => {
  // Remove suffix if present
  let cleanInput = input.trim();
  if (suffix && cleanInput.endsWith(suffix)) {
    cleanInput = cleanInput.slice(0, -suffix.length).trim();
  }

  // Handle empty input
  if (cleanInput === '') return null;

  // Try to parse as number
  const parsed = parseFloat(cleanInput);
  if (!isNaN(parsed)) {
    return parsed;
  }

  // Handle simple math expressions like +10, -5, *2, /2
  if (/^[+\-*/]/.test(cleanInput)) {
    const operator = cleanInput[0];
    const operand = parseFloat(cleanInput.slice(1));
    if (!isNaN(operand)) {
      switch (operator) {
        case '+':
          return currentValue + operand;
        case '-':
          return currentValue - operand;
        case '*':
          return currentValue * operand;
        case '/':
          return operand !== 0 ? currentValue / operand : currentValue;
      }
    }
  }

  return null;
};

// Format value for display
const formatValue = (value: number, precision: number, suffix?: string): string => {
  const rounded = roundToPrecision(value, precision);
  // Use template literal to naturally remove trailing zeros (like figma-kit and ValueField)
  const formatted = `${rounded}`;
  // Don't append suffix here - it will be rendered separately as a span
  return formatted;
};

export const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(
  (props, forwardedRef) => {
    const {
      value,
      onChange,
      min,
      max,
      precision = 0,
      suffix,
      smallNudge = 1,
      bigNudge = 10,
      size = 'default',
      className = '',
      leadingIcon,
      disabled,
      inputRef,
      onFocus,
      onBlur,
      onKeyDown,
      ...inputProps
    } = props;

    const internalRef = useRef<HTMLInputElement | null>(null);
    const [editingValue, setEditingValue] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState(false);

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

    // Display value - show editing value while editing, otherwise formatted value
    const displayValue = editingValue !== null ? editingValue : formatValue(value, precision, suffix);

    // Submit the current input value
    const submit = useCallback(
      (input: string) => {
        const parsed = parseNumericValue(input, value, suffix);
        if (parsed === null) {
          // Invalid input, revert
          setEditingValue(null);
          return;
        }

        const clamped = clamp(parsed, min, max);
        const rounded = roundToPrecision(clamped, precision);

        if (rounded !== value) {
          onChange(rounded);
        }
        setEditingValue(null);
      },
      [value, onChange, min, max, precision, suffix]
    );

    // Handle input change
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setEditingValue(e.target.value);
    }, []);

    // Handle focus
    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        // Select all text on focus
        requestAnimationFrame(() => {
          e.target.select();
        });
        onFocus?.(e);
      },
      [onFocus]
    );

    // Handle blur
    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        submit(e.target.value);
        onBlur?.(e);
      },
      [submit, onBlur]
    );

    // Handle keyboard
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submit(e.currentTarget.value);
          e.currentTarget.blur();
        }

        if (e.key === 'Escape') {
          e.preventDefault();
          setEditingValue(null);
          requestAnimationFrame(() => {
            e.currentTarget.blur();
          });
        }

        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault();

          // Parse current editing value or use prop value
          const currentInput = editingValue ?? formatValue(value, precision, suffix);
          const parsed = parseNumericValue(currentInput, value, suffix) ?? value;

          const nudge = e.shiftKey ? bigNudge : smallNudge;
          const amount = e.key === 'ArrowUp' ? nudge : -nudge;
          const newValue = clamp(roundToPrecision(parsed + amount, precision), min, max);

          onChange(newValue);
          setEditingValue(null);

          // Select all after update
          requestAnimationFrame(() => {
            e.currentTarget.select();
          });
        }

        onKeyDown?.(e);
      },
      [value, onChange, editingValue, smallNudge, bigNudge, min, max, precision, suffix, submit, onKeyDown]
    );

    const wrapperClasses = [
      'figui-NumericInput',
      `figui-NumericInput--${size}`,
      disabled && 'figui-NumericInput--disabled',
      isFocused && 'figui-NumericInput--focused',
      leadingIcon && 'figui-NumericInput--has-leading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label
        className={wrapperClasses}
        data-disabled={disabled ? '' : undefined}
      >
        {leadingIcon && (
          <span className="figui-NumericInput__label">
            {leadingIcon}
          </span>
        )}
        <input
          ref={setRef}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          spellCheck="false"
          className="figui-NumericInput__input"
          value={displayValue}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          {...inputProps}
        />
        {suffix && !leadingIcon && (
          <span className="figui-NumericInput__suffix">
            {suffix}
          </span>
        )}
      </label>
    );
  }
);

NumericInput.displayName = 'NumericInput';
