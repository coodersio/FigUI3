/**
 * RadioGroup Component
 *
 * A set of radio buttons where only one can be selected at a time.
 * Based on Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <RadioGroup.Root value={value} onValueChange={setValue}>
 *   <RadioGroup.Label>
 *     <RadioGroup.Item value="option1" />
 *     Option 1
 *   </RadioGroup.Label>
 *   <RadioGroup.Label>
 *     <RadioGroup.Item value="option2" />
 *     Option 2
 *   </RadioGroup.Label>
 * </RadioGroup.Root>
 *
 * // Vertical layout
 * <RadioGroup.Root orientation="vertical" value={value} onValueChange={setValue}>
 *   ...
 * </RadioGroup.Root>
 * ```
 */

import React, { createContext, useContext } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import type { RootProps, ItemProps, LabelProps } from './RadioGroup.types';

// Context for orientation and disabled state
interface RadioGroupContextValue {
  orientation: 'horizontal' | 'vertical';
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const useRadioGroupContext = () => {
  return useContext(RadioGroupContext);
};

// ============================================================================
// Root
// ============================================================================

const Root = React.forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { orientation = 'horizontal', disabled, className = '', ...rootProps } = props;

  const classNames = ['figui-RadioGroupRoot', className].filter(Boolean).join(' ');

  return (
    <RadioGroupContext.Provider value={{ orientation, disabled }}>
      <RadixRadioGroup.Root
        ref={ref}
        orientation={orientation}
        disabled={disabled}
        className={classNames}
        {...rootProps}
      />
    </RadioGroupContext.Provider>
  );
});

Root.displayName = 'RadioGroup.Root';

// ============================================================================
// Item
// ============================================================================

const Item = React.forwardRef<HTMLButtonElement, ItemProps>((props, ref) => {
  const { className = '', ...itemProps } = props;

  const classNames = ['figui-RadioGroupItem', className].filter(Boolean).join(' ');

  return <RadixRadioGroup.Item ref={ref} className={classNames} {...itemProps} />;
});

Item.displayName = 'RadioGroup.Item';

// ============================================================================
// Label
// ============================================================================

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const context = useRadioGroupContext();
  const { className = '', children, ...labelProps } = props;

  const classNames = ['figui-RadioGroupLabel', className].filter(Boolean).join(' ');

  return (
    <label
      ref={ref}
      className={classNames}
      data-orientation={context?.orientation}
      data-disabled={context?.disabled ? '' : undefined}
      {...labelProps}
    >
      {children}
    </label>
  );
});

Label.displayName = 'RadioGroup.Label';

// ============================================================================
// Export
// ============================================================================

export { Root, Item, Label };
