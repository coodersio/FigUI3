import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';

// ============================================================================
// Provider
// ============================================================================

type TooltipProviderProps = RadixTooltip.TooltipProviderProps;

/**
 * TooltipProvider - Wraps your app to provide tooltip context
 *
 * Should be placed at the root of your application for tooltips to work.
 */
const TooltipProvider = RadixTooltip.Provider;

// ============================================================================
// Content (Internal)
// ============================================================================

type ContentElement = React.ElementRef<typeof RadixTooltip.Content>;

interface ContentProps extends RadixTooltip.TooltipContentProps {}

const Content = React.forwardRef<ContentElement, ContentProps>((props, ref) => {
  const { className, ...contentProps } = props;
  return (
    <RadixTooltip.Content
      ref={ref}
      className={clsx('figui-TooltipContent', className)}
      {...contentProps}
    />
  );
});

Content.displayName = 'Tooltip.Content';

// ============================================================================
// Arrow (Internal)
// ============================================================================

interface ArrowProps extends RadixTooltip.TooltipArrowProps {}

const Arrow = (props: ArrowProps) => {
  const { className, ...arrowProps } = props;
  return (
    <RadixTooltip.Arrow
      className={clsx('figui-TooltipArrow', className)}
      width={12}
      height={6}
      {...arrowProps}
    />
  );
};

// ============================================================================
// Hotkey
// ============================================================================

interface HotkeyProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

/**
 * Tooltip Hotkey component - Displays a keyboard shortcut hint
 *
 * Based on Figma UI3 design:
 * - Color: rgba(255,255,255,0.7)
 * - Same font styling as tooltip text
 */
const Hotkey = React.forwardRef<HTMLSpanElement, HotkeyProps>((props, ref) => {
  const { className, children, ...hotkeyProps } = props;
  return (
    <span
      ref={ref}
      className={clsx('figui-TooltipHotkey', className)}
      {...hotkeyProps}
    >
      {children}
    </span>
  );
});

Hotkey.displayName = 'Tooltip.Hotkey';

// ============================================================================
// Tooltip (Main Component)
// ============================================================================

type TooltipElement = React.ElementRef<typeof RadixTooltip.Content>;

interface TooltipProps extends Omit<RadixTooltip.TooltipProps & RadixTooltip.TooltipContentProps, 'content'> {
  /** The trigger element */
  children: React.ReactNode;
  /** The tooltip content */
  content: React.ReactNode;
  /** Optional container element for the portal */
  container?: HTMLElement | null;
}

/**
 * Tooltip component - Shows contextual information on hover/focus
 *
 * Based on Figma UI3 design:
 * - Background: #1e1e1e (dark tooltip)
 * - Text: white (#ffffff)
 * - Padding: 4px 8px
 * - Border radius: 5px (radius-medium)
 * - Max width: 200px
 * - Font: 11px, font-weight 450
 * - Shadow: elevation-300
 * - Arrow: 12px wide, 6px tall
 */
const Tooltip = React.forwardRef<TooltipElement, TooltipProps>((props, ref) => {
  const {
    // Root props
    defaultOpen,
    open,
    onOpenChange,
    delayDuration = 400,
    disableHoverableContent,
    // Portal props
    container,
    forceMount,
    // Content props
    children,
    content,
    side = 'top',
    sideOffset = 6,
    align = 'center',
    ...contentProps
  } = props;

  const rootProps = {
    defaultOpen,
    open,
    onOpenChange,
    delayDuration,
    disableHoverableContent,
  };

  return (
    <RadixTooltip.Root {...rootProps}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal forceMount={forceMount} container={container}>
        <Content
          ref={ref}
          side={side}
          sideOffset={sideOffset}
          align={align}
          arrowPadding={10}
          collisionPadding={8}
          {...contentProps}
        >
          {content}
          <Arrow />
        </Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
});

Tooltip.displayName = 'Tooltip';

// ============================================================================
// Exports
// ============================================================================

export { TooltipProvider, Tooltip, Hotkey };
export type { TooltipProviderProps, TooltipProps, HotkeyProps };
