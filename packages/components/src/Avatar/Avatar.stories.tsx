/**
 * Avatar Component Stories
 *
 * Storybook stories for the Avatar component
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import type { AvatarVariant, AvatarSize, AvatarShape, AvatarState } from './Avatar.types';
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
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const colorVariants: AvatarVariant[] = [
  'purple',
  'blue',
  'pink',
  'red',
  'yellow',
  'green',
  'grey',
  'org',
];

const sizes: AvatarSize[] = ['small', 'default', 'large'];
const shapes: AvatarShape[] = ['circle', 'square'];
const states: AvatarState[] = ['default', 'disabled', 'dash', 'design', 'spotlight', 'audio-calling'];

// Playground - Interactive controls
export const Playground: Story = {
  args: {
    variant: 'blue',
    size: 'default',
    shape: 'circle',
    state: 'default',
    initials: 'AB',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['photo', ...colorVariants, 'overflow-unread', 'overflow-read'],
    },
    size: {
      control: 'select',
      options: sizes,
    },
    shape: {
      control: 'select',
      options: shapes,
    },
    state: {
      control: 'select',
      options: states,
    },
    initials: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    alt: {
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
      {/* All Sizes */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Sizes (16px / 24px / 32px)
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
          {sizes.map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Avatar variant="blue" initials="AB" size={size} />
              <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>{size}</span>
            </div>
          ))}
        </div>
        <CodeBlock code={`<Avatar variant="blue" initials="AB" size="small" />
<Avatar variant="blue" initials="AB" size="default" />
<Avatar variant="blue" initials="AB" size="large" />`} />
      </div>

      {/* Color Variants - Circle */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Color Variants - Circle
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '12px' }}>
          {colorVariants.map((variant) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <Avatar variant={variant} initials={variant.slice(0, 2).toUpperCase()} />
              <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{variant}</span>
            </div>
          ))}
        </div>
        <CodeBlock code={`<Avatar variant="purple" initials="PR" />
<Avatar variant="blue" initials="BL" />
<Avatar variant="pink" initials="PK" />
<Avatar variant="green" initials="GR" />`} />
      </div>

      {/* Color Variants - Square */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Color Variants - Square
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '12px' }}>
          {colorVariants.map((variant) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <Avatar variant={variant} initials={variant.slice(0, 2).toUpperCase()} shape="square" />
              <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{variant}</span>
            </div>
          ))}
        </div>
        <CodeBlock code={`<Avatar variant="purple" initials="PR" shape="square" />
<Avatar variant="blue" initials="BL" shape="square" />
<Avatar variant="pink" initials="PK" shape="square" />
<Avatar variant="green" initials="GR" shape="square" />`} />
      </div>

      {/* States */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          States
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '12px' }}>
          {states.map((state) => (
            <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <Avatar
                variant={state === 'design' ? 'purple' : state === 'audio-calling' ? 'green' : 'blue'}
                initials="AB"
                state={state}
              />
              <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{state}</span>
            </div>
          ))}
        </div>
        <CodeBlock code={`<Avatar variant="blue" initials="AB" state="default" />
<Avatar variant="blue" initials="AB" state="disabled" />
<Avatar variant="blue" initials="AB" state="dash" />
<Avatar variant="purple" initials="AB" state="design" />
<Avatar variant="blue" initials="AB" state="spotlight" />
<Avatar variant="green" initials="AB" state="audio-calling" />`} />
      </div>

      {/* Special Variants */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Special Variants
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <Avatar variant="overflow-unread" />
            <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>overflow-unread</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <Avatar variant="overflow-read" />
            <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>overflow-read</span>
          </div>
        </div>
        <CodeBlock code={`<Avatar variant="overflow-unread" />
<Avatar variant="overflow-read" />`} />
      </div>

      {/* Size Matrix */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Size × Shape Matrix
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '12px' }}>
          {shapes.map((shape) => (
            <div key={shape} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '60px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                {shape}:
              </div>
              {sizes.map((size) => (
                <Avatar key={size} variant="blue" initials="AB" size={size} shape={shape} />
              ))}
            </div>
          ))}
        </div>
        <CodeBlock code={`// Circle shape
<Avatar variant="blue" initials="AB" size="small" shape="circle" />
<Avatar variant="blue" initials="AB" size="default" shape="circle" />
<Avatar variant="blue" initials="AB" size="large" shape="circle" />

// Square shape
<Avatar variant="blue" initials="AB" size="small" shape="square" />
<Avatar variant="blue" initials="AB" size="default" shape="square" />
<Avatar variant="blue" initials="AB" size="large" shape="square" />`} />
      </div>
    </div>
  ),
};
