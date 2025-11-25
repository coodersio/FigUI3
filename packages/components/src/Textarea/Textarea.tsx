/**
 * Textarea Component
 *
 * A multi-line text input field with auto-resize capability.
 * Based on Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Textarea placeholder="Enter description..." />
 *
 * // With rows
 * <Textarea minRows={3} maxRows={10} />
 *
 * // Disabled
 * <Textarea disabled placeholder="Disabled textarea" />
 * ```
 */

import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import type { TextareaAutosizeProps } from 'react-textarea-autosize';
import clsx from 'clsx';

// ============================================================================
// Types
// ============================================================================

type TextareaElement = HTMLTextAreaElement;

interface TextareaProps extends TextareaAutosizeProps {
  /** Custom class name */
  className?: string;
  /** Minimum number of rows */
  minRows?: number;
  /** Maximum number of rows (after which scrolling begins) */
  maxRows?: number;
  /** Whether the textarea is disabled */
  disabled?: boolean;
}

// ============================================================================
// Component
// ============================================================================

/**
 * Textarea - Multi-line text input with auto-resize
 *
 * Uses react-textarea-autosize for automatic height adjustment.
 * Shares visual styling with Input component.
 */
const Textarea = React.forwardRef<TextareaElement, TextareaProps>((props, ref) => {
  const {
    className,
    minRows = 3,
    maxRows,
    disabled,
    ...textareaProps
  } = props;

  return (
    <TextareaAutosize
      ref={ref}
      className={clsx(
        'figui-Textarea',
        disabled && 'figui-Textarea--disabled',
        className
      )}
      minRows={minRows}
      maxRows={maxRows}
      disabled={disabled}
      {...textareaProps}
    />
  );
});

Textarea.displayName = 'Textarea';

// ============================================================================
// Exports
// ============================================================================

export type { TextareaProps };
export { Textarea };
