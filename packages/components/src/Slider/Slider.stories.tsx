/**
 * Slider Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
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
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

// Playground
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [value, setValue] = React.useState([50]);

    return (
      <div style={{ padding: '20px', width: '300px' }}>
        <Slider value={value} onValueChange={setValue} />
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Value: <strong>{value[0]}</strong>
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
      {/* Basic Slider */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Basic Slider
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <BasicSliderExample />
        </div>
        <CodeBlock code={`<Slider value={value} onValueChange={setValue} />`} />
      </div>

      {/* With Range Fill */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Range Fill
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <RangeSliderExample />
        </div>
        <CodeBlock code={`<Slider value={value} onValueChange={setValue} range />`} />
      </div>

      {/* Without Range Fill */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Without Range Fill
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <NoRangeSliderExample />
        </div>
        <CodeBlock code={`<Slider value={value} onValueChange={setValue} range={false} />`} />
      </div>

      {/* With Hints/Ticks */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Hints (Stepper)
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <HintsSliderExample />
        </div>
        <CodeBlock code={`<Slider
  value={value}
  onValueChange={setValue}
  hints={[0, 20, 40, 60, 80, 100]}
  step={20}
/>`} />
      </div>

      {/* With Custom Range Anchor */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Custom Range Anchor (from center)
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <CenterAnchorExample />
        </div>
        <CodeBlock code={`<Slider
  value={value}
  onValueChange={setValue}
  rangeAnchor={50}
/>`} />
      </div>

      {/* Disabled */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <Slider defaultValue={[30]} disabled />
        </div>
        <CodeBlock code={`<Slider defaultValue={[30]} disabled />`} />
      </div>

      {/* Multiple Values (Range) */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Multiple Values (Range Selection)
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <MultipleValuesExample />
        </div>
        <CodeBlock code={`<Slider
  value={values}
  onValueChange={setValues}
  defaultValue={[25, 75]}
/>`} />
      </div>

      {/* Different Min/Max */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Custom Min/Max (0-255)
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <CustomRangeExample />
        </div>
        <CodeBlock code={`<Slider
  value={value}
  onValueChange={setValue}
  min={0}
  max={255}
/>`} />
      </div>

      {/* Real-world Example */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Real-world Example: Opacity
        </h3>
        <div style={{ marginBottom: '12px', width: '300px' }}>
          <OpacityExample />
        </div>
        <CodeBlock code={`<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <span>Opacity</span>
  <Slider value={[opacity]} onValueChange={(v) => setOpacity(v[0])} />
  <span>{opacity}%</span>
</div>`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicSliderExample() {
  const [value, setValue] = React.useState([50]);
  return (
    <div>
      <Slider value={value} onValueChange={setValue} />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Value: {value[0]}
      </p>
    </div>
  );
}

function RangeSliderExample() {
  const [value, setValue] = React.useState([70]);
  return (
    <div>
      <Slider value={value} onValueChange={setValue} range />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Value: {value[0]}
      </p>
    </div>
  );
}

function NoRangeSliderExample() {
  const [value, setValue] = React.useState([50]);
  return (
    <div>
      <Slider value={value} onValueChange={setValue} range={false} />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Value: {value[0]}
      </p>
    </div>
  );
}

function HintsSliderExample() {
  const [value, setValue] = React.useState([40]);
  return (
    <div>
      <Slider
        value={value}
        onValueChange={setValue}
        hints={[0, 20, 40, 60, 80, 100]}
        step={20}
      />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Value: {value[0]}
      </p>
    </div>
  );
}

function CenterAnchorExample() {
  const [value, setValue] = React.useState([70]);
  return (
    <div>
      <Slider value={value} onValueChange={setValue} rangeAnchor={50} />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Value: {value[0]}
      </p>
    </div>
  );
}

function MultipleValuesExample() {
  const [values, setValues] = React.useState([25, 75]);
  return (
    <div>
      <Slider value={values} onValueChange={setValues} />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Values: {values.join(' - ')}
      </p>
    </div>
  );
}

function CustomRangeExample() {
  const [value, setValue] = React.useState([128]);
  return (
    <div>
      <Slider value={value} onValueChange={setValue} min={0} max={255} />
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Value: {value[0]}
      </p>
    </div>
  );
}

function OpacityExample() {
  const [opacity, setOpacity] = React.useState(100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', width: '50px' }}>
        Opacity
      </span>
      <div style={{ flex: 1 }}>
        <Slider value={[opacity]} onValueChange={(v) => setOpacity(v[0])} />
      </div>
      <span style={{ fontSize: '11px', color: 'var(--color-text)', width: '35px', textAlign: 'right' }}>
        {opacity}%
      </span>
    </div>
  );
}
