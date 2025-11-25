/**
 * DropdownMenu Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as DropdownMenu from './DropdownMenu';
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
  title: 'Components/DropdownMenu',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Playground - Interactive example
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [bookmarks, setBookmarks] = React.useState(true);
    const [theme, setTheme] = React.useState('system');

    return (
      <div style={{ padding: '20px' }}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant="secondary">Open Menu</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item shortcut="⌘N">New File</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘O">Open...</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.CheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
              Show Bookmarks
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.Separator />
            <DropdownMenu.Label>Theme</DropdownMenu.Label>
            <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
              <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
            <DropdownMenu.Separator />
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>More Tools</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
                <DropdownMenu.Item>Extensions</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
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
      {/* Basic Usage */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Basic Usage
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="secondary">Actions</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <CodeBlock code={`<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <Button variant="secondary">Actions</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>Edit</DropdownMenu.Item>
    <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>`} />
      </div>

      {/* With Shortcuts */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Shortcuts
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="secondary">Edit</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘Z">Undo</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⇧⌘Z">Redo</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘C">Copy</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘V">Paste</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <CodeBlock code={`<DropdownMenu.Item shortcut="⌘Z">Undo</DropdownMenu.Item>
<DropdownMenu.Item shortcut="⇧⌘Z">Redo</DropdownMenu.Item>`} />
      </div>

      {/* With Checkbox Items */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Checkbox Items
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <CheckboxExample />
        </div>
        <CodeBlock code={`const [checked, setChecked] = useState(true);

<DropdownMenu.CheckboxItem
  checked={checked}
  onCheckedChange={setChecked}
>
  Show Grid
</DropdownMenu.CheckboxItem>`} />
      </div>

      {/* With Radio Items */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Radio Items
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <RadioExample />
        </div>
        <CodeBlock code={`const [value, setValue] = useState('system');

<DropdownMenu.RadioGroup value={value} onValueChange={setValue}>
  <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
  <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
  <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
</DropdownMenu.RadioGroup>`} />
      </div>

      {/* Disabled Items */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled Items
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="secondary">Actions</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item disabled>Duplicate (disabled)</DropdownMenu.Item>
              <DropdownMenu.Item disabled>Delete (disabled)</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <CodeBlock code={`<DropdownMenu.Item disabled>Disabled Item</DropdownMenu.Item>`} />
      </div>
    </div>
  ),
};

// Helper components
function CheckboxExample() {
  const [showGrid, setShowGrid] = React.useState(true);
  const [showRulers, setShowRulers] = React.useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">View</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Show</DropdownMenu.Label>
        <DropdownMenu.CheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
          Grid
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
          Rulers
        </DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function RadioExample() {
  const [theme, setTheme] = React.useState('system');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">Theme</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Appearance</DropdownMenu.Label>
        <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
