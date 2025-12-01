import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import clsx from 'clsx';

type SwitchElement = React.ElementRef<typeof RadixSwitch.Root>;

interface SwitchProps extends Omit<RadixSwitch.SwitchProps, 'asChild'> {
  /** Label text for the switch */
  label?: string;
  /** Description text below the label */
  description?: string;
  /** Size of the switch */
  size?: 'default' | 'small';
}

/**
 * Switch component for toggling between on/off states.
 *
 * Based on Figma UI3 design:
 * - Container: 32px × 16px
 * - Knob: 14px × 14px
 * - Border radius: full
 */
const Switch = React.forwardRef<SwitchElement, SwitchProps>((props, ref) => {
  const { className, label, description, id, disabled, size = 'default', ...switchProps } = props;
  const switchId = id || React.useId();

  const switchElement = (
    <RadixSwitch.Root
      ref={ref}
      id={switchId}
      disabled={disabled}
      className={clsx(
        'figui-SwitchRoot',
        size === 'small' && 'figui-SwitchRoot--small',
        className
      )}
      {...switchProps}
    >
      <RadixSwitch.Thumb className="figui-SwitchThumb" />
    </RadixSwitch.Root>
  );

  // If no label, return just the switch
  if (!label) {
    return switchElement;
  }

  // With label and optional description
  return (
    <div className="figui-SwitchContainer">
      <div className="figui-SwitchRow">
        {switchElement}
        <label
          htmlFor={switchId}
          className={clsx('figui-SwitchLabel', disabled && 'figui-SwitchLabel-disabled')}
        >
          {label}
        </label>
      </div>
      {description && (
        <p
          className={clsx(
            'figui-SwitchDescription',
            disabled && 'figui-SwitchDescription-disabled'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

export type { SwitchProps };
export { Switch };
