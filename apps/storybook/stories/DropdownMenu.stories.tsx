import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu, Button } from '@figui3/components';

const meta: Meta = {
  title: 'Components/DropdownMenu',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A menu displaying a set of actions, triggered by a button. Supports submenus, checkbox items, radio items, separators, and groups.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// ============================================================================
// Basic
// ============================================================================

export const Basic: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Item>Copy link</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

// ============================================================================
// With Shortcuts
// ============================================================================

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">Edit</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item shortcut="⌘Z">Undo</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⇧⌘Z">Redo</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘X">Cut</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘C">Copy</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘V">Paste</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘A">Select All</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

// ============================================================================
// With Submenu
// ============================================================================

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>New File</DropdownMenu.Item>
        <DropdownMenu.Item>Open...</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Email</DropdownMenu.Item>
            <DropdownMenu.Item>Messages</DropdownMenu.Item>
            <DropdownMenu.Item>Slack</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Export as</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>PNG</DropdownMenu.Item>
            <DropdownMenu.Item>JPG</DropdownMenu.Item>
            <DropdownMenu.Item>SVG</DropdownMenu.Item>
            <DropdownMenu.Item>PDF</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Close</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

// ============================================================================
// With Checkbox Items
// ============================================================================

export const WithCheckboxItems: Story = {
  render: function CheckboxExample() {
    const [showGrid, setShowGrid] = React.useState(true);
    const [showRulers, setShowRulers] = React.useState(false);
    const [showGuides, setShowGuides] = React.useState(true);

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
          <DropdownMenu.CheckboxItem checked={showGuides} onCheckedChange={setShowGuides}>
            Guides
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
};

// ============================================================================
// With Radio Items
// ============================================================================

export const WithRadioItems: Story = {
  render: function RadioExample() {
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
  },
};

// ============================================================================
// With Groups
// ============================================================================

export const WithGroups: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">More</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Label>Actions</DropdownMenu.Label>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Label>Danger Zone</DropdownMenu.Label>
          <DropdownMenu.Item>Archive</DropdownMenu.Item>
          <DropdownMenu.Item>Delete</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

// ============================================================================
// Disabled Items
// ============================================================================

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Duplicate (disabled)</DropdownMenu.Item>
        <DropdownMenu.Item>Copy link</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item disabled>Delete (disabled)</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

// ============================================================================
// Complex Example
// ============================================================================

export const ComplexExample: Story = {
  render: function ComplexMenu() {
    const [bookmarks, setBookmarks] = React.useState(true);
    const [fullUrls, setFullUrls] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="primary">Menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content style={{ minWidth: 220 }}>
          <DropdownMenu.Item shortcut="⌘T">New Tab</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘N">New Window</DropdownMenu.Item>
          <DropdownMenu.Item disabled>New Private Window</DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More Tools</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item shortcut="⌘S">Save Page As...</DropdownMenu.Item>
              <DropdownMenu.Item>Create Shortcut...</DropdownMenu.Item>
              <DropdownMenu.Item>Name Window...</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
            Show Bookmarks
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={fullUrls} onCheckedChange={setFullUrls}>
            Show Full URLs
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator />
          <DropdownMenu.Label>People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem value="pedro">Pedro</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="colm">Colm</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  },
};
