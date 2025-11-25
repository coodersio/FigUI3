/**
 * RadioGroup Types
 *
 * Compound component for radio button groups.
 */

import type * as RadixRadioGroup from '@radix-ui/react-radio-group';

// Root props
export type RootProps = RadixRadioGroup.RadioGroupProps;

// Item props
export type ItemProps = RadixRadioGroup.RadioGroupItemProps;

// Label props
export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  children: React.ReactNode;
}
