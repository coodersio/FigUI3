import * as React from 'react';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import { ChevronRight } from '@figui3/icons/16';

// ============================================================================
// Root
// ============================================================================

type RootElement = React.ElementRef<typeof RadixCollapsible.Root>;

interface RootProps extends RadixCollapsible.CollapsibleProps {}

/**
 * Collapsible Root component - Container for the collapsible
 */
const Root = React.forwardRef<RootElement, RootProps>((props, ref) => {
  const { className, ...rootProps } = props;
  return (
    <RadixCollapsible.Root
      ref={ref}
      className={clsx('figui-CollapsibleRoot', className)}
      {...rootProps}
    />
  );
});

Root.displayName = 'Collapsible.Root';

// ============================================================================
// Trigger
// ============================================================================

type TriggerElement = React.ElementRef<typeof RadixCollapsible.Trigger>;

interface TriggerProps extends RadixCollapsible.CollapsibleTriggerProps {
  /**
   * Hide the default chevron indicator
   * @default false
   */
  hideIndicator?: boolean;
}

/**
 * Collapsible Trigger component - Button to toggle the content
 *
 * Based on Figma UI3 design:
 * - Height: 32px (8px padding top/bottom)
 * - Font size: 12px
 * - Font weight: 600 (semibold)
 * - Border radius: 5px
 * - Includes chevron indicator that rotates 90deg when open
 */
const Trigger = React.forwardRef<TriggerElement, TriggerProps>(
  (props, ref) => {
    const { className, children, hideIndicator = false, ...triggerProps } = props;
    return (
      <RadixCollapsible.Trigger
        ref={ref}
        className={clsx('figui-CollapsibleTrigger', className)}
        {...triggerProps}
      >
        {!hideIndicator && (
          <ChevronRight className="figui-CollapsibleIndicator" />
        )}
        {children}
      </RadixCollapsible.Trigger>
    );
  }
);

Trigger.displayName = 'Collapsible.Trigger';

// ============================================================================
// Content
// ============================================================================

type ContentElement = React.ElementRef<typeof RadixCollapsible.Content>;

interface ContentProps extends RadixCollapsible.CollapsibleContentProps {}

/**
 * Collapsible Content component - The expandable content area
 *
 * Animates open/close using CSS animations with Radix's
 * --radix-collapsible-content-height CSS variable
 */
const Content = React.forwardRef<ContentElement, ContentProps>((props, ref) => {
  const { className, ...contentProps } = props;
  return (
    <RadixCollapsible.Content
      ref={ref}
      className={clsx('figui-CollapsibleContent', className)}
      {...contentProps}
    />
  );
});

Content.displayName = 'Collapsible.Content';

// ============================================================================
// Exports
// ============================================================================

export type { RootProps, TriggerProps, ContentProps };
export { Root, Trigger, Content };
