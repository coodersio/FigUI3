/**
 * SegmentedControl Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as SegmentedControl from './SegmentedControl';
import '../styles.css';

// Icons for demos
const IconAlignLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 3.5H14V4.5H2V3.5ZM2 7.5H10V8.5H2V7.5ZM14 11.5H2V12.5H14V11.5Z" fill="currentColor"/>
  </svg>
);

const IconAlignCenter = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 3.5H14V4.5H2V3.5ZM4 7.5H12V8.5H4V7.5ZM14 11.5H2V12.5H14V11.5Z" fill="currentColor"/>
  </svg>
);

const IconAlignRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 3.5H14V4.5H2V3.5ZM6 7.5H14V8.5H6V7.5ZM14 11.5H2V12.5H14V11.5Z" fill="currentColor"/>
  </svg>
);

const IconLayoutVertical = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5 3H11V7H5V3ZM5 9H11V13H5V9Z" fill="currentColor"/>
  </svg>
);

const IconLayoutHorizontal = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5H7V11H3V5ZM9 5H13V11H9V5Z" fill="currentColor"/>
  </svg>
);

const IconGrid = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3 3H7V7H3V3ZM9 3H13V7H9V3ZM3 9H7V13H3V9ZM9 9H13V13H9V9Z" fill="currentColor"/>
  </svg>
);

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
  title: 'Components/SegmentedControl',
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
    const [value, setValue] = React.useState('left');

    return (
      <div style={{ padding: '20px' }}>
        <SegmentedControl.Root value={value} onValueChange={setValue}>
          <SegmentedControl.Item value="left">
            <IconAlignLeft />
          </SegmentedControl.Item>
          <SegmentedControl.Item value="center">
            <IconAlignCenter />
          </SegmentedControl.Item>
          <SegmentedControl.Item value="right">
            <IconAlignRight />
          </SegmentedControl.Item>
        </SegmentedControl.Root>
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
      {/* Icon-only 2 tabs */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Icon Only (2 tabs)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <IconOnly2Example />
        </div>
        <CodeBlock code={`<SegmentedControl.Root value={value} onValueChange={setValue}>
  <SegmentedControl.Item value="vertical">
    <IconLayoutVertical />
  </SegmentedControl.Item>
  <SegmentedControl.Item value="horizontal">
    <IconLayoutHorizontal />
  </SegmentedControl.Item>
</SegmentedControl.Root>`} />
      </div>

      {/* Icon-only 3 tabs */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Icon Only (3 tabs)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <IconOnly3Example />
        </div>
        <CodeBlock code={`<SegmentedControl.Root value={value} onValueChange={setValue}>
  <SegmentedControl.Item value="left"><IconAlignLeft /></SegmentedControl.Item>
  <SegmentedControl.Item value="center"><IconAlignCenter /></SegmentedControl.Item>
  <SegmentedControl.Item value="right"><IconAlignRight /></SegmentedControl.Item>
</SegmentedControl.Root>`} />
      </div>

      {/* Label only 2 tabs */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Label Only (2 tabs)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <LabelOnly2Example />
        </div>
        <CodeBlock code={`<SegmentedControl.Root value={value} onValueChange={setValue}>
  <SegmentedControl.Item value="design">Design</SegmentedControl.Item>
  <SegmentedControl.Item value="prototype">Prototype</SegmentedControl.Item>
</SegmentedControl.Root>`} />
      </div>

      {/* Label only 3 tabs */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Label Only (3 tabs)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <LabelOnly3Example />
        </div>
        <CodeBlock code={`<SegmentedControl.Root value={value} onValueChange={setValue}>
  <SegmentedControl.Item value="design">Design</SegmentedControl.Item>
  <SegmentedControl.Item value="prototype">Prototype</SegmentedControl.Item>
  <SegmentedControl.Item value="inspect">Inspect</SegmentedControl.Item>
</SegmentedControl.Root>`} />
      </div>

      {/* Full Width */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Full Width
        </h3>
        <div style={{ marginBottom: '12px', maxWidth: '300px' }}>
          <FullWidthExample />
        </div>
        <CodeBlock code={`<SegmentedControl.Root fullWidth value={value} onValueChange={setValue}>
  <SegmentedControl.Item value="day">Day</SegmentedControl.Item>
  <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
  <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
</SegmentedControl.Root>`} />
      </div>

      {/* Disabled */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <SegmentedControl.Root defaultValue="left" disabled>
            <SegmentedControl.Item value="left">
              <IconAlignLeft />
            </SegmentedControl.Item>
            <SegmentedControl.Item value="center">
              <IconAlignCenter />
            </SegmentedControl.Item>
            <SegmentedControl.Item value="right">
              <IconAlignRight />
            </SegmentedControl.Item>
          </SegmentedControl.Root>
        </div>
        <CodeBlock code={`<SegmentedControl.Root disabled defaultValue="left">
  ...
</SegmentedControl.Root>`} />
      </div>

      {/* Real-world Example */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Real-world Example: View Mode
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <ViewModeExample />
        </div>
        <CodeBlock code={`<SegmentedControl.Root value={view} onValueChange={setView}>
  <SegmentedControl.Item value="grid"><IconGrid /></SegmentedControl.Item>
  <SegmentedControl.Item value="list"><IconLayoutHorizontal /></SegmentedControl.Item>
</SegmentedControl.Root>`} />
      </div>
    </div>
  ),
};

// Helper components
function IconOnly2Example() {
  const [value, setValue] = React.useState('vertical');
  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="vertical">
        <IconLayoutVertical />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="horizontal">
        <IconLayoutHorizontal />
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}

function IconOnly3Example() {
  const [value, setValue] = React.useState('left');
  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="left">
        <IconAlignLeft />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="center">
        <IconAlignCenter />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="right">
        <IconAlignRight />
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}

function LabelOnly2Example() {
  const [value, setValue] = React.useState('design');
  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="design">Design</SegmentedControl.Item>
      <SegmentedControl.Item value="prototype">Prototype</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}

function LabelOnly3Example() {
  const [value, setValue] = React.useState('design');
  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="design">Design</SegmentedControl.Item>
      <SegmentedControl.Item value="prototype">Prototype</SegmentedControl.Item>
      <SegmentedControl.Item value="inspect">Inspect</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}

function FullWidthExample() {
  const [value, setValue] = React.useState('week');
  return (
    <SegmentedControl.Root fullWidth value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="day">Day</SegmentedControl.Item>
      <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
      <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}

function ViewModeExample() {
  const [view, setView] = React.useState('grid');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>View as:</span>
      <SegmentedControl.Root value={view} onValueChange={setView}>
        <SegmentedControl.Item value="grid">
          <IconGrid />
        </SegmentedControl.Item>
        <SegmentedControl.Item value="list">
          <IconLayoutHorizontal />
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    </div>
  );
}
