/**
 * Select Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Select from './Select';
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
  title: 'Components/Select',
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
    const [value, setValue] = React.useState('');

    return (
      <div style={{ padding: '20px' }}>
        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger placeholder="Select an option" />
          <Select.Content>
            <Select.Item value="option1">Option 1</Select.Item>
            <Select.Item value="option2">Option 2</Select.Item>
            <Select.Item value="option3">Option 3</Select.Item>
            <Select.Separator />
            <Select.Item value="option4">Option 4</Select.Item>
            <Select.Item value="option5">Option 5</Select.Item>
          </Select.Content>
        </Select.Root>
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Selected: <strong>{value || 'none'}</strong>
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
          <BasicSelect />
        </div>
        <CodeBlock code={`const [value, setValue] = useState('');

<Select.Root value={value} onValueChange={setValue}>
  <Select.Trigger placeholder="Select an option" />
  <Select.Content>
    <Select.Item value="option1">Option 1</Select.Item>
    <Select.Item value="option2">Option 2</Select.Item>
    <Select.Item value="option3">Option 3</Select.Item>
  </Select.Content>
</Select.Root>`} />
      </div>

      {/* With Groups */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Groups
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <GroupedSelect />
        </div>
        <CodeBlock code={`<Select.Root>
  <Select.Trigger placeholder="Select a font" />
  <Select.Content>
    <Select.Group>
      <Select.Label>Sans-serif</Select.Label>
      <Select.Item value="inter">Inter</Select.Item>
      <Select.Item value="roboto">Roboto</Select.Item>
    </Select.Group>
    <Select.Separator />
    <Select.Group>
      <Select.Label>Serif</Select.Label>
      <Select.Item value="georgia">Georgia</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>`} />
      </div>

      {/* Disabled Items */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled Items
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <DisabledSelect />
        </div>
        <CodeBlock code={`<Select.Item value="disabled" disabled>
  Disabled Option
</Select.Item>`} />
      </div>

      {/* Width Options */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Width Options
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <WidthSelect width="auto" label="auto" />
          <WidthSelect width="col1" label="col1" />
          <WidthSelect width="col2" label="col2" />
        </div>
        <CodeBlock code={`<Select.Trigger placeholder="Auto width" width="auto" />
<Select.Trigger placeholder="Column 1" width="col1" />
<Select.Trigger placeholder="Column 2" width="col2" />`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicSelect() {
  const [value, setValue] = React.useState('');

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger placeholder="Select an option" />
      <Select.Content>
        <Select.Item value="option1">Option 1</Select.Item>
        <Select.Item value="option2">Option 2</Select.Item>
        <Select.Item value="option3">Option 3</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}

function GroupedSelect() {
  const [value, setValue] = React.useState('');

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger placeholder="Select a font" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Sans-serif</Select.Label>
          <Select.Item value="inter">Inter</Select.Item>
          <Select.Item value="roboto">Roboto</Select.Item>
          <Select.Item value="opensans">Open Sans</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Serif</Select.Label>
          <Select.Item value="georgia">Georgia</Select.Item>
          <Select.Item value="times">Times New Roman</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

function DisabledSelect() {
  const [value, setValue] = React.useState('');

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger placeholder="Select an option" />
      <Select.Content>
        <Select.Item value="available1">Available Option</Select.Item>
        <Select.Item value="disabled1" disabled>Disabled Option</Select.Item>
        <Select.Item value="available2">Another Available</Select.Item>
        <Select.Item value="disabled2" disabled>Also Disabled</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}

function WidthSelect({ width, label }: { width: 'auto' | 'col1' | 'col2' | 'col3' | 'full'; label: string }) {
  const [value, setValue] = React.useState('');

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger placeholder={label} width={width} />
      <Select.Content>
        <Select.Item value="option1">Option 1</Select.Item>
        <Select.Item value="option2">Option 2</Select.Item>
        <Select.Item value="option3">Option 3</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}

// ICC Profile Example - Test scrolling with many items
export const ICCProfileExample: Story = {
  render: function ICCProfileSelect() {
    const [value, setValue] = React.useState('default');

    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          ICC Profile Select (Scroll Test)
        </h3>
        <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
          This example tests scrolling with many grouped items, similar to the Print Pro plugin.
        </p>

        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="default">
              Default
            </Select.Item>

            <Select.Group>
              <Select.Label>European Standards</Select.Label>
              <Select.Item value="fogra51">
                PSO Coated v3 [FOGRA51] ⭐
              </Select.Item>
              <Select.Item value="fogra39">
                ISO Coated v2 [FOGRA39] (Most Used)
              </Select.Item>
              <Select.Item value="fogra59">
                eciCMYK v2 [FOGRA59]
              </Select.Item>
              <Select.Item value="iso-coated-v2-300">
                ISO Coated v2 300%
              </Select.Item>
              <Select.Item value="coated-fogra39">
                Coated FOGRA39
              </Select.Item>
            </Select.Group>

            <Select.Group>
              <Select.Label>North American Standards</Select.Label>
              <Select.Item value="us-web-coated">
                U.S. Web Coated (SWOP) v2 ⭐
              </Select.Item>
              <Select.Item value="gracol-2006">
                GRACoL 2006 Coated
              </Select.Item>
              <Select.Item value="swop-2006-grade3">
                SWOP 2006 Grade #3
              </Select.Item>
              <Select.Item value="swop-2006-grade5">
                SWOP 2006 Grade #5
              </Select.Item>
            </Select.Group>

            <Select.Group>
              <Select.Label>Japan Standards</Select.Label>
              <Select.Item value="japan-color-2011">
                Japan Color 2011 Coated ⭐
              </Select.Item>
              <Select.Item value="japan-color">
                Japan Color 2001 Coated
              </Select.Item>
              <Select.Item value="japan-color-2003-web">
                Japan Color 2003 Web
              </Select.Item>
              <Select.Item value="japan-color-2001-uncoated">
                Japan Color 2001 Uncoated
              </Select.Item>
              <Select.Item value="japan-color-2002-newspaper">
                Japan Color 2002 Newspaper
              </Select.Item>
              <Select.Item value="japan-web-coated">
                Japan Web Coated (Ad)
              </Select.Item>
            </Select.Group>

            <Select.Item value="custom">
              📁 Upload Your Own ICC File
            </Select.Item>
          </Select.Content>
        </Select.Root>

        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Selected: <strong>{value}</strong>
        </p>
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-tertiary)' }}>
          ✅ Test: Can you scroll to see "Japan Web Coated (Ad)" and "Upload Your Own ICC File"?
        </p>
      </div>
    );
  },
};
