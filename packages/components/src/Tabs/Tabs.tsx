import * as React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

// ============================================================================
// Root
// ============================================================================

type RootElement = React.ElementRef<typeof RadixTabs.Root>;

interface RootProps extends RadixTabs.TabsProps {}

/**
 * Tabs Root component - Container for the tabs
 */
const Root = React.forwardRef<RootElement, RootProps>((props, ref) => {
  const { className, ...rootProps } = props;
  return (
    <RadixTabs.Root
      ref={ref}
      className={clsx('figui-TabsRoot', className)}
      {...rootProps}
    />
  );
});

Root.displayName = 'Tabs.Root';

// ============================================================================
// List
// ============================================================================

type ListElement = React.ElementRef<typeof RadixTabs.List>;

interface ListProps extends RadixTabs.TabsListProps {}

/**
 * Tabs List component - Container for tab triggers
 */
const List = React.forwardRef<ListElement, ListProps>((props, ref) => {
  const { className, ...listProps } = props;
  return (
    <RadixTabs.List
      ref={ref}
      className={clsx('figui-TabsList', className)}
      {...listProps}
    />
  );
});

List.displayName = 'Tabs.List';

// ============================================================================
// Trigger
// ============================================================================

type TriggerElement = React.ElementRef<typeof RadixTabs.Trigger>;

interface TriggerProps extends RadixTabs.TabsTriggerProps {}

/**
 * Hardcode the initial trigger width onto the element to prevent layout shifts
 * when the font-weight changes with state.
 */
function useFixedTriggerWidth() {
  return React.useCallback((node: TriggerElement | null) => {
    if (node !== null) {
      node.style.width = node.getBoundingClientRect().width + 'px';
    }
  }, []);
}

/**
 * Compose multiple refs into a single callback ref
 */
function composeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}

/**
 * Tabs Trigger component - Individual tab button
 *
 * Based on Figma UI3 design:
 * - Height: 24px
 * - Padding: 0 8px
 * - Border radius: 5px (radius-medium)
 * - Active: bg-secondary, font-weight 550
 * - Inactive: transparent bg, font-weight 450, text-secondary
 */
const Trigger = React.forwardRef<TriggerElement, TriggerProps>(
  (props, forwardedRef) => {
    const { className, ...triggerProps } = props;
    const triggerRef = useFixedTriggerWidth();
    const ref = composeRefs(forwardedRef, triggerRef);

    return (
      <RadixTabs.Trigger
        ref={ref}
        className={clsx('figui-TabsTrigger', className)}
        {...triggerProps}
      />
    );
  }
);

Trigger.displayName = 'Tabs.Trigger';

// ============================================================================
// Content
// ============================================================================

type ContentElement = React.ElementRef<typeof RadixTabs.Content>;

interface ContentProps extends RadixTabs.TabsContentProps {}

/**
 * Tabs Content component - Content panel for each tab
 */
const Content = React.forwardRef<ContentElement, ContentProps>((props, ref) => {
  const { className, ...contentProps } = props;
  return (
    <RadixTabs.Content
      ref={ref}
      className={clsx('figui-TabsContent', className)}
      {...contentProps}
    />
  );
});

Content.displayName = 'Tabs.Content';

// ============================================================================
// Exports
// ============================================================================

export type { RootProps, ListProps, TriggerProps, ContentProps };
export { Root, List, Trigger, Content };
