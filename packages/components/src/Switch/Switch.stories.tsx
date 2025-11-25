/**
 * Switch Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
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
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive example
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [checked, setChecked] = React.useState(false);

    return (
      <div style={{ padding: '20px' }}>
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          label="Enable dark mode"
          description="Switch between light and dark theme for the application interface."
        />
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Current state: <strong>{checked ? 'ON' : 'OFF'}</strong>
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
          <BasicSwitch />
        </div>
        <CodeBlock code={`const [checked, setChecked] = useState(false);

<Switch
  checked={checked}
  onCheckedChange={setChecked}
/>`} />
      </div>

      {/* With Label */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Label
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <LabelSwitch />
        </div>
        <CodeBlock code={`<Switch
  checked={checked}
  onCheckedChange={setChecked}
  label="Enable notifications"
/>`} />
      </div>

      {/* With Description */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Description
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <DescriptionSwitch />
        </div>
        <CodeBlock code={`<Switch
  checked={checked}
  onCheckedChange={setChecked}
  label="Enable notifications"
  description="Receive push notifications when someone mentions you."
/>`} />
      </div>

      {/* All States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          All States
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <AllStatesExample />
        </div>
        <CodeBlock code={`// On/Off states
<Switch defaultChecked />
<Switch />

// Disabled states
<Switch disabled defaultChecked />
<Switch disabled />`} />
      </div>

      {/* Disabled States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled States
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Switch disabled label="Off, Disabled" />
          <Switch disabled defaultChecked label="On, Disabled" />
        </div>
        <CodeBlock code={`<Switch disabled label="Off, Disabled" />
<Switch disabled defaultChecked label="On, Disabled" />`} />
      </div>

      {/* Uncontrolled Usage */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Uncontrolled (defaultChecked)
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Switch defaultChecked label="Initially on" />
          <Switch label="Initially off" />
        </div>
        <CodeBlock code={`// Uncontrolled with default values
<Switch defaultChecked label="Initially on" />
<Switch label="Initially off" />`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicSwitch() {
  const [checked, setChecked] = React.useState(false);
  return <Switch checked={checked} onCheckedChange={setChecked} />;
}

function LabelSwitch() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch
      checked={checked}
      onCheckedChange={setChecked}
      label="Enable notifications"
    />
  );
}

function DescriptionSwitch() {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      checked={checked}
      onCheckedChange={setChecked}
      label="Enable notifications"
      description="Receive push notifications when someone mentions you or replies to your comments."
    />
  );
}

function AllStatesExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
          Switch Only
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Switch defaultChecked />
            <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>On</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Switch />
            <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>Off</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Switch disabled defaultChecked />
            <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>Disabled On</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Switch disabled />
            <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>Disabled Off</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
          With Label
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Switch label="On, Normal" defaultChecked />
          <Switch label="Off, Normal" />
          <Switch label="On, Disabled" defaultChecked disabled />
          <Switch label="Off, Disabled" disabled />
        </div>
      </div>
    </div>
  );
}
