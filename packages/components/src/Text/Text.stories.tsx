/**
 * Text Component Stories
 *
 * Storybook stories for the Text component
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import type { TextVariant, TextSize, TextColor } from './Text.types';
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
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants: TextVariant[] = ['display', 'heading', 'body'];
const sizes: TextSize[] = ['large', 'medium', 'small'];
const colors: TextColor[] = [
  'default',
  'secondary',
  'tertiary',
  'brand',
  'danger',
  'warning',
  'success',
];

// Playground - Interactive controls
export const Playground: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
    size: 'medium',
    color: 'default',
    strong: false,
    as: 'span',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    color: {
      control: 'select',
      options: colors,
    },
    strong: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label'],
    },
    children: {
      control: 'text',
    },
  },
};

// All Typography Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '20px',
      maxWidth: '1200px',
    }}>
      {/* Heading Variants */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Heading Variants
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Display (Whyte Medium 48/56)
            </div>
            <Text variant="display">Display Heading</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Heading Large (Inter Semi Bold 24/32)
            </div>
            <Text variant="heading" size="large">Large Heading</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Heading Medium (Inter Semi Bold 11/25)
            </div>
            <Text variant="heading" size="medium">Medium Heading</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Heading Small (Inter Semi Bold 13/22)
            </div>
            <Text variant="heading" size="small">Small Heading</Text>
          </div>
        </div>
        <CodeBlock code={`<Text variant="display">Display Heading</Text>
<Text variant="heading" size="large">Large Heading</Text>
<Text variant="heading" size="medium">Medium Heading</Text>
<Text variant="heading" size="small">Small Heading</Text>`} />
      </div>

      {/* Body Variants */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Body Text Variants
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Body Large (Inter Regular 13/22)
            </div>
            <Text variant="body" size="large">The quick brown fox jumps over the lazy dog</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Body Large Strong (Inter Medium 13/22)
            </div>
            <Text variant="body" size="large" strong>The quick brown fox jumps over the lazy dog</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Body Medium (Inter Medium 11/16)
            </div>
            <Text variant="body" size="medium">The quick brown fox jumps over the lazy dog</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Body Medium Strong (Inter Semi Bold 11/16)
            </div>
            <Text variant="body" size="medium" strong>The quick brown fox jumps over the lazy dog</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Body Small (Inter Regular 9/14)
            </div>
            <Text variant="body" size="small">The quick brown fox jumps over the lazy dog</Text>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Body Small Strong (Inter Medium 9/14)
            </div>
            <Text variant="body" size="small" strong>The quick brown fox jumps over the lazy dog</Text>
          </div>
        </div>
        <CodeBlock code={`<Text variant="body" size="large">Body Large Text</Text>
<Text variant="body" size="large" strong>Body Large Strong Text</Text>
<Text variant="body" size="medium">Body Medium Text</Text>
<Text variant="body" size="medium" strong>Body Medium Strong Text</Text>
<Text variant="body" size="small">Body Small Text</Text>
<Text variant="body" size="small" strong>Body Small Strong Text</Text>`} />
      </div>

      {/* Color Variants */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Color Variants (Body Medium)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
          <Text variant="body" size="medium" color="default">Default text color</Text>
          <Text variant="body" size="medium" color="secondary">Secondary text color</Text>
          <Text variant="body" size="medium" color="tertiary">Tertiary text color</Text>
          <Text variant="body" size="medium" color="brand">Brand text color</Text>
          <Text variant="body" size="medium" color="danger">Danger text color</Text>
          <Text variant="body" size="medium" color="warning">Warning text color</Text>
          <Text variant="body" size="medium" color="success">Success text color</Text>
        </div>
        <CodeBlock code={`<Text color="default">Default text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="tertiary">Tertiary text</Text>
<Text color="brand">Brand text</Text>
<Text color="danger">Danger text</Text>
<Text color="warning">Warning text</Text>
<Text color="success">Success text</Text>`} />
      </div>

      {/* Semantic HTML Tags */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Semantic HTML Tags
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
          <Text variant="heading" size="large" as="h1">Heading 1 Element</Text>
          <Text variant="heading" size="medium" as="h2">Heading 2 Element</Text>
          <Text variant="heading" size="small" as="h3">Heading 3 Element</Text>
          <Text variant="body" size="large" as="p">Paragraph Element</Text>
          <Text variant="body" size="medium" as="span">Span Element</Text>
          <Text variant="body" size="small" as="label">Label Element</Text>
        </div>
        <CodeBlock code={`<Text variant="heading" size="large" as="h1">Heading 1</Text>
<Text variant="heading" size="medium" as="h2">Heading 2</Text>
<Text variant="heading" size="small" as="h3">Heading 3</Text>
<Text variant="body" size="large" as="p">Paragraph</Text>
<Text variant="body" size="medium" as="span">Span</Text>
<Text variant="body" size="small" as="label">Label</Text>`} />
      </div>

      {/* Common Use Cases */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Common Use Cases
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Page Title */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Page Title
            </div>
            <Text variant="display" as="h1">Welcome to FigUI3</Text>
          </div>

          {/* Section Heading */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Section Heading
            </div>
            <Text variant="heading" size="large" as="h2">Getting Started</Text>
          </div>

          {/* Body Content */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Body Content
            </div>
            <Text variant="body" size="large" as="p">
              This is a paragraph of body text using the body large variant. It's suitable for longer
              form content and provides excellent readability.
            </Text>
          </div>

          {/* Form Label */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Form Label
            </div>
            <Text variant="body" size="medium" strong as="label">
              Email Address
            </Text>
          </div>

          {/* Helper Text */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Helper Text
            </div>
            <Text variant="body" size="small" color="secondary">
              We'll never share your email with anyone else.
            </Text>
          </div>

          {/* Error Message */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Error Message
            </div>
            <Text variant="body" size="small" color="danger">
              This field is required.
            </Text>
          </div>

          {/* Success Message */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Success Message
            </div>
            <Text variant="body" size="medium" color="success" strong>
              Changes saved successfully!
            </Text>
          </div>
        </div>
      </div>
    </div>
  ),
};
