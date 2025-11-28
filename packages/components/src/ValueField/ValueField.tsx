/**
 * ValueField Component
 *
 * A compound component for value inputs with labels/prefixes/suffixes.
 * Based on Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Single field with label
 * <ValueField.Root>
 *   <ValueField.Label>X</ValueField.Label>
 *   <ValueField.Numeric value={24} onChange={setValue} />
 * </ValueField.Root>
 *
 * // Multiple fields grouped together
 * <ValueField.Multi>
 *   <ValueField.Root>
 *     <ValueField.Label>X</ValueField.Label>
 *     <ValueField.Numeric value={x} onChange={setX} />
 *   </ValueField.Root>
 *   <ValueField.Root>
 *     <ValueField.Label>Y</ValueField.Label>
 *     <ValueField.Numeric value={y} onChange={setY} />
 *   </ValueField.Root>
 * </ValueField.Multi>
 * ```
 */

import React, { createContext, useContext, useRef, useState, useCallback } from 'react';
import type { RootProps, MultiProps, LabelProps, NumericProps } from './ValueField.types';

// Context for disabled state
interface ValueFieldContextValue {
  disabled?: boolean;
}

const ValueFieldContext = createContext<ValueFieldContextValue | null>(null);

const useValueFieldContext = () => {
  return useContext(ValueFieldContext);
};

// ============================================================================
// Root
// ============================================================================

const Root = React.forwardRef<HTMLLabelElement, RootProps>((props, ref) => {
  const { className = '', disabled, children, ...rootProps } = props;
  const parentContext = useValueFieldContext();

  const isDisabled = disabled ?? parentContext?.disabled;

  const classNames = ['figui-ValueFieldRoot', className].filter(Boolean).join(' ');

  return (
    <ValueFieldContext.Provider value={{ disabled: isDisabled }}>
      <label
        ref={ref}
        className={classNames}
        data-disabled={isDisabled ? '' : undefined}
        {...rootProps}
      >
        {children}
      </label>
    </ValueFieldContext.Provider>
  );
});

Root.displayName = 'ValueField.Root';

// ============================================================================
// Multi
// ============================================================================

const Multi = React.forwardRef<HTMLDivElement, MultiProps>((props, ref) => {
  const { className = '', disabled, children, ...multiProps } = props;

  const classNames = ['figui-ValueFieldMulti', className].filter(Boolean).join(' ');

  return (
    <ValueFieldContext.Provider value={{ disabled }}>
      <div
        ref={ref}
        className={classNames}
        data-disabled={disabled ? '' : undefined}
        {...multiProps}
      >
        {children}
      </div>
    </ValueFieldContext.Provider>
  );
});

Multi.displayName = 'ValueField.Multi';

// ============================================================================
// Label
// ============================================================================

const Label = React.forwardRef<HTMLSpanElement, LabelProps>((props, ref) => {
  const { className = '', ...labelProps } = props;
  const context = useValueFieldContext();

  const classNames = ['figui-ValueFieldLabel', className].filter(Boolean).join(' ');

  return (
    <span
      ref={ref}
      className={classNames}
      data-disabled={context?.disabled ? '' : undefined}
      {...labelProps}
    />
  );
});

Label.displayName = 'ValueField.Label';

// ============================================================================
// Numeric
// ============================================================================

// Helper functions
const clamp = (value: number, min?: number, max?: number): number => {
  let result = value;
  if (min !== undefined && result < min) result = min;
  if (max !== undefined && result > max) result = max;
  return result;
};

const roundToPrecision = (value: number, precision: number): number => {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
};

const parseNumericValue = (
  input: string,
  currentValue: number,
  suffix?: string
): number | null => {
  let cleanInput = input.trim();
  if (suffix && cleanInput.endsWith(suffix)) {
    cleanInput = cleanInput.slice(0, -suffix.length).trim();
  }

  if (cleanInput === '') return null;

  const parsed = parseFloat(cleanInput);
  if (!isNaN(parsed)) {
    return parsed;
  }

  // Handle simple math expressions
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

const formatValue = (value: number, precision: number, suffix?: string): string => {
  const rounded = roundToPrecision(value, precision);
  // Use template literal to naturally remove trailing zeros (like figma-kit)
  const formatted = `${rounded}`;
  return suffix ? `${formatted}${suffix}` : formatted;
};

const Numeric = React.forwardRef<HTMLInputElement, NumericProps>((props, forwardedRef) => {
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
    disabled: disabledProp,
    inputRef,
    onFocus,
    onBlur,
    onKeyDown,
    ...inputProps
  } = props;

  const context = useValueFieldContext();
  const disabled = disabledProp ?? context?.disabled;

  const internalRef = useRef<HTMLInputElement | null>(null);
  const [editingValue, setEditingValue] = useState<string | null>(null);

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

  const displayValue = editingValue !== null ? editingValue : formatValue(value, precision, suffix);

  const submit = useCallback(
    (input: string) => {
      const parsed = parseNumericValue(input, value, suffix);
      if (parsed === null) {
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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(e.target.value);
  }, []);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      requestAnimationFrame(() => {
        e.target.select();
      });
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      submit(e.target.value);
      onBlur?.(e);
    },
    [submit, onBlur]
  );

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

        const currentInput = editingValue ?? formatValue(value, precision, suffix);
        const parsed = parseNumericValue(currentInput, value, suffix) ?? value;

        const nudge = e.shiftKey ? bigNudge : smallNudge;
        const amount = e.key === 'ArrowUp' ? nudge : -nudge;
        const newValue = clamp(roundToPrecision(parsed + amount, precision), min, max);

        onChange(newValue);
        setEditingValue(null);

        requestAnimationFrame(() => {
          e.currentTarget.select();
        });
      }

      onKeyDown?.(e);
    },
    [value, onChange, editingValue, smallNudge, bigNudge, min, max, precision, suffix, submit, onKeyDown]
  );

  const inputClasses = ['figui-ValueFieldNumeric', `figui-ValueFieldNumeric--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      ref={setRef}
      type="text"
      inputMode="decimal"
      autoComplete="off"
      spellCheck="false"
      className={inputClasses}
      value={displayValue}
      disabled={disabled}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...inputProps}
    />
  );
});

Numeric.displayName = 'ValueField.Numeric';

// ============================================================================
// Export
// ============================================================================

export { Root, Multi, Label, Numeric };
