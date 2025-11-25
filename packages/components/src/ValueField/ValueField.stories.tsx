/**
 * ValueField Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as ValueField from './ValueField';
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
  title: 'Components/ValueField',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Playground - Single field with label
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [value, setValue] = React.useState(24);

    return (
      <div style={{ padding: '20px' }}>
        <ValueField.Root>
          <ValueField.Label>X</ValueField.Label>
          <ValueField.Numeric value={value} onChange={setValue} />
        </ValueField.Root>
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

// Multiple fields grouped
export const MultipleFields: Story = {
  render: function MultiFieldsExample() {
    const [x, setX] = React.useState(24);
    const [y, setY] = React.useState(48);

    return (
      <div style={{ padding: '20px' }}>
        <ValueField.Multi>
          <ValueField.Root>
            <ValueField.Label>X</ValueField.Label>
            <ValueField.Numeric value={x} onChange={setX} />
          </ValueField.Root>
          <ValueField.Root>
            <ValueField.Label>Y</ValueField.Label>
            <ValueField.Numeric value={y} onChange={setY} />
          </ValueField.Root>
        </ValueField.Multi>
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          X: <strong>{x}</strong>, Y: <strong>{y}</strong>
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
      {/* Single Field with Label */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Single Field with Label
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <SingleField label="X" />
          <SingleField label="Y" />
          <SingleField label="W" />
          <SingleField label="H" />
        </div>
        <CodeBlock code={`<ValueField.Root>
  <ValueField.Label>X</ValueField.Label>
  <ValueField.Numeric value={24} onChange={setValue} />
</ValueField.Root>`} />
      </div>

      {/* Grouped Fields (XY) */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Grouped Fields (Multi)
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <GroupedXY />
          <GroupedWH />
        </div>
        <CodeBlock code={`<ValueField.Multi>
  <ValueField.Root>
    <ValueField.Label>X</ValueField.Label>
    <ValueField.Numeric value={x} onChange={setX} />
  </ValueField.Root>
  <ValueField.Root>
    <ValueField.Label>Y</ValueField.Label>
    <ValueField.Numeric value={y} onChange={setY} />
  </ValueField.Root>
</ValueField.Multi>`} />
      </div>

      {/* Four Fields Grouped (Position) */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Four Fields (Position & Size)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <GroupedXYWH />
        </div>
        <CodeBlock code={`<ValueField.Multi>
  <ValueField.Root>
    <ValueField.Label>X</ValueField.Label>
    <ValueField.Numeric value={x} onChange={setX} />
  </ValueField.Root>
  <ValueField.Root>
    <ValueField.Label>Y</ValueField.Label>
    <ValueField.Numeric value={y} onChange={setY} />
  </ValueField.Root>
  <ValueField.Root>
    <ValueField.Label>W</ValueField.Label>
    <ValueField.Numeric value={w} onChange={setW} />
  </ValueField.Root>
  <ValueField.Root>
    <ValueField.Label>H</ValueField.Label>
    <ValueField.Numeric value={h} onChange={setH} />
  </ValueField.Root>
</ValueField.Multi>`} />
      </div>

      {/* With Min/Max */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Min/Max Constraints
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <FieldWithMinMax />
        </div>
        <CodeBlock code={`<ValueField.Root>
  <ValueField.Label>%</ValueField.Label>
  <ValueField.Numeric value={50} onChange={setValue} min={0} max={100} />
</ValueField.Root>`} />
      </div>

      {/* Disabled State */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled State
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
          <ValueField.Root disabled>
            <ValueField.Label>X</ValueField.Label>
            <ValueField.Numeric value={24} onChange={() => {}} />
          </ValueField.Root>
          <ValueField.Multi disabled>
            <ValueField.Root>
              <ValueField.Label>X</ValueField.Label>
              <ValueField.Numeric value={24} onChange={() => {}} />
            </ValueField.Root>
            <ValueField.Root>
              <ValueField.Label>Y</ValueField.Label>
              <ValueField.Numeric value={48} onChange={() => {}} />
            </ValueField.Root>
          </ValueField.Multi>
        </div>
        <CodeBlock code={`<ValueField.Root disabled>
  <ValueField.Label>X</ValueField.Label>
  <ValueField.Numeric value={24} onChange={setValue} />
</ValueField.Root>

<ValueField.Multi disabled>
  ...
</ValueField.Multi>`} />
      </div>
    </div>
  ),
};

// Helper components
function SingleField({ label }: { label: string }) {
  const [value, setValue] = React.useState(24);
  return (
    <ValueField.Root>
      <ValueField.Label>{label}</ValueField.Label>
      <ValueField.Numeric value={value} onChange={setValue} />
    </ValueField.Root>
  );
}

function GroupedXY() {
  const [x, setX] = React.useState(24);
  const [y, setY] = React.useState(48);
  return (
    <ValueField.Multi>
      <ValueField.Root>
        <ValueField.Label>X</ValueField.Label>
        <ValueField.Numeric value={x} onChange={setX} />
      </ValueField.Root>
      <ValueField.Root>
        <ValueField.Label>Y</ValueField.Label>
        <ValueField.Numeric value={y} onChange={setY} />
      </ValueField.Root>
    </ValueField.Multi>
  );
}

function GroupedWH() {
  const [w, setW] = React.useState(100);
  const [h, setH] = React.useState(50);
  return (
    <ValueField.Multi>
      <ValueField.Root>
        <ValueField.Label>W</ValueField.Label>
        <ValueField.Numeric value={w} onChange={setW} />
      </ValueField.Root>
      <ValueField.Root>
        <ValueField.Label>H</ValueField.Label>
        <ValueField.Numeric value={h} onChange={setH} />
      </ValueField.Root>
    </ValueField.Multi>
  );
}

function GroupedXYWH() {
  const [x, setX] = React.useState(24);
  const [y, setY] = React.useState(48);
  const [w, setW] = React.useState(100);
  const [h, setH] = React.useState(50);
  return (
    <ValueField.Multi>
      <ValueField.Root>
        <ValueField.Label>X</ValueField.Label>
        <ValueField.Numeric value={x} onChange={setX} />
      </ValueField.Root>
      <ValueField.Root>
        <ValueField.Label>Y</ValueField.Label>
        <ValueField.Numeric value={y} onChange={setY} />
      </ValueField.Root>
      <ValueField.Root>
        <ValueField.Label>W</ValueField.Label>
        <ValueField.Numeric value={w} onChange={setW} />
      </ValueField.Root>
      <ValueField.Root>
        <ValueField.Label>H</ValueField.Label>
        <ValueField.Numeric value={h} onChange={setH} />
      </ValueField.Root>
    </ValueField.Multi>
  );
}

function FieldWithMinMax() {
  const [value, setValue] = React.useState(50);
  return (
    <div>
      <ValueField.Root>
        <ValueField.Label>%</ValueField.Label>
        <ValueField.Numeric value={value} onChange={setValue} min={0} max={100} />
      </ValueField.Root>
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-tertiary)' }}>
        Range: 0-100. Try entering values outside this range.
      </p>
    </div>
  );
}
