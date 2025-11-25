/**
 * SegmentedControl Component
 *
 * A horizontal control made of multiple segments, each functioning as a toggle button.
 * Based on Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Icon-only segments
 * <SegmentedControl.Root value={value} onValueChange={setValue}>
 *   <SegmentedControl.Item value="left">
 *     <IconAlignLeft />
 *   </SegmentedControl.Item>
 *   <SegmentedControl.Item value="center">
 *     <IconAlignCenter />
 *   </SegmentedControl.Item>
 *   <SegmentedControl.Item value="right">
 *     <IconAlignRight />
 *   </SegmentedControl.Item>
 * </SegmentedControl.Root>
 *
 * // Label segments
 * <SegmentedControl.Root value={value} onValueChange={setValue}>
 *   <SegmentedControl.Item value="design">Design</SegmentedControl.Item>
 *   <SegmentedControl.Item value="prototype">Prototype</SegmentedControl.Item>
 *   <SegmentedControl.Item value="inspect">Inspect</SegmentedControl.Item>
 * </SegmentedControl.Root>
 * ```
 */

import React, { useState } from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import type { RootProps, ItemProps } from './SegmentedControl.types';

// ============================================================================
// Root
// ============================================================================

const Root = React.forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const {
    className = '',
    fullWidth,
    value: valueProp,
    defaultValue,
    onValueChange,
    ...rootProps
  } = props;

  // Internal state for controlled/uncontrolled behavior
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = valueProp !== undefined ? valueProp : internalValue;

  const handleValueChange = (newValue: string) => {
    // Prevent deselecting all items (require at least one selected)
    if (newValue) {
      setInternalValue(newValue);
      onValueChange?.(newValue);
    }
  };

  const classNames = [
    'figui-SegmentedControlRoot',
    fullWidth ? 'figui-full-width' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <RadixToggleGroup.Root
      ref={ref}
      type="single"
      className={classNames}
      value={value}
      onValueChange={handleValueChange}
      {...rootProps}
    />
  );
});

Root.displayName = 'SegmentedControl.Root';

// ============================================================================
// Item
// ============================================================================

const Item = React.forwardRef<HTMLButtonElement, ItemProps>((props, ref) => {
  const { className = '', children, ...itemProps } = props;

  const classNames = ['figui-SegmentedControlItem', className].filter(Boolean).join(' ');

  return (
    <RadixToggleGroup.Item ref={ref} className={classNames} {...itemProps}>
      {children}
    </RadixToggleGroup.Item>
  );
});

Item.displayName = 'SegmentedControl.Item';

// ============================================================================
// Export
// ============================================================================

export { Root, Item };
