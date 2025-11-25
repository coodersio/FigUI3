import * as React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import clsx from 'clsx';

// ============================================================================
// Root
// ============================================================================

type RootProps = RadixPopover.PopoverProps;

/**
 * Popover Root - Container for the popover
 */
const Root = RadixPopover.Root;

// ============================================================================
// Trigger
// ============================================================================

type TriggerElement = React.ElementRef<typeof RadixPopover.Trigger>;
type TriggerProps = Omit<RadixPopover.PopoverTriggerProps, 'asChild'>;

/**
 * Popover Trigger - Element that opens the popover
 */
const Trigger = React.forwardRef<TriggerElement, TriggerProps>((props, ref) => {
  return <RadixPopover.Trigger ref={ref} {...props} asChild />;
});

Trigger.displayName = 'Popover.Trigger';

// ============================================================================
// Anchor
// ============================================================================

type AnchorProps = RadixPopover.PopoverAnchorProps;

/**
 * Popover Anchor - Custom anchor element for positioning
 */
const Anchor = RadixPopover.Anchor;

// ============================================================================
// Portal
// ============================================================================

type PortalProps = RadixPopover.PopoverPortalProps;

/**
 * Popover Portal - Renders popover outside the DOM hierarchy
 */
const Portal = RadixPopover.Portal;

// ============================================================================
// Content
// ============================================================================

type ContentElement = React.ElementRef<typeof RadixPopover.Content>;

interface ContentProps extends RadixPopover.PopoverContentProps {
  /** Custom width override */
  width?: React.CSSProperties['width'];
  /** Custom max width override */
  maxWidth?: React.CSSProperties['maxWidth'];
  /** Custom height override */
  height?: React.CSSProperties['height'];
  /** Custom max height override */
  maxHeight?: React.CSSProperties['maxHeight'];
}

/**
 * Popover Content - Main popover container
 *
 * Shares styling with Dialog:
 * - Border radius: 13px (radius-large)
 * - Shadow: elevation-500
 * - Background: white
 */
const Content = React.forwardRef<ContentElement, ContentProps>((props, ref) => {
  const {
    children,
    className,
    style,
    width,
    maxWidth,
    height,
    maxHeight,
    sideOffset = 4,
    collisionPadding = 8,
    ...contentProps
  } = props;

  return (
    <RadixPopover.Content
      ref={ref}
      className={clsx('figui-PopoverContent', className)}
      style={{ ...style, width, maxWidth, height, maxHeight }}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      {...contentProps}
    >
      {children}
    </RadixPopover.Content>
  );
});

Content.displayName = 'Popover.Content';

// ============================================================================
// Arrow
// ============================================================================

type ArrowProps = RadixPopover.PopoverArrowProps;

/**
 * Popover Arrow - Optional arrow pointing to trigger
 */
const Arrow = React.forwardRef<SVGSVGElement, ArrowProps>((props, ref) => {
  const { className, ...arrowProps } = props;
  return (
    <RadixPopover.Arrow
      ref={ref}
      className={clsx('figui-PopoverArrow', className)}
      {...arrowProps}
    />
  );
});

Arrow.displayName = 'Popover.Arrow';

// ============================================================================
// Header
// ============================================================================

type HeaderElement = React.ElementRef<'header'>;
type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

/**
 * Popover Header - Container for title and close button
 */
const Header = React.forwardRef<HeaderElement, HeaderProps>((props, ref) => {
  const { children, className, ...headerProps } = props;
  return (
    <header ref={ref} className={clsx('figui-PopoverHeader', className)} {...headerProps}>
      {children}
    </header>
  );
});

Header.displayName = 'Popover.Header';

// ============================================================================
// Title
// ============================================================================

type TitleElement = React.ElementRef<'h3'>;
type TitleProps = React.ComponentPropsWithoutRef<'h3'>;

/**
 * Popover Title - Title text
 */
const Title = React.forwardRef<TitleElement, TitleProps>((props, ref) => {
  const { children, className, ...titleProps } = props;
  return (
    <h3 ref={ref} className={clsx('figui-PopoverTitle', className)} {...titleProps}>
      {children}
    </h3>
  );
});

Title.displayName = 'Popover.Title';

// ============================================================================
// Body
// ============================================================================

type BodyElement = React.ElementRef<'div'>;
type BodyProps = React.ComponentPropsWithoutRef<'div'>;

/**
 * Popover Body - Main content area
 */
const Body = React.forwardRef<BodyElement, BodyProps>((props, ref) => {
  const { children, className, ...bodyProps } = props;
  return (
    <div ref={ref} className={clsx('figui-PopoverBody', className)} {...bodyProps}>
      {children}
    </div>
  );
});

Body.displayName = 'Popover.Body';

// ============================================================================
// Close
// ============================================================================

type CloseElement = React.ElementRef<typeof RadixPopover.Close>;
type CloseProps = Omit<RadixPopover.PopoverCloseProps, 'asChild'>;

/**
 * Popover Close - Close button (renders children with asChild)
 */
const Close = React.forwardRef<CloseElement, CloseProps>((props, ref) => {
  const { children, ...closeProps } = props;
  return (
    <RadixPopover.Close ref={ref} asChild {...closeProps}>
      {children}
    </RadixPopover.Close>
  );
});

Close.displayName = 'Popover.Close';

// ============================================================================
// CloseButton (Built-in close button with X icon)
// ============================================================================

type CloseButtonElement = React.ElementRef<typeof RadixPopover.Close>;
interface CloseButtonProps extends Omit<RadixPopover.PopoverCloseProps, 'asChild'> {
  /** Accessible label for the close button */
  'aria-label'?: string;
}

/**
 * Popover CloseButton - Built-in close button with X icon
 */
const CloseButton = React.forwardRef<CloseButtonElement, CloseButtonProps>((props, ref) => {
  const { className, 'aria-label': ariaLabel = 'Close', ...closeProps } = props;
  return (
    <RadixPopover.Close
      ref={ref}
      className={clsx('figui-PopoverCloseButton', className)}
      aria-label={ariaLabel}
      {...closeProps}
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor">
        <path d="M1.146 1.146a.5.5 0 0 1 .708 0L5.5 4.793l3.646-3.647a.5.5 0 1 1 .708.708L6.207 5.5l3.647 3.646a.5.5 0 0 1-.708.708L5.5 6.207l-3.646 3.647a.5.5 0 0 1-.708-.708L4.793 5.5 1.146 1.854a.5.5 0 0 1 0-.708Z" />
      </svg>
    </RadixPopover.Close>
  );
});

CloseButton.displayName = 'Popover.CloseButton';

// ============================================================================
// Exports
// ============================================================================

export type {
  RootProps,
  TriggerProps,
  AnchorProps,
  PortalProps,
  ContentProps,
  ArrowProps,
  HeaderProps,
  TitleProps,
  BodyProps,
  CloseProps,
  CloseButtonProps,
};

export {
  Root,
  Trigger,
  Anchor,
  Portal,
  Content,
  Arrow,
  Header,
  Title,
  Body,
  Close,
  CloseButton,
};
