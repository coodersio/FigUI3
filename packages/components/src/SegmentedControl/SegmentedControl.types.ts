/**
 * SegmentedControl Component Types
 *
 * Based on Figma UI3 Design System
 */

import type * as RadixToggleGroup from '@radix-ui/react-toggle-group';

/**
 * Root component props
 * Wraps RadixToggleGroup but enforces single selection
 */
export type RootProps = Omit<RadixToggleGroup.ToggleGroupSingleProps, 'type'> & {
  /** Whether the control should take full width of container */
  fullWidth?: boolean;
};

/**
 * Item component props
 * Individual toggle button within the group
 */
export type ItemProps = RadixToggleGroup.ToggleGroupItemProps;
