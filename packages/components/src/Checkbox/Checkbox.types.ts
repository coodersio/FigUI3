/**
 * Checkbox Component Types
 *
 * Based on Figma UI3 Design System and Radix UI Checkbox primitive
 */

import * as RadixCheckbox from '@radix-ui/react-checkbox';

/**
 * Checkbox checked state
 * - true: Checked (shows check icon)
 * - false: Unchecked (empty box)
 * - 'indeterminate': Mixed/partial state (shows minus icon)
 */
export type CheckedState = boolean | 'indeterminate';

/**
 * Base Checkbox Props
 */
export interface CheckboxProps
  extends Omit<
    RadixCheckbox.CheckboxProps,
    'asChild' | 'defaultChecked' | 'checked' | 'onCheckedChange'
  > {
  /**
   * The controlled checked state of the checkbox
   * @default undefined (uncontrolled)
   */
  checked?: CheckedState;

  /**
   * The default checked state when uncontrolled
   * @default false
   */
  defaultChecked?: CheckedState;

  /**
   * Event handler called when the checked state changes
   */
  onCheckedChange?: (checked: CheckedState) => void;

  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Label text displayed next to the checkbox
   */
  label?: React.ReactNode;

  /**
   * Description text displayed below the label
   * Provides additional context or help text
   */
  description?: React.ReactNode;

  /**
   * Whether the checkbox is required in a form
   * @default false
   */
  required?: boolean;

  /**
   * The name of the checkbox in a form
   */
  name?: string;

  /**
   * The value of the checkbox when submitted in a form
   * @default 'on'
   */
  value?: string;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: React.CSSProperties;

  /**
   * ID for the checkbox element
   */
  id?: string;
}
