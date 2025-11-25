/**
 * Popover Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Popover from './Popover';
import { Button } from '../Button';
import '../styles.css';

// Code snippet component
const CodeBlock = ({ code }: { code: string }) => (
  <pre style={{
    backgroundColor: 'var(--color-bg-secondary)',
    padding: '12px',
    borderRadius: 'var(--radius-medium)',
    fontSize: '11px',
    fontFamily: 'Monaco, Consolas, monospace',
    overflow: 'auto',
    margin: 0,
    border: '1px solid var(--color-border)',
  }}>
    <code>{code}</code>
  </pre>
);

const meta = {
  title: 'Components/Popover',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive example
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ padding: '20px' }}>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger>
            <Button>Open Popover</Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              <Popover.Header>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.CloseButton />
              </Popover.Header>
              <Popover.Body>
                This is the popover content. It can contain any elements
                you want to display in a floating panel.
              </Popover.Body>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Popover open: <strong>{open ? 'Yes' : 'No'}</strong>
        </p>
      </div>
    );
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '20px',
      maxWidth: '800px',
    }}>
      {/* Basic Popover */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Basic Popover
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <BasicPopoverExample />
        </div>
        <CodeBlock code={`<Popover.Root>
  <Popover.Trigger>
    <Button>Open Popover</Button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content>
      <Popover.Header>
        <Popover.Title>Title</Popover.Title>
        <Popover.CloseButton />
      </Popover.Header>
      <Popover.Body>Content...</Popover.Body>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>`} />
      </div>

      {/* Popover with Arrow */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Arrow
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <ArrowPopoverExample />
        </div>
        <CodeBlock code={`<Popover.Content>
  <Popover.Arrow />
  <Popover.Body>Content with arrow</Popover.Body>
</Popover.Content>`} />
      </div>

      {/* Different Placements */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Placement Variants
        </h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <PlacementExample side="top" />
          <PlacementExample side="bottom" />
          <PlacementExample side="left" />
          <PlacementExample side="right" />
        </div>
        <CodeBlock code={`<Popover.Content side="top">...</Popover.Content>
<Popover.Content side="bottom">...</Popover.Content>
<Popover.Content side="left">...</Popover.Content>
<Popover.Content side="right">...</Popover.Content>`} />
      </div>

      {/* Simple (No Header) */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Simple (No Header)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <SimplePopoverExample />
        </div>
        <CodeBlock code={`<Popover.Content>
  <Popover.Body>
    A simple popover without header.
  </Popover.Body>
</Popover.Content>`} />
      </div>

      {/* Custom Size */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Custom Size
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <CustomSizeExample />
        </div>
        <CodeBlock code={`<Popover.Content width="400px" maxHeight="200px">
  ...
</Popover.Content>`} />
      </div>

      {/* With Anchor */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Using Anchor
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <AnchorExample />
        </div>
        <CodeBlock code={`<Popover.Root>
  <Popover.Anchor>
    <span>Anchor element</span>
  </Popover.Anchor>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content>
      Positioned relative to anchor
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicPopoverExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Header>
            <Popover.Title>Popover Title</Popover.Title>
            <Popover.CloseButton />
          </Popover.Header>
          <Popover.Body>
            This is the basic popover content with a header and close button.
          </Popover.Body>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function ArrowPopoverExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <Button>With Arrow</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Arrow />
          <Popover.Body style={{ paddingTop: '12px' }}>
            This popover has an arrow pointing to the trigger.
          </Popover.Body>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function PlacementExample({ side }: { side: 'top' | 'bottom' | 'left' | 'right' }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <Button variant="secondary">{side}</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side={side}>
          <Popover.Body>
            Popover on {side}
          </Popover.Body>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function SimplePopoverExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <Button>Simple Popover</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Body>
            A simple popover without header. Click outside to close.
          </Popover.Body>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function CustomSizeExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <Button>Wide Popover</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content width="400px" maxHeight="200px">
          <Popover.Header>
            <Popover.Title>Custom Size</Popover.Title>
            <Popover.CloseButton />
          </Popover.Header>
          <Popover.Body>
            <p>This popover has a custom width of 400px and max-height of 200px.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Popover.Body>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function AnchorExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Anchor asChild>
          <span style={{
            padding: '8px 12px',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-medium)',
            fontSize: '11px',
          }}>
            Anchor Element
          </span>
        </Popover.Anchor>
        <Popover.Trigger>
          <Button variant="secondary">Open</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <Popover.Body>
              This popover is positioned relative to the anchor element, not the trigger button.
            </Popover.Body>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

// Dark mode preview
export const DarkMode: Story = {
  render: function DarkModeExample() {
    const [basicOpen, setBasicOpen] = React.useState(false);
    const [arrowOpen, setArrowOpen] = React.useState(false);

    return (
      <div className="figma-dark" style={{
        backgroundColor: '#2c2c2c',
        padding: '24px',
        borderRadius: '8px',
      }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Popover.Root open={basicOpen} onOpenChange={setBasicOpen}>
            <Popover.Trigger>
              <Button>Basic Popover</Button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="figma-dark">
                <Popover.Header>
                  <Popover.Title>Dark Mode</Popover.Title>
                  <Popover.CloseButton />
                </Popover.Header>
                <Popover.Body>
                  This popover is styled for dark mode.
                </Popover.Body>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Popover.Root open={arrowOpen} onOpenChange={setArrowOpen}>
            <Popover.Trigger>
              <Button>With Arrow</Button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="figma-dark">
                <Popover.Arrow />
                <Popover.Body style={{ paddingTop: '12px' }}>
                  Dark mode popover with arrow.
                </Popover.Body>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
    );
  },
};
