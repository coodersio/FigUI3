/**
 * DropdownMenu Component
 *
 * A menu displaying a set of actions, triggered by a button.
 * Supports submenus, checkbox items, radio items, separators, and groups.
 *
 * Based on Radix UI Dropdown Menu primitive and Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * <DropdownMenu.Root>
 *   <DropdownMenu.Trigger>
 *     <Button>Actions</Button>
 *   </DropdownMenu.Trigger>
 *   <DropdownMenu.Content>
 *     <DropdownMenu.Item>Edit</DropdownMenu.Item>
 *     <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
 *     <DropdownMenu.Separator />
 *     <DropdownMenu.Item>Delete</DropdownMenu.Item>
 *   </DropdownMenu.Content>
 * </DropdownMenu.Root>
 * ```
 */

import React from 'react';
import * as RadixMenu from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight } from '@figui3/icons/16';

// ============================================================================
// Root
// ============================================================================

type RootProps = RadixMenu.DropdownMenuProps;
const Root = RadixMenu.Root;

// ============================================================================
// Trigger
// ============================================================================

type TriggerProps = RadixMenu.DropdownMenuTriggerProps;
const Trigger = RadixMenu.Trigger;

// ============================================================================
// Sub
// ============================================================================

type SubProps = RadixMenu.DropdownMenuSubProps;
const Sub = RadixMenu.Sub;

// ============================================================================
// RadioGroup
// ============================================================================

type RadioGroupProps = RadixMenu.DropdownMenuRadioGroupProps;
const RadioGroup = RadixMenu.RadioGroup;

// ============================================================================
// Content
// ============================================================================

type ContentElement = React.ElementRef<typeof RadixMenu.Content>;
type ContentProps = RadixMenu.DropdownMenuContentProps;

const Content = React.forwardRef<ContentElement, ContentProps>((props, ref) => {
  const { children, className, sideOffset = 4, ...contentProps } = props;

  return (
    <RadixMenu.Portal>
      <RadixMenu.Content
        ref={ref}
        sideOffset={sideOffset}
        {...contentProps}
        className={`figui-MenuContent ${className || ''}`}
      >
        {children}
      </RadixMenu.Content>
    </RadixMenu.Portal>
  );
});

Content.displayName = 'DropdownMenu.Content';

// ============================================================================
// Item
// ============================================================================

type ItemElement = React.ElementRef<typeof RadixMenu.Item>;
type ItemProps = RadixMenu.DropdownMenuItemProps & {
  shortcut?: string;
};

const Item = React.forwardRef<ItemElement, ItemProps>((props, ref) => {
  const { className, children, shortcut, ...itemProps } = props;

  return (
    <RadixMenu.Item
      ref={ref}
      {...itemProps}
      className={`figui-MenuItem ${className || ''}`}
    >
      {children}
      {shortcut && <span className="figui-MenuShortcut">{shortcut}</span>}
    </RadixMenu.Item>
  );
});

Item.displayName = 'DropdownMenu.Item';

// ============================================================================
// Separator
// ============================================================================

type SeparatorElement = React.ElementRef<typeof RadixMenu.Separator>;
type SeparatorProps = RadixMenu.DropdownMenuSeparatorProps;

const Separator = React.forwardRef<SeparatorElement, SeparatorProps>((props, ref) => {
  const { className, ...separatorProps } = props;
  return (
    <RadixMenu.Separator
      ref={ref}
      className={`figui-MenuSeparator ${className || ''}`}
      {...separatorProps}
    />
  );
});

Separator.displayName = 'DropdownMenu.Separator';

// ============================================================================
// Label
// ============================================================================

type LabelElement = React.ElementRef<typeof RadixMenu.Label>;
type LabelProps = RadixMenu.DropdownMenuLabelProps;

const Label = React.forwardRef<LabelElement, LabelProps>((props, ref) => {
  const { className, ...labelProps } = props;
  return (
    <RadixMenu.Label
      ref={ref}
      className={`figui-MenuLabel ${className || ''}`}
      {...labelProps}
    />
  );
});

Label.displayName = 'DropdownMenu.Label';

// ============================================================================
// Group
// ============================================================================

type GroupElement = React.ElementRef<typeof RadixMenu.Group>;
type GroupProps = RadixMenu.DropdownMenuGroupProps;

const Group = React.forwardRef<GroupElement, GroupProps>((props, ref) => {
  const { className, ...groupProps } = props;
  return (
    <RadixMenu.Group
      ref={ref}
      className={`figui-MenuGroup ${className || ''}`}
      {...groupProps}
    />
  );
});

Group.displayName = 'DropdownMenu.Group';

// ============================================================================
// SubTrigger
// ============================================================================

type SubTriggerElement = React.ElementRef<typeof RadixMenu.SubTrigger>;
type SubTriggerProps = RadixMenu.DropdownMenuSubTriggerProps;

const SubTrigger = React.forwardRef<SubTriggerElement, SubTriggerProps>((props, ref) => {
  const { children, className, ...subTriggerProps } = props;

  return (
    <RadixMenu.SubTrigger
      ref={ref}
      {...subTriggerProps}
      className={`figui-MenuItem ${className || ''}`}
    >
      {children}
      <ChevronRight className="figui-MenuSubtriggerCaret" aria-hidden="true" />
    </RadixMenu.SubTrigger>
  );
});

SubTrigger.displayName = 'DropdownMenu.SubTrigger';

// ============================================================================
// SubContent
// ============================================================================

type SubContentElement = React.ElementRef<typeof RadixMenu.SubContent>;
type SubContentProps = RadixMenu.DropdownMenuSubContentProps;

const SubContent = React.forwardRef<SubContentElement, SubContentProps>((props, ref) => {
  const { className, sideOffset = 8, ...subContentProps } = props;

  return (
    <RadixMenu.Portal>
      <RadixMenu.SubContent
        ref={ref}
        {...subContentProps}
        className={`figui-MenuContent ${className || ''}`}
        sideOffset={sideOffset}
      />
    </RadixMenu.Portal>
  );
});

SubContent.displayName = 'DropdownMenu.SubContent';

// ============================================================================
// CheckboxItem
// ============================================================================

type CheckboxItemElement = React.ElementRef<typeof RadixMenu.CheckboxItem>;
type CheckboxItemProps = RadixMenu.DropdownMenuCheckboxItemProps;

const CheckboxItem = React.forwardRef<CheckboxItemElement, CheckboxItemProps>((props, ref) => {
  const { children, className, ...itemProps } = props;

  return (
    <RadixMenu.CheckboxItem
      ref={ref}
      {...itemProps}
      className={`figui-MenuItem figui-MenuCheckboxItem ${className || ''}`}
    >
      <RadixMenu.ItemIndicator className="figui-MenuItemIndicator">
        <Check aria-hidden="true" />
      </RadixMenu.ItemIndicator>
      {children}
    </RadixMenu.CheckboxItem>
  );
});

CheckboxItem.displayName = 'DropdownMenu.CheckboxItem';

// ============================================================================
// RadioItem
// ============================================================================

type RadioItemElement = React.ElementRef<typeof RadixMenu.RadioItem>;
type RadioItemProps = RadixMenu.DropdownMenuRadioItemProps;

const RadioItem = React.forwardRef<RadioItemElement, RadioItemProps>((props, ref) => {
  const { children, className, ...itemProps } = props;

  return (
    <RadixMenu.RadioItem
      ref={ref}
      {...itemProps}
      className={`figui-MenuItem figui-MenuRadioItem ${className || ''}`}
    >
      <RadixMenu.ItemIndicator className="figui-MenuItemIndicator">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <circle cx="4" cy="4" r="4" fill="currentColor" />
        </svg>
      </RadixMenu.ItemIndicator>
      {children}
    </RadixMenu.RadioItem>
  );
});

RadioItem.displayName = 'DropdownMenu.RadioItem';

// ============================================================================
// Exports
// ============================================================================

export type {
  RootProps,
  TriggerProps,
  ContentProps,
  ItemProps,
  SeparatorProps,
  GroupProps,
  LabelProps,
  SubProps,
  SubTriggerProps,
  SubContentProps,
  CheckboxItemProps,
  RadioGroupProps,
  RadioItemProps,
};

export {
  Root,
  Trigger,
  Content,
  Item,
  Separator,
  Group,
  Label,
  Sub,
  SubTrigger,
  SubContent,
  CheckboxItem,
  RadioGroup,
  RadioItem,
};
