/**
 * Tabs Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Tabs from './Tabs';
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
  title: 'Components/Tabs',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive example
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [value, setValue] = React.useState('tab1');

    return (
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <Tabs.Root value={value} onValueChange={setValue}>
          <Tabs.List>
            <Tabs.Trigger value="tab1">Design</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Prototype</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Inspect</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <div style={{ padding: '16px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
              Design tab content - Create and edit your designs here.
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <div style={{ padding: '16px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
              Prototype tab content - Add interactions and animations.
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <div style={{ padding: '16px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
              Inspect tab content - View CSS properties and assets.
            </div>
          </Tabs.Content>
        </Tabs.Root>
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Active tab: <strong>{value}</strong>
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
      {/* Basic Usage */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Basic Usage
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <BasicTabs />
        </div>
        <CodeBlock code={`<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs.Root>`} />
      </div>

      {/* Two Tabs */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Two Tabs
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <TwoTabs />
        </div>
        <CodeBlock code={`<Tabs.Root defaultValue="active">
  <Tabs.List>
    <Tabs.Trigger value="active">Active Tab</Tabs.Trigger>
    <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>`} />
      </div>

      {/* Three Tabs */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Three Tabs
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <ThreeTabs />
        </div>
        <CodeBlock code={`<Tabs.Root defaultValue="active">
  <Tabs.List>
    <Tabs.Trigger value="active">Active tab</Tabs.Trigger>
    <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
    <Tabs.Trigger value="third">Third tab</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>`} />
      </div>

      {/* Four Tabs */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Four Tabs
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <FourTabs />
        </div>
        <CodeBlock code={`<Tabs.Root defaultValue="active">
  <Tabs.List>
    <Tabs.Trigger value="active">Active Tab</Tabs.Trigger>
    <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
    <Tabs.Trigger value="third">Third tab</Tabs.Trigger>
    <Tabs.Trigger value="fourth">Fourth tab</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>`} />
      </div>

      {/* Single Tab */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Single Tab (Title style)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <SingleTab />
        </div>
        <CodeBlock code={`<Tabs.Root defaultValue="single">
  <Tabs.List>
    <Tabs.Trigger value="single">Single Tab Title</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>`} />
      </div>

      {/* Controlled Example */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Controlled
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <ControlledTabs />
        </div>
        <CodeBlock code={`const [value, setValue] = useState('tab1');

<Tabs.Root value={value} onValueChange={setValue}>
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>`} />
      </div>

      {/* With Content */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Content Panels
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <TabsWithContent />
        </div>
        <CodeBlock code={`<Tabs.Root defaultValue="design">
  <Tabs.List>
    <Tabs.Trigger value="design">Design</Tabs.Trigger>
    <Tabs.Trigger value="code">Code</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="design">
    Design panel content...
  </Tabs.Content>
  <Tabs.Content value="code">
    Code panel content...
  </Tabs.Content>
</Tabs.Root>`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicTabs() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

function TwoTabs() {
  return (
    <Tabs.Root defaultValue="active">
      <Tabs.List>
        <Tabs.Trigger value="active">Active Tab</Tabs.Trigger>
        <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

function ThreeTabs() {
  return (
    <Tabs.Root defaultValue="active">
      <Tabs.List>
        <Tabs.Trigger value="active">Active tab</Tabs.Trigger>
        <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
        <Tabs.Trigger value="third">Third tab</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

function FourTabs() {
  return (
    <Tabs.Root defaultValue="active">
      <Tabs.List>
        <Tabs.Trigger value="active">Active Tab</Tabs.Trigger>
        <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
        <Tabs.Trigger value="third">Third tab</Tabs.Trigger>
        <Tabs.Trigger value="fourth">Fourth tab</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

function SingleTab() {
  return (
    <Tabs.Root defaultValue="single">
      <Tabs.List>
        <Tabs.Trigger value="single">Single Tab Title</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

function ControlledTabs() {
  const [value, setValue] = React.useState('tab1');
  return (
    <div>
      <Tabs.Root value={value} onValueChange={setValue}>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Design</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Prototype</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Inspect</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Active: {value}
      </p>
    </div>
  );
}

function TabsWithContent() {
  return (
    <Tabs.Root defaultValue="design">
      <Tabs.List>
        <Tabs.Trigger value="design">Design</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
        <Tabs.Trigger value="assets">Assets</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="design">
        <div style={{
          padding: '12px 0',
          fontSize: '11px',
          color: 'var(--color-text-secondary)',
          lineHeight: '16px',
        }}>
          Design panel - Create and edit your visual designs here. Use the canvas
          to arrange elements and the properties panel to adjust styles.
        </div>
      </Tabs.Content>
      <Tabs.Content value="code">
        <div style={{
          padding: '12px 0',
          fontSize: '11px',
          color: 'var(--color-text-secondary)',
          lineHeight: '16px',
        }}>
          Code panel - View generated code snippets and CSS properties for
          selected elements. Export code in various formats.
        </div>
      </Tabs.Content>
      <Tabs.Content value="assets">
        <div style={{
          padding: '12px 0',
          fontSize: '11px',
          color: 'var(--color-text-secondary)',
          lineHeight: '16px',
        }}>
          Assets panel - Browse and manage images, icons, and components.
          Drag and drop assets onto the canvas to use them.
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}

// Dark mode preview
export const DarkMode: Story = {
  render: () => (
    <div className="figma-dark" style={{
      backgroundColor: '#2c2c2c',
      padding: '24px',
      borderRadius: '8px',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Two Tabs
          </div>
          <Tabs.Root defaultValue="active">
            <Tabs.List>
              <Tabs.Trigger value="active">Active Tab</Tabs.Trigger>
              <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Three Tabs
          </div>
          <Tabs.Root defaultValue="active">
            <Tabs.List>
              <Tabs.Trigger value="active">Active tab</Tabs.Trigger>
              <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
              <Tabs.Trigger value="third">Third tab</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Four Tabs
          </div>
          <Tabs.Root defaultValue="active">
            <Tabs.List>
              <Tabs.Trigger value="active">Active Tab</Tabs.Trigger>
              <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
              <Tabs.Trigger value="third">Third tab</Tabs.Trigger>
              <Tabs.Trigger value="fourth">Fourth tab</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>
    </div>
  ),
};
