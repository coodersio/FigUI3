/**
 * Textarea Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
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
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive example
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [value, setValue] = React.useState('');

    return (
      <div style={{ width: '300px', padding: '20px' }}>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          minRows={3}
        />
        <p style={{ marginTop: '12px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Characters: <strong>{value.length}</strong>
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
      maxWidth: '600px',
    }}>
      {/* Basic */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Basic Textarea
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <Textarea placeholder="Enter your message..." minRows={3} />
        </div>
        <CodeBlock code={`<Textarea placeholder="Enter your message..." minRows={3} />`} />
      </div>

      {/* With Default Value */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Default Value
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <Textarea
            defaultValue="Hello, I'm a textarea with some default content. I can expand as you type more text into me."
            minRows={2}
          />
        </div>
        <CodeBlock code={`<Textarea defaultValue="..." minRows={2} />`} />
      </div>

      {/* Min/Max Rows */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Min/Max Rows (2-5)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <Textarea
            placeholder="Type to see auto-expand (min 2, max 5 rows)"
            minRows={2}
            maxRows={5}
          />
        </div>
        <CodeBlock code={`<Textarea minRows={2} maxRows={5} />`} />
      </div>

      {/* Single Row */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Single Row (Auto-expand)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <Textarea
            placeholder="Starts as single row, expands as needed"
            minRows={1}
          />
        </div>
        <CodeBlock code={`<Textarea minRows={1} />`} />
      </div>

      {/* Fixed Height */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Fixed Height (maxRows = minRows)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <Textarea
            placeholder="Fixed 4 rows with scrolling"
            minRows={4}
            maxRows={4}
          />
        </div>
        <CodeBlock code={`<Textarea minRows={4} maxRows={4} />`} />
      </div>

      {/* Disabled */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <Textarea
            defaultValue="This textarea is disabled"
            minRows={2}
            disabled
          />
        </div>
        <CodeBlock code={`<Textarea disabled defaultValue="..." />`} />
      </div>

      {/* Long Content */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Long Content (unlimited rows)
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <Textarea
            defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            minRows={3}
          />
        </div>
        <CodeBlock code={`<Textarea minRows={3} /> // No maxRows = unlimited`} />
      </div>
    </div>
  ),
};

// Controlled Example
export const ControlledExample: Story = {
  render: function ControlledStory() {
    const [value, setValue] = React.useState('');
    const maxLength = 200;

    return (
      <div style={{ width: '350px', padding: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', fontWeight: 550 }}>
          Description
        </label>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, maxLength))}
          placeholder="Enter a description (max 200 characters)"
          minRows={3}
          maxRows={6}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '4px',
          fontSize: '11px',
          color: value.length >= maxLength ? 'var(--color-text-danger)' : 'var(--color-text-secondary)',
        }}>
          {value.length}/{maxLength}
        </div>
      </div>
    );
  },
};

// Dark mode preview
export const DarkMode: Story = {
  render: () => (
    <div className="figma-dark" style={{
      backgroundColor: '#2c2c2c',
      padding: '24px',
      borderRadius: '8px',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Textarea placeholder="Enter text..." minRows={3} />
        <Textarea
          defaultValue="Dark mode textarea with content"
          minRows={2}
        />
        <Textarea
          defaultValue="Disabled in dark mode"
          minRows={2}
          disabled
        />
      </div>
    </div>
  ),
};
