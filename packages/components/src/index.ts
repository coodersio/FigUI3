/**
 * FigUI3 Components
 *
 * React component library implementing Figma UI3 design system
 */

// Avatar
export { Avatar } from './Avatar';
export type {
  AvatarProps,
  AvatarVariant,
  AvatarSize,
  AvatarShape,
  AvatarState,
} from './Avatar';

// Badge
export { Badge } from './Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge';

// Button
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize, ButtonType } from './Button';

// Checkbox
export { Checkbox } from './Checkbox';
export type { CheckboxProps, CheckedState } from './Checkbox';

// DropdownMenu
export * as DropdownMenu from './DropdownMenu';
export type {
  RootProps as DropdownMenuRootProps,
  TriggerProps as DropdownMenuTriggerProps,
  ContentProps as DropdownMenuContentProps,
  ItemProps as DropdownMenuItemProps,
  SeparatorProps as DropdownMenuSeparatorProps,
  GroupProps as DropdownMenuGroupProps,
  LabelProps as DropdownMenuLabelProps,
  SubProps as DropdownMenuSubProps,
  SubTriggerProps as DropdownMenuSubTriggerProps,
  SubContentProps as DropdownMenuSubContentProps,
  CheckboxItemProps as DropdownMenuCheckboxItemProps,
  RadioGroupProps as DropdownMenuRadioGroupProps,
  RadioItemProps as DropdownMenuRadioItemProps,
} from './DropdownMenu';

// Select
export * as Select from './Select';
export type {
  RootProps as SelectRootProps,
  TriggerProps as SelectTriggerProps,
  ContentProps as SelectContentProps,
  ItemProps as SelectItemProps,
  SeparatorProps as SelectSeparatorProps,
  GroupProps as SelectGroupProps,
  LabelProps as SelectLabelProps,
} from './Select';

// Text
export { Text } from './Text';
export type { TextProps, TextVariant, TextSize, TextColor, TextTag } from './Text';
