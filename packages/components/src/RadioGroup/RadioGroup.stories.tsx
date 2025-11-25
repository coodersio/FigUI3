/**
 * RadioGroup Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as RadioGroup from './RadioGroup';
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
  title: 'Components/RadioGroup',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Playground
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [value, setValue] = React.useState('option1');

    return (
      <div style={{ padding: '20px' }}>
        <RadioGroup.Root value={value} onValueChange={setValue}>
          <RadioGroup.Label>
            <RadioGroup.Item value="option1" />
            Option 1
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Item value="option2" />
            Option 2
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Item value="option3" />
            Option 3
          </RadioGroup.Label>
        </RadioGroup.Root>
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Selected: <strong>{value}</strong>
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
      {/* Horizontal Layout */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Horizontal Layout (default)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <HorizontalExample />
        </div>
        <CodeBlock code={`<RadioGroup.Root value={value} onValueChange={setValue}>
  <RadioGroup.Label>
    <RadioGroup.Item value="option1" />
    Option 1
  </RadioGroup.Label>
  <RadioGroup.Label>
    <RadioGroup.Item value="option2" />
    Option 2
  </RadioGroup.Label>
</RadioGroup.Root>`} />
      </div>

      {/* Vertical Layout */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Vertical Layout
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <VerticalExample />
        </div>
        <CodeBlock code={`<RadioGroup.Root orientation="vertical" value={value} onValueChange={setValue}>
  <RadioGroup.Label>
    <RadioGroup.Item value="small" />
    Small
  </RadioGroup.Label>
  <RadioGroup.Label>
    <RadioGroup.Item value="medium" />
    Medium
  </RadioGroup.Label>
  <RadioGroup.Label>
    <RadioGroup.Item value="large" />
    Large
  </RadioGroup.Label>
</RadioGroup.Root>`} />
      </div>

      {/* Radio Only (no labels) */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Radio Only (no labels)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <RadioOnlyExample />
        </div>
        <CodeBlock code={`<RadioGroup.Root value={value} onValueChange={setValue}>
  <RadioGroup.Item value="a" />
  <RadioGroup.Item value="b" />
  <RadioGroup.Item value="c" />
</RadioGroup.Root>`} />
      </div>

      {/* States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          States
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Normal</span>
            <RadioGroup.Root defaultValue="on">
              <RadioGroup.Item value="on" />
              <RadioGroup.Item value="off" />
            </RadioGroup.Root>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Disabled</span>
            <RadioGroup.Root defaultValue="on" disabled>
              <RadioGroup.Item value="on" />
              <RadioGroup.Item value="off" />
            </RadioGroup.Root>
          </div>
        </div>
        <CodeBlock code={`// Disabled
<RadioGroup.Root disabled defaultValue="on">
  <RadioGroup.Item value="on" />
  <RadioGroup.Item value="off" />
</RadioGroup.Root>`} />
      </div>

      {/* With Default Value */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Default Value
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <RadioGroup.Root defaultValue="medium" orientation="vertical">
            <RadioGroup.Label>
              <RadioGroup.Item value="small" />
              Small (12px)
            </RadioGroup.Label>
            <RadioGroup.Label>
              <RadioGroup.Item value="medium" />
              Medium (14px)
            </RadioGroup.Label>
            <RadioGroup.Label>
              <RadioGroup.Item value="large" />
              Large (16px)
            </RadioGroup.Label>
          </RadioGroup.Root>
        </div>
        <CodeBlock code={`<RadioGroup.Root defaultValue="medium" orientation="vertical">
  ...
</RadioGroup.Root>`} />
      </div>

      {/* Real-world Example */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Real-world Example: Export Format
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <ExportFormatExample />
        </div>
        <CodeBlock code={`<RadioGroup.Root orientation="vertical" value={format} onValueChange={setFormat}>
  <RadioGroup.Label>
    <RadioGroup.Item value="png" />
    PNG
  </RadioGroup.Label>
  <RadioGroup.Label>
    <RadioGroup.Item value="jpg" />
    JPG
  </RadioGroup.Label>
  <RadioGroup.Label>
    <RadioGroup.Item value="svg" />
    SVG
  </RadioGroup.Label>
  <RadioGroup.Label>
    <RadioGroup.Item value="pdf" />
    PDF
  </RadioGroup.Label>
</RadioGroup.Root>`} />
      </div>
    </div>
  ),
};

// Helper components
function HorizontalExample() {
  const [value, setValue] = React.useState('option1');
  return (
    <RadioGroup.Root value={value} onValueChange={setValue}>
      <RadioGroup.Label>
        <RadioGroup.Item value="option1" />
        Option 1
      </RadioGroup.Label>
      <RadioGroup.Label>
        <RadioGroup.Item value="option2" />
        Option 2
      </RadioGroup.Label>
    </RadioGroup.Root>
  );
}

function VerticalExample() {
  const [value, setValue] = React.useState('small');
  return (
    <RadioGroup.Root orientation="vertical" value={value} onValueChange={setValue}>
      <RadioGroup.Label>
        <RadioGroup.Item value="small" />
        Small
      </RadioGroup.Label>
      <RadioGroup.Label>
        <RadioGroup.Item value="medium" />
        Medium
      </RadioGroup.Label>
      <RadioGroup.Label>
        <RadioGroup.Item value="large" />
        Large
      </RadioGroup.Label>
    </RadioGroup.Root>
  );
}

function RadioOnlyExample() {
  const [value, setValue] = React.useState('a');
  return (
    <RadioGroup.Root value={value} onValueChange={setValue}>
      <RadioGroup.Item value="a" />
      <RadioGroup.Item value="b" />
      <RadioGroup.Item value="c" />
    </RadioGroup.Root>
  );
}

function ExportFormatExample() {
  const [format, setFormat] = React.useState('png');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Export as:</span>
      <RadioGroup.Root orientation="vertical" value={format} onValueChange={setFormat}>
        <RadioGroup.Label>
          <RadioGroup.Item value="png" />
          PNG
        </RadioGroup.Label>
        <RadioGroup.Label>
          <RadioGroup.Item value="jpg" />
          JPG
        </RadioGroup.Label>
        <RadioGroup.Label>
          <RadioGroup.Item value="svg" />
          SVG
        </RadioGroup.Label>
        <RadioGroup.Label>
          <RadioGroup.Item value="pdf" />
          PDF
        </RadioGroup.Label>
      </RadioGroup.Root>
    </div>
  );
}
