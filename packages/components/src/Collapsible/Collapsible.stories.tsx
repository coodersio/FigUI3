/**
 * Collapsible Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Collapsible from './Collapsible';
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
  title: 'Components/Collapsible',
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
    const [open, setOpen] = React.useState(true);

    return (
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          <Collapsible.Trigger>Advanced Settings</Collapsible.Trigger>
          <Collapsible.Content>
            <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
              <div style={{ marginBottom: '8px' }}>Enable debug mode</div>
              <div style={{ marginBottom: '8px' }}>Show hidden layers</div>
              <div>Auto-save interval: 5 minutes</div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          State: <strong>{open ? 'Open' : 'Closed'}</strong>
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
          <BasicCollapsible />
        </div>
        <CodeBlock code={`<Collapsible.Root>
  <Collapsible.Trigger>Section Title</Collapsible.Trigger>
  <Collapsible.Content>
    Content goes here...
  </Collapsible.Content>
</Collapsible.Root>`} />
      </div>

      {/* Default Open */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Default Open
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <DefaultOpenCollapsible />
        </div>
        <CodeBlock code={`<Collapsible.Root defaultOpen>
  <Collapsible.Trigger>Expanded Section</Collapsible.Trigger>
  <Collapsible.Content>
    This section is open by default.
  </Collapsible.Content>
</Collapsible.Root>`} />
      </div>

      {/* Controlled Example */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Controlled
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <ControlledCollapsible />
        </div>
        <CodeBlock code={`const [open, setOpen] = useState(false);

<Collapsible.Root open={open} onOpenChange={setOpen}>
  <Collapsible.Trigger>Click to toggle</Collapsible.Trigger>
  <Collapsible.Content>
    Controlled content...
  </Collapsible.Content>
</Collapsible.Root>`} />
      </div>

      {/* Nested Collapsibles */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Nested Collapsibles
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <NestedCollapsibles />
        </div>
        <CodeBlock code={`<Collapsible.Root defaultOpen>
  <Collapsible.Trigger>Parent Section</Collapsible.Trigger>
  <Collapsible.Content>
    <Collapsible.Root>
      <Collapsible.Trigger>Child Section</Collapsible.Trigger>
      <Collapsible.Content>
        Nested content...
      </Collapsible.Content>
    </Collapsible.Root>
  </Collapsible.Content>
</Collapsible.Root>`} />
      </div>

      {/* Without Indicator */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Without Indicator
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <CollapsibleWithoutIndicator />
        </div>
        <CodeBlock code={`<Collapsible.Root>
  <Collapsible.Trigger hideIndicator>
    Custom Trigger (no chevron)
  </Collapsible.Trigger>
  <Collapsible.Content>
    Content without indicator...
  </Collapsible.Content>
</Collapsible.Root>`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicCollapsible() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Section Title</Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          This is the collapsible content. Click the trigger to toggle visibility.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

function DefaultOpenCollapsible() {
  return (
    <Collapsible.Root defaultOpen>
      <Collapsible.Trigger>Expanded Section</Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          This section is open by default. The chevron indicator shows the current state.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

function ControlledCollapsible() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger>Layer Options</Collapsible.Trigger>
        <Collapsible.Content>
          <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
            <div style={{ marginBottom: '8px' }}>Opacity: 100%</div>
            <div style={{ marginBottom: '8px' }}>Blend mode: Normal</div>
            <div>Visibility: Visible</div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
      <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        State: {open ? 'Open' : 'Closed'}
      </p>
    </div>
  );
}

function NestedCollapsibles() {
  return (
    <Collapsible.Root defaultOpen>
      <Collapsible.Trigger>Design System</Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ paddingTop: '8px' }}>
          <Collapsible.Root>
            <Collapsible.Trigger>Colors</Collapsible.Trigger>
            <Collapsible.Content>
              <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                Primary, Secondary, Accent...
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
          <Collapsible.Root>
            <Collapsible.Trigger>Typography</Collapsible.Trigger>
            <Collapsible.Content>
              <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                Heading, Body, Caption...
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
          <Collapsible.Root>
            <Collapsible.Trigger>Spacing</Collapsible.Trigger>
            <Collapsible.Content>
              <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                4px, 8px, 16px, 24px...
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

function CollapsibleWithoutIndicator() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger hideIndicator>Custom Trigger (no chevron)</Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: '8px 0', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          This collapsible uses a custom trigger without the default chevron indicator.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Basic Collapsible
          </div>
          <Collapsible.Root>
            <Collapsible.Trigger>Layer Properties</Collapsible.Trigger>
            <Collapsible.Content>
              <div style={{ padding: '8px 0', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                Position, size, rotation, and other properties.
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Expanded by Default
          </div>
          <Collapsible.Root defaultOpen>
            <Collapsible.Trigger>Fill & Stroke</Collapsible.Trigger>
            <Collapsible.Content>
              <div style={{ padding: '8px 0', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                <div style={{ marginBottom: '8px' }}>Fill: #0D99FF</div>
                <div style={{ marginBottom: '8px' }}>Stroke: None</div>
                <div>Opacity: 100%</div>
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Nested Sections
          </div>
          <Collapsible.Root defaultOpen>
            <Collapsible.Trigger>Components</Collapsible.Trigger>
            <Collapsible.Content>
              <div style={{ paddingTop: '4px' }}>
                <Collapsible.Root>
                  <Collapsible.Trigger>Buttons</Collapsible.Trigger>
                  <Collapsible.Content>
                    <div style={{ padding: '8px 0', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                      Primary, Secondary, Ghost...
                    </div>
                  </Collapsible.Content>
                </Collapsible.Root>
                <Collapsible.Root>
                  <Collapsible.Trigger>Inputs</Collapsible.Trigger>
                  <Collapsible.Content>
                    <div style={{ padding: '8px 0', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                      Text, Number, Select...
                    </div>
                  </Collapsible.Content>
                </Collapsible.Root>
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>
      </div>
    </div>
  ),
};
