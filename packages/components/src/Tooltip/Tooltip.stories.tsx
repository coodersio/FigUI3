/**
 * Tooltip Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider, Tooltip, Hotkey } from './Tooltip';
import { Button } from '../Button';
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
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive example
export const Playground: Story = {
  render: () => (
    <div style={{ padding: '60px' }}>
      <Tooltip content="Paste from clipboard">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '40px',
      maxWidth: '800px',
    }}>
      {/* Basic Usage */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Basic Usage
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center', padding: '40px' }}>
          <Tooltip content="This is a tooltip">
            <Button>Hover me</Button>
          </Tooltip>
        </div>
        <CodeBlock code={`<TooltipProvider>
  <Tooltip content="This is a tooltip">
    <Button>Hover me</Button>
  </Tooltip>
</TooltipProvider>`} />
      </div>

      {/* With Hotkey */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Keyboard Shortcut
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center', padding: '40px' }}>
          <Tooltip content={<>Paste<Hotkey>⌘V</Hotkey></>}>
            <Button>Paste</Button>
          </Tooltip>
        </div>
        <CodeBlock code={`<Tooltip content={<>Paste<Hotkey>⌘V</Hotkey></>}>
  <Button>Paste</Button>
</Tooltip>`} />
      </div>

      {/* Positions */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Positions
        </h3>
        <div style={{
          marginBottom: '12px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          padding: '60px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip content="Top tooltip" side="top">
              <Button variant="secondary">Top</Button>
            </Tooltip>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip content="Bottom tooltip" side="bottom">
              <Button variant="secondary">Bottom</Button>
            </Tooltip>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip content="Left tooltip" side="left">
              <Button variant="secondary">Left</Button>
            </Tooltip>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip content="Right tooltip" side="right">
              <Button variant="secondary">Right</Button>
            </Tooltip>
          </div>
        </div>
        <CodeBlock code={`<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>`} />
      </div>

      {/* Long Content */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Long Content (Max Width: 200px)
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center', padding: '60px' }}>
          <Tooltip content="This is a longer tooltip message that demonstrates how text wraps when it exceeds the maximum width of 200 pixels.">
            <Button>Hover for long tooltip</Button>
          </Tooltip>
        </div>
        <CodeBlock code={`<Tooltip content="This is a longer tooltip message that demonstrates how text wraps when it exceeds the maximum width of 200 pixels.">
  <Button>Hover for long tooltip</Button>
</Tooltip>`} />
      </div>

      {/* Custom Delay */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Custom Delay Duration
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '16px', justifyContent: 'center', padding: '40px' }}>
          <Tooltip content="Instant (0ms)" delayDuration={0}>
            <Button variant="secondary">Instant</Button>
          </Tooltip>
          <Tooltip content="Fast (200ms)" delayDuration={200}>
            <Button variant="secondary">Fast</Button>
          </Tooltip>
          <Tooltip content="Slow (700ms)" delayDuration={700}>
            <Button variant="secondary">Slow</Button>
          </Tooltip>
        </div>
        <CodeBlock code={`<Tooltip content="Instant" delayDuration={0}>
  <Button>Instant</Button>
</Tooltip>

<Tooltip content="Fast" delayDuration={200}>
  <Button>Fast</Button>
</Tooltip>

<Tooltip content="Slow" delayDuration={700}>
  <Button>Slow</Button>
</Tooltip>`} />
      </div>

      {/* Icon Button Example */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Icon Button with Tooltip
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', gap: '8px', justifyContent: 'center', padding: '40px' }}>
          <Tooltip content={<>Copy<Hotkey>⌘C</Hotkey></>}>
            <Button type="icon" variant="secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 4V2a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-2v2a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h2zm1 0h6a1 1 0 011 1v6h2V2H5v2z"/>
              </svg>
            </Button>
          </Tooltip>
          <Tooltip content={<>Paste<Hotkey>⌘V</Hotkey></>}>
            <Button type="icon" variant="secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 2H6v1h4V2zm2 1V1.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V3H2.5a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5H12z"/>
              </svg>
            </Button>
          </Tooltip>
          <Tooltip content={<>Delete<Hotkey>⌫</Hotkey></>}>
            <Button type="icon" variant="secondary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1z"/>
              </svg>
            </Button>
          </Tooltip>
        </div>
        <CodeBlock code={`<Tooltip content={<>Copy<Hotkey>⌘C</Hotkey></>}>
  <Button type="icon">
    <CopyIcon />
  </Button>
</Tooltip>`} />
      </div>
    </div>
  ),
};

// Dark mode preview
export const DarkMode: Story = {
  render: () => (
    <div className="figma-dark" style={{
      backgroundColor: '#2c2c2c',
      padding: '60px',
      borderRadius: '8px',
    }}>
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
        <Tooltip content="Simple tooltip">
          <Button>Basic</Button>
        </Tooltip>
        <Tooltip content={<>Save<Hotkey>⌘S</Hotkey></>}>
          <Button>With Hotkey</Button>
        </Tooltip>
      </div>
    </div>
  ),
};
