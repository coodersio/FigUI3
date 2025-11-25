/**
 * Badge Component Stories
 *
 * Storybook stories for the Badge component
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import type { BadgeVariant } from './Badge.types';
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
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants: BadgeVariant[] = [
  'default',
  'invert',
  'brand',
  'figjam',
  'danger',
  'warning',
  'success',
  'component',
  'assistive',
  'merged',
  'archived',
];

// Playground - Interactive controls
export const Playground: Story = {
  args: {
    children: 'Badge',
    variant: 'brand',
    strong: true,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    strong: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
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
      maxWidth: '1200px',
    }}>
      {/* Strong (Filled) */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Strong (Filled)
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Badge key={variant} variant={variant} strong>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Badge>
          ))}
        </div>
        <CodeBlock code={`<Badge variant="brand" strong>Brand</Badge>
<Badge variant="danger" strong>Danger</Badge>
<Badge variant="success" strong>Success</Badge>`} />
      </div>

      {/* Light (Outline) */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Light (Outline)
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Badge key={variant} variant={variant} strong={false}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Badge>
          ))}
        </div>
        <CodeBlock code={`<Badge variant="brand">Brand</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="success">Success</Badge>`} />
      </div>

      {/* With Icons */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          With Leading Icon
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <Badge variant="brand" strong iconLead={<span>●</span>}>
            With Icon
          </Badge>
          <Badge variant="danger" strong iconLead={<span>✕</span>}>
            Error
          </Badge>
          <Badge variant="success" strong iconLead={<span>✓</span>}>
            Success
          </Badge>
          <Badge variant="warning" strong iconLead={<span>⚠</span>}>
            Warning
          </Badge>
        </div>
        <CodeBlock code={`<Badge variant="brand" strong iconLead={<Icon />}>With Icon</Badge>
<Badge variant="danger" strong iconLead={<ErrorIcon />}>Error</Badge>
<Badge variant="success" strong iconLead={<CheckIcon />}>Success</Badge>`} />
      </div>
    </div>
  ),
};
