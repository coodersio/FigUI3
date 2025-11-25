import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import clsx from 'clsx';

// ============================================================================
// Root
// ============================================================================

type RootProps = RadixDialog.DialogProps;

/**
 * Dialog Root - Container for the dialog
 */
const Root = RadixDialog.Root;

// ============================================================================
// Trigger
// ============================================================================

type TriggerElement = React.ElementRef<typeof RadixDialog.Trigger>;
type TriggerProps = Omit<RadixDialog.DialogTriggerProps, 'asChild'>;

/**
 * Dialog Trigger - Element that opens the dialog
 */
const Trigger = React.forwardRef<TriggerElement, TriggerProps>((props, ref) => {
  return <RadixDialog.Trigger ref={ref} {...props} asChild />;
});

Trigger.displayName = 'Dialog.Trigger';

// ============================================================================
// Portal
// ============================================================================

type PortalProps = RadixDialog.DialogPortalProps;

/**
 * Dialog Portal - Renders dialog outside the DOM hierarchy
 */
const Portal = RadixDialog.Portal;

// ============================================================================
// Overlay
// ============================================================================

type OverlayElement = React.ElementRef<typeof RadixDialog.Overlay>;
type OverlayProps = RadixDialog.DialogOverlayProps;

/**
 * Dialog Overlay - Semi-transparent background behind dialog
 */
const Overlay = React.forwardRef<OverlayElement, OverlayProps>((props, ref) => {
  const { className, ...overlayProps } = props;
  return (
    <RadixDialog.Overlay
      ref={ref}
      className={clsx('figui-DialogOverlay', className)}
      {...overlayProps}
    />
  );
});

Overlay.displayName = 'Dialog.Overlay';

// ============================================================================
// Content
// ============================================================================

type ContentElement = React.ElementRef<typeof RadixDialog.Content>;

type DialogPlacement = 'center' | 'bottom';
type DialogSize = 'small' | 'medium' | 'large' | 'fullscreen';

interface ContentProps extends RadixDialog.DialogContentProps {
  /**
   * Dialog placement
   * - center: Centered modal dialog
   * - bottom: Bottom sheet that slides up from bottom
   * @default 'center'
   */
  placement?: DialogPlacement;
  /**
   * Dialog size preset
   * - small: 280px width
   * - medium: 320px width (default)
   * - large: 400px width
   * - fullscreen: Full viewport
   * @default 'medium'
   */
  size?: DialogSize;
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
 * Dialog Content - Main dialog container
 *
 * Based on Figma UI3 design:
 * - Border radius: 13px (radius-large)
 * - Shadow: elevation-500
 * - Background: white
 */
const Content = React.forwardRef<ContentElement, ContentProps>((props, ref) => {
  const {
    children,
    className,
    placement = 'center',
    size = 'medium',
    style,
    width,
    maxWidth,
    height,
    maxHeight,
    ...contentProps
  } = props;

  return (
    <RadixDialog.Content
      ref={ref}
      className={clsx(
        'figui-DialogContent',
        `figui-DialogContent--${placement}`,
        `figui-DialogContent--${size}`,
        className
      )}
      aria-describedby={undefined}
      style={{ ...style, width, maxWidth, height, maxHeight }}
      {...contentProps}
    >
      {children}
    </RadixDialog.Content>
  );
});

Content.displayName = 'Dialog.Content';

// ============================================================================
// Header
// ============================================================================

type HeaderElement = React.ElementRef<'header'>;
type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

/**
 * Dialog Header - Container for title and close button
 *
 * Based on Figma UI3 design:
 * - Height: 40px
 * - Padding: 8px
 * - Bottom border: 1px solid border color
 */
const Header = React.forwardRef<HeaderElement, HeaderProps>((props, ref) => {
  const { children, className, ...headerProps } = props;
  return (
    <header ref={ref} className={clsx('figui-DialogHeader', className)} {...headerProps}>
      {children}
    </header>
  );
});

Header.displayName = 'Dialog.Header';

// ============================================================================
// Title
// ============================================================================

type TitleElement = React.ElementRef<typeof RadixDialog.Title>;
type TitleProps = RadixDialog.DialogTitleProps;

/**
 * Dialog Title - Accessible title for the dialog
 *
 * Based on Figma UI3 design:
 * - Font size: 11px
 * - Font weight: 550 (strong)
 * - Color: text primary
 */
const Title = React.forwardRef<TitleElement, TitleProps>((props, ref) => {
  const { children, className, ...titleProps } = props;
  return (
    <RadixDialog.Title
      ref={ref}
      className={clsx('figui-DialogTitle', className)}
      {...titleProps}
    >
      {children}
    </RadixDialog.Title>
  );
});

Title.displayName = 'Dialog.Title';

// ============================================================================
// Description
// ============================================================================

type DescriptionElement = React.ElementRef<typeof RadixDialog.Description>;
type DescriptionProps = RadixDialog.DialogDescriptionProps;

/**
 * Dialog Description - Optional description for the dialog
 */
const Description = React.forwardRef<DescriptionElement, DescriptionProps>((props, ref) => {
  const { children, className, ...descriptionProps } = props;
  return (
    <RadixDialog.Description
      ref={ref}
      className={clsx('figui-DialogDescription', className)}
      {...descriptionProps}
    >
      {children}
    </RadixDialog.Description>
  );
});

Description.displayName = 'Dialog.Description';

// ============================================================================
// Body
// ============================================================================

type BodyElement = React.ElementRef<'div'>;
type BodyProps = React.ComponentPropsWithoutRef<'div'>;

/**
 * Dialog Body - Main content area
 *
 * Based on Figma UI3 design:
 * - Padding: 8px vertical, 16px horizontal
 */
const Body = React.forwardRef<BodyElement, BodyProps>((props, ref) => {
  const { children, className, ...bodyProps } = props;
  return (
    <div ref={ref} className={clsx('figui-DialogBody', className)} {...bodyProps}>
      {children}
    </div>
  );
});

Body.displayName = 'Dialog.Body';

// ============================================================================
// Footer
// ============================================================================

type FooterElement = React.ElementRef<'footer'>;
type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

/**
 * Dialog Footer - Action buttons area
 *
 * Based on Figma UI3 design:
 * - Height: 40px
 * - Padding: 4px 8px
 * - Top border: 1px solid border color
 * - Actions aligned to the right
 */
const Footer = React.forwardRef<FooterElement, FooterProps>((props, ref) => {
  const { children, className, ...footerProps } = props;
  return (
    <footer ref={ref} className={clsx('figui-DialogFooter', className)} {...footerProps}>
      {children}
    </footer>
  );
});

Footer.displayName = 'Dialog.Footer';

// ============================================================================
// Close
// ============================================================================

type CloseElement = React.ElementRef<typeof RadixDialog.Close>;
type CloseProps = Omit<RadixDialog.DialogCloseProps, 'asChild'>;

/**
 * Dialog Close - Close button (renders children with asChild)
 */
const Close = React.forwardRef<CloseElement, CloseProps>((props, ref) => {
  const { children, ...closeProps } = props;
  return (
    <RadixDialog.Close ref={ref} asChild {...closeProps}>
      {children}
    </RadixDialog.Close>
  );
});

Close.displayName = 'Dialog.Close';

// ============================================================================
// CloseButton (Built-in close button with X icon)
// ============================================================================

type CloseButtonElement = React.ElementRef<typeof RadixDialog.Close>;
interface CloseButtonProps extends Omit<RadixDialog.DialogCloseProps, 'asChild'> {
  /** Accessible label for the close button */
  'aria-label'?: string;
}

/**
 * Dialog CloseButton - Built-in close button with X icon
 */
const CloseButton = React.forwardRef<CloseButtonElement, CloseButtonProps>((props, ref) => {
  const { className, 'aria-label': ariaLabel = 'Close', ...closeProps } = props;
  return (
    <RadixDialog.Close
      ref={ref}
      className={clsx('figui-DialogCloseButton', className)}
      aria-label={ariaLabel}
      {...closeProps}
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor">
        <path d="M1.146 1.146a.5.5 0 0 1 .708 0L5.5 4.793l3.646-3.647a.5.5 0 1 1 .708.708L6.207 5.5l3.647 3.646a.5.5 0 0 1-.708.708L5.5 6.207l-3.646 3.647a.5.5 0 0 1-.708-.708L4.793 5.5 1.146 1.854a.5.5 0 0 1 0-.708Z" />
      </svg>
    </RadixDialog.Close>
  );
});

CloseButton.displayName = 'Dialog.CloseButton';

// ============================================================================
// Exports
// ============================================================================

export type {
  RootProps,
  TriggerProps,
  PortalProps,
  OverlayProps,
  ContentProps,
  HeaderProps,
  TitleProps,
  DescriptionProps,
  BodyProps,
  FooterProps,
  CloseProps,
  CloseButtonProps,
  DialogPlacement,
  DialogSize,
};

export {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Header,
  Title,
  Description,
  Body,
  Footer,
  Close,
  CloseButton,
};
