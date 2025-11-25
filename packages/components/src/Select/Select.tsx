/**
 * Select Component
 *
 * A form control for selecting a single value from a list of options.
 * The selected value is displayed in the trigger.
 *
 * Based on Radix UI Select primitive and Figma UI3 Design System.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select.Root value={value} onValueChange={setValue}>
 *   <Select.Trigger placeholder="Select an option" />
 *   <Select.Content>
 *     <Select.Item value="option1">Option 1</Select.Item>
 *     <Select.Item value="option2">Option 2</Select.Item>
 *     <Select.Item value="option3">Option 3</Select.Item>
 *   </Select.Content>
 * </Select.Root>
 *
 * // With groups
 * <Select.Root>
 *   <Select.Trigger placeholder="Select a font" />
 *   <Select.Content>
 *     <Select.Group>
 *       <Select.Label>Sans-serif</Select.Label>
 *       <Select.Item value="inter">Inter</Select.Item>
 *       <Select.Item value="roboto">Roboto</Select.Item>
 *     </Select.Group>
 *     <Select.Separator />
 *     <Select.Group>
 *       <Select.Label>Serif</Select.Label>
 *       <Select.Item value="georgia">Georgia</Select.Item>
 *     </Select.Group>
 *   </Select.Content>
 * </Select.Root>
 * ```
 */

import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from '@figui3/icons/16';

// ============================================================================
// Root
// ============================================================================

type RootProps = RadixSelect.SelectProps;
const Root = RadixSelect.Root;

// ============================================================================
// Trigger
// ============================================================================

type TriggerElement = React.ElementRef<typeof RadixSelect.Trigger>;
type TriggerProps = {
  placeholder?: string;
  width?: 'auto' | 'full' | 'col1' | 'col2' | 'col3';
  leadingIcon?: React.ReactNode;
} & Omit<RadixSelect.SelectTriggerProps, 'children'>;

const Trigger = React.forwardRef<TriggerElement, TriggerProps>((props, ref) => {
  const { placeholder, className, width = 'auto', leadingIcon, ...triggerProps } = props;

  return (
    <RadixSelect.Trigger
      ref={ref}
      {...triggerProps}
      className={`figui-SelectTrigger ${className || ''}`}
      data-width={width}
    >
      {leadingIcon && (
        <span className="figui-SelectLeadingIcon" aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      <RadixSelect.Value placeholder={placeholder} className="figui-SelectValue" />
      <RadixSelect.Icon className="figui-SelectTriggerIcon">
        <ChevronDown aria-hidden="true" />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
});

Trigger.displayName = 'Select.Trigger';

// ============================================================================
// Content
// ============================================================================

type ContentElement = React.ElementRef<typeof RadixSelect.Content>;
type ContentProps = RadixSelect.SelectContentProps & {
  portal?: boolean;
};

const Content = React.forwardRef<ContentElement, ContentProps>((props, ref) => {
  const { children, portal = true, className, position = 'popper', sideOffset = 4, ...contentProps } = props;
  const Wrapper = portal ? RadixSelect.Portal : React.Fragment;

  return (
    <Wrapper>
      <RadixSelect.Content
        ref={ref}
        {...contentProps}
        className={`figui-MenuContent ${className || ''}`}
        position={position}
        sideOffset={sideOffset}
      >
        <RadixSelect.ScrollUpButton className="figui-SelectScrollButton">
          <ChevronUp aria-hidden="true" />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="figui-SelectViewport">
          {children}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="figui-SelectScrollButton">
          <ChevronDown aria-hidden="true" />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </Wrapper>
  );
});

Content.displayName = 'Select.Content';

// ============================================================================
// Item
// ============================================================================

type ItemElement = React.ElementRef<typeof RadixSelect.Item>;
type ItemProps = RadixSelect.SelectItemProps;

const Item = React.forwardRef<ItemElement, ItemProps>((props, ref) => {
  const { children, className, ...itemProps } = props;

  return (
    <RadixSelect.Item
      ref={ref}
      {...itemProps}
      className={`figui-MenuItem figui-MenuCheckboxItem ${className || ''}`}
    >
      <RadixSelect.ItemIndicator className="figui-MenuItemIndicator">
        <Check aria-hidden="true" />
      </RadixSelect.ItemIndicator>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

Item.displayName = 'Select.Item';

// ============================================================================
// Separator
// ============================================================================

type SeparatorElement = React.ElementRef<typeof RadixSelect.Separator>;
type SeparatorProps = RadixSelect.SelectSeparatorProps;

const Separator = React.forwardRef<SeparatorElement, SeparatorProps>((props, ref) => {
  const { className, ...separatorProps } = props;
  return (
    <RadixSelect.Separator
      ref={ref}
      className={`figui-MenuSeparator ${className || ''}`}
      {...separatorProps}
    />
  );
});

Separator.displayName = 'Select.Separator';

// ============================================================================
// Label
// ============================================================================

type LabelElement = React.ElementRef<typeof RadixSelect.Label>;
type LabelProps = RadixSelect.SelectLabelProps;

const Label = React.forwardRef<LabelElement, LabelProps>((props, ref) => {
  const { className, ...labelProps } = props;
  return (
    <RadixSelect.Label
      ref={ref}
      className={`figui-MenuLabel ${className || ''}`}
      {...labelProps}
    />
  );
});

Label.displayName = 'Select.Label';

// ============================================================================
// Group
// ============================================================================

type GroupElement = React.ElementRef<typeof RadixSelect.Group>;
type GroupProps = RadixSelect.SelectGroupProps;

const Group = React.forwardRef<GroupElement, GroupProps>((props, ref) => {
  const { className, ...groupProps } = props;
  return (
    <RadixSelect.Group
      ref={ref}
      className={`figui-MenuGroup ${className || ''}`}
      {...groupProps}
    />
  );
});

Group.displayName = 'Select.Group';

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
};

export {
  Root,
  Trigger,
  Content,
  Item,
  Separator,
  Group,
  Label,
};
