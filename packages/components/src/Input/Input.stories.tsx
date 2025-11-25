/**
 * Input Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { NumericInput } from './NumericInput';
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
  title: 'Components/Input',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Playground - Text Input
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [value, setValue] = React.useState('');

    return (
      <div style={{ padding: '20px', maxWidth: '300px' }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text..."
        />
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Value: <strong>{value || '(empty)'}</strong>
        </p>
      </div>
    );
  },
};

// Numeric Input Playground
export const NumericPlayground: Story = {
  render: function NumericPlaygroundExample() {
    const [value, setValue] = React.useState(24);

    return (
      <div style={{ padding: '20px' }}>
        <NumericInput
          value={value}
          onChange={setValue}
          min={0}
          max={100}
        />
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Value: <strong>{value}</strong>
        </p>
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-tertiary)' }}>
          Use ↑/↓ arrows to increment/decrement. Hold Shift for ±10.
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
      {/* Basic Text Input */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Text Input
        </h3>
        <div style={{ marginBottom: '12px', maxWidth: '250px' }}>
          <BasicTextInput />
        </div>
        <CodeBlock code={`<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
/>`} />
      </div>

      {/* Text Input States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Text Input States
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '250px' }}>
          <Input placeholder="Default" />
          <Input placeholder="Disabled" disabled />
        </div>
        <CodeBlock code={`<Input placeholder="Default" />
<Input placeholder="Disabled" disabled />`} />
      </div>

      {/* Numeric Input Basic */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Numeric Input
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <BasicNumericInput />
        </div>
        <CodeBlock code={`<NumericInput
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>`} />
      </div>

      {/* Numeric Input with Suffix */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Numeric Input with Suffix
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <NumericWithSuffix suffix="px" />
          <NumericWithSuffix suffix="%" />
          <NumericWithSuffix suffix="°" />
        </div>
        <CodeBlock code={`<NumericInput value={100} onChange={setValue} suffix="px" />
<NumericInput value={50} onChange={setValue} suffix="%" />
<NumericInput value={180} onChange={setValue} suffix="°" />`} />
      </div>

      {/* Numeric Input with Label */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Numeric Input with Label
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <NumericWithLabel label="X" />
          <NumericWithLabel label="Y" />
          <NumericWithLabel label="W" />
          <NumericWithLabel label="H" />
        </div>
        <CodeBlock code={`<NumericInput
  value={24}
  onChange={setValue}
  leadingIcon={<span>X</span>}
/>`} />
      </div>

      {/* Numeric Input with Min/Max */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Numeric Input with Min/Max
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <NumericWithMinMax />
        </div>
        <CodeBlock code={`<NumericInput
  value={50}
  onChange={setValue}
  min={0}
  max={100}
  suffix="%"
/>`} />
      </div>

      {/* Precision Control */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Precision Control
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <NumericWithPrecision precision={0} label="precision=0" />
          <NumericWithPrecision precision={1} label="precision=1" />
          <NumericWithPrecision precision={2} label="precision=2" />
        </div>
        <CodeBlock code={`// Integer (default)
<NumericInput value={3.14} onChange={setValue} precision={0} />  // shows "3"

// One decimal place
<NumericInput value={3.14} onChange={setValue} precision={1} />  // shows "3.1"

// Two decimal places
<NumericInput value={3.14} onChange={setValue} precision={2} />  // shows "3.14"`} />
      </div>

      {/* Disabled State */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled State
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <NumericInput value={24} onChange={() => {}} disabled />
          <NumericInput value={100} onChange={() => {}} suffix="px" disabled />
        </div>
        <CodeBlock code={`<NumericInput value={24} onChange={setValue} disabled />`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicTextInput() {
  const [value, setValue] = React.useState('');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter text..."
    />
  );
}

function BasicNumericInput() {
  const [value, setValue] = React.useState(24);
  return (
    <NumericInput
      value={value}
      onChange={setValue}
      min={0}
      max={100}
    />
  );
}

function NumericWithSuffix({ suffix }: { suffix: string }) {
  const [value, setValue] = React.useState(suffix === '%' ? 50 : suffix === '°' ? 180 : 100);
  return (
    <NumericInput
      value={value}
      onChange={setValue}
      suffix={suffix}
    />
  );
}

function NumericWithLabel({ label }: { label: string }) {
  const [value, setValue] = React.useState(24);
  return (
    <NumericInput
      value={value}
      onChange={setValue}
      leadingIcon={<span style={{ fontSize: '11px' }}>{label}</span>}
    />
  );
}

function NumericWithMinMax() {
  const [value, setValue] = React.useState(50);
  return (
    <div>
      <NumericInput
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        suffix="%"
      />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-tertiary)' }}>
        Range: 0-100%. Try entering values outside this range.
      </p>
    </div>
  );
}

function NumericWithPrecision({ precision, label }: { precision: number; label: string }) {
  const [value, setValue] = React.useState(3.14159);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <NumericInput
        value={value}
        onChange={setValue}
        precision={precision}
        smallNudge={precision === 0 ? 1 : precision === 1 ? 0.1 : 0.01}
        bigNudge={precision === 0 ? 10 : precision === 1 ? 1 : 0.1}
      />
      <span style={{ fontSize: '10px', color: 'var(--color-text-tertiary)' }}>{label}</span>
    </div>
  );
}
