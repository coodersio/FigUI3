/**
 * Dialog Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Dialog from './Dialog';
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
  title: 'Components/Dialog',
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
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger>
            <Button>Open Dialog</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content placement="center" size="medium">
              <Dialog.Header>
                <Dialog.Title>Title</Dialog.Title>
                <Dialog.CloseButton />
              </Dialog.Header>
              <Dialog.Body>
                Hello, I'm a dialog, quite a flexible sight, stretch me left,
                stretch me right, in any size, I'll fit just right, adapting to
                your needs, day or night. Mold me, fold me, as you please,
                I'll reshape with the greatest ease, from tiny to wide, I'll be your guide.
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Close>
                  <Button variant="secondary">Button</Button>
                </Dialog.Close>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Dialog open: <strong>{open ? 'Yes' : 'No'}</strong>
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
      {/* Basic Center Dialog */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Center Dialog (Default)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <CenterDialogExample />
        </div>
        <CodeBlock code={`<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content placement="center" size="medium">
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.CloseButton />
      </Dialog.Header>
      <Dialog.Body>Content...</Dialog.Body>
      <Dialog.Footer>
        <Button>Action</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`} />
      </div>

      {/* Bottom Sheet */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Bottom Sheet
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <BottomSheetExample />
        </div>
        <CodeBlock code={`<Dialog.Content placement="bottom">
  <Dialog.Header>
    <Dialog.Title>Bottom Sheet</Dialog.Title>
    <Dialog.CloseButton />
  </Dialog.Header>
  <Dialog.Body>
    This dialog slides up from the bottom.
  </Dialog.Body>
</Dialog.Content>`} />
      </div>

      {/* Size Variants */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Size Variants
        </h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
          <SizeVariantExample size="small" label="Small (280px)" />
          <SizeVariantExample size="medium" label="Medium (320px)" />
          <SizeVariantExample size="large" label="Large (400px)" />
        </div>
        <CodeBlock code={`<Dialog.Content size="small">...</Dialog.Content>
<Dialog.Content size="medium">...</Dialog.Content>
<Dialog.Content size="large">...</Dialog.Content>`} />
      </div>

      {/* Without Header */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Without Header
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <NoHeaderExample />
        </div>
        <CodeBlock code={`<Dialog.Content>
  <Dialog.Body>
    A simple dialog without header.
    You can use Dialog.Close to close it.
  </Dialog.Body>
  <Dialog.Footer>
    <Dialog.Close>
      <Button>Close</Button>
    </Dialog.Close>
  </Dialog.Footer>
</Dialog.Content>`} />
      </div>

      {/* Scrollable Content */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Scrollable Content
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <ScrollableExample />
        </div>
        <CodeBlock code={`<Dialog.Content maxHeight="300px">
  <Dialog.Header>...</Dialog.Header>
  <Dialog.Body>
    {/* Long content that scrolls */}
  </Dialog.Body>
  <Dialog.Footer>...</Dialog.Footer>
</Dialog.Content>`} />
      </div>

      {/* Custom Width */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Custom Width
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <CustomWidthExample />
        </div>
        <CodeBlock code={`<Dialog.Content width="450px" maxWidth="90vw">
  ...
</Dialog.Content>`} />
      </div>
    </div>
  ),
};

// Helper components
function CenterDialogExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Open Center Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content placement="center" size="medium">
          <Dialog.Header>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.CloseButton />
          </Dialog.Header>
          <Dialog.Body>
            Hello, I'm a dialog, quite a flexible sight, stretch me left,
            stretch me right, in any size, I'll fit just right.
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="secondary">Button</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function BottomSheetExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Open Bottom Sheet</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content placement="bottom">
          <Dialog.Header>
            <Dialog.Title>Bottom Sheet</Dialog.Title>
            <Dialog.CloseButton />
          </Dialog.Header>
          <Dialog.Body>
            This dialog slides up from the bottom of the screen.
            It's commonly used for mobile-friendly interactions,
            action sheets, and contextual options.
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="secondary">Cancel</Button>
            </Dialog.Close>
            <Button>Confirm</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function SizeVariantExample({ size, label }: { size: Dialog.DialogSize; label: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button variant="secondary">{label}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content placement="center" size={size}>
          <Dialog.Header>
            <Dialog.Title>{label}</Dialog.Title>
            <Dialog.CloseButton />
          </Dialog.Header>
          <Dialog.Body>
            This dialog uses the "{size}" size preset.
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="secondary">Close</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function NoHeaderExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Open Simple Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content placement="center" size="medium">
          <Dialog.Body style={{ paddingTop: '16px' }}>
            A simple dialog without a header. You can close it using the button below.
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="secondary">Close</Button>
            </Dialog.Close>
            <Button>Confirm</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ScrollableExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Open Scrollable Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content placement="center" size="medium" maxHeight="300px">
          <Dialog.Header>
            <Dialog.Title>Scrollable Content</Dialog.Title>
            <Dialog.CloseButton />
          </Dialog.Header>
          <Dialog.Body>
            <p>This dialog has a fixed height and scrollable content.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, eget aliquam nunc nisi eu nisi.</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="secondary">Close</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CustomWidthExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Open Wide Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content placement="center" width="450px" maxWidth="90vw">
          <Dialog.Header>
            <Dialog.Title>Custom Width Dialog</Dialog.Title>
            <Dialog.CloseButton />
          </Dialog.Header>
          <Dialog.Body>
            This dialog has a custom width of 450px, with a max-width of 90vw
            to ensure it remains responsive on smaller screens.
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="secondary">Cancel</Button>
            </Dialog.Close>
            <Button>Save Changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Dark mode preview
export const DarkMode: Story = {
  render: function DarkModeExample() {
    const [centerOpen, setCenterOpen] = React.useState(false);
    const [bottomOpen, setBottomOpen] = React.useState(false);

    return (
      <div className="figma-dark" style={{
        backgroundColor: '#2c2c2c',
        padding: '24px',
        borderRadius: '8px',
      }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Dialog.Root open={centerOpen} onOpenChange={setCenterOpen}>
            <Dialog.Trigger>
              <Button>Center Dialog</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content placement="center" size="medium" className="figma-dark">
                <Dialog.Header>
                  <Dialog.Title>Dark Mode Dialog</Dialog.Title>
                  <Dialog.CloseButton />
                </Dialog.Header>
                <Dialog.Body>
                  This dialog is styled for dark mode.
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.Close>
                    <Button variant="secondary">Close</Button>
                  </Dialog.Close>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <Dialog.Root open={bottomOpen} onOpenChange={setBottomOpen}>
            <Dialog.Trigger>
              <Button>Bottom Sheet</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content placement="bottom" className="figma-dark">
                <Dialog.Header>
                  <Dialog.Title>Dark Bottom Sheet</Dialog.Title>
                  <Dialog.CloseButton />
                </Dialog.Header>
                <Dialog.Body>
                  A bottom sheet in dark mode.
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.Close>
                    <Button variant="secondary">Cancel</Button>
                  </Dialog.Close>
                  <Button>Confirm</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    );
  },
};
