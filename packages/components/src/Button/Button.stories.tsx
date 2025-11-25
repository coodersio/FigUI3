/**
 * Button Component Stories
 *
 * Storybook stories for the Button component
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonVariant, ButtonSize } from './Button.types';
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
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants: ButtonVariant[] = ['primary', 'secondary', 'ghost', 'destructive', 'secondary-destructive', 'figjam', 'inverse', 'success', 'link', 'link-danger'];
const sizes: ButtonSize[] = ['default', 'large'];

// Playground - Interactive controls
export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
    disabled: false,
    loading: false,
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
    buttonType: {
      control: 'select',
      options: ['default', 'wide', 'icon', 'icon-toggle'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
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
      {/* Default Size - All Variants */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Variants - Default Size (24px)
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} size="default">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
        <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="secondary-destructive">Secondary Destruct</Button>
<Button variant="figjam">FigJam</Button>
<Button variant="inverse">Inverse</Button>
<Button variant="success">Success</Button>
<Button variant="link">Link</Button>
<Button variant="link-danger">Link Danger</Button>`} />
      </div>

      {/* Large Size - All Variants */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Variants - Large Size (32px)
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} size="large">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
        <CodeBlock code={`<Button variant="primary" size="large">Primary</Button>
<Button variant="secondary" size="large">Secondary</Button>
<Button variant="ghost" size="large">Ghost</Button>
<Button variant="destructive" size="large">Destructive</Button>
<Button variant="secondary-destructive" size="large">Secondary Destruct</Button>
<Button variant="figjam" size="large">FigJam</Button>
<Button variant="inverse" size="large">Inverse</Button>
<Button variant="success" size="large">Success</Button>
<Button variant="link" size="large">Link</Button>
<Button variant="link-danger" size="large">Link Danger</Button>`} />
      </div>

      {/* States - Disabled */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Disabled State
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} disabled>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
        <CodeBlock code={`<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>`} />
      </div>

      {/* States - Loading */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Loading State
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} loading>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
        <CodeBlock code={`<Button variant="primary" loading>Primary</Button>
<Button variant="secondary" loading>Secondary</Button>`} />
      </div>

      {/* With Icons */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          With Icons
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <Button variant="primary" iconLead={<span>+</span>}>
            Leading Icon
          </Button>
          <Button variant="primary" iconTrail={<span>→</span>}>
            Trailing Icon
          </Button>
          <Button variant="primary" iconLead={<span>←</span>} iconTrail={<span>→</span>}>
            Both Icons
          </Button>
        </div>
        <CodeBlock code={`<Button variant="primary" iconLead={<PlusIcon />}>
  Leading Icon
</Button>

<Button variant="primary" iconTrail={<ArrowIcon />}>
  Trailing Icon
</Button>

<Button variant="primary" iconLead={<LeftIcon />} iconTrail={<RightIcon />}>
  Both Icons
</Button>`} />
      </div>

      {/* Icon Only Buttons */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Icon Only - Default Size
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} buttonType="icon">
              +
            </Button>
          ))}
        </div>
        <CodeBlock code={`<Button variant="primary" buttonType="icon">
  <PlusIcon />
</Button>

<Button variant="secondary" buttonType="icon">
  <SettingsIcon />
</Button>`} />
      </div>

      {/* Icon Only Buttons - Large */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Icon Only - Large Size
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} buttonType="icon" size="large">
              ×
            </Button>
          ))}
        </div>
        <CodeBlock code={`<Button variant="primary" buttonType="icon" size="large">
  <CloseIcon />
</Button>`} />
      </div>

      {/* Wide Buttons */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Wide Button (100% width)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px', marginBottom: '12px' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} buttonType="wide">
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Wide Button
            </Button>
          ))}
        </div>
        <CodeBlock code={`<Button variant="primary" buttonType="wide">
  Wide Button
</Button>`} />
      </div>

      {/* Link Buttons */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Link Buttons (No standard button styling)
        </h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <Button variant="link">Learn More</Button>
          <Button variant="link-danger">Delete Account</Button>
        </div>
        <CodeBlock code={`<Button variant="link">Learn More</Button>
<Button variant="link-danger">Delete Account</Button>`} />
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
          {/* Save/Cancel */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Save / Cancel
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="primary">Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </div>

          {/* Delete Confirmation */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Delete Confirmation
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="destructive">Delete</Button>
              <Button variant="secondary">Keep</Button>
            </div>
          </div>

          {/* Toolbar Actions */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              Toolbar Actions
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <Button variant="secondary" buttonType="icon">+</Button>
              <Button variant="secondary" buttonType="icon">−</Button>
              <Button variant="secondary" buttonType="icon">×</Button>
              <Button variant="secondary" buttonType="icon">⚙</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
