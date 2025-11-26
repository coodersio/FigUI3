import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'text', 'circle', 'avatar'],
      description: 'The variant of the skeleton',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the skeleton',
    },
    width: {
      control: 'text',
      description: 'Custom width (string with units or number in px)',
    },
    height: {
      control: 'text',
      description: 'Custom height (string with units or number in px)',
    },
    animate: {
      control: 'boolean',
      description: 'Whether to animate the skeleton',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
  },
};

export const Avatar: Story = {
  args: {
    variant: 'avatar',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>
          Small
        </p>
        <Skeleton size="small" width="200px" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>
          Medium (default)
        </p>
        <Skeleton size="medium" width="200px" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>
          Large
        </p>
        <Skeleton size="large" width="200px" />
      </div>
    </div>
  ),
};

export const CustomDimensions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Skeleton width="100%" height="40px" />
      <Skeleton width="80%" height="20px" />
      <Skeleton width="60%" height="16px" />
      <Skeleton width={150} height={100} />
    </div>
  ),
};

export const TextLines: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="95%" />
      <Skeleton variant="text" width="90%" />
      <Skeleton variant="text" width="85%" />
      <Skeleton variant="text" width="60%" />
    </div>
  ),
};

export const CircleSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="circle" size="small" />
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="circle" size="medium" />
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>
          Medium
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="circle" size="large" />
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>Large</p>
      </div>
    </div>
  ),
};

export const AvatarSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="avatar" size="small" />
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="avatar" size="medium" />
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>
          Medium
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="avatar" size="large" />
        <p style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-secondary)' }}>Large</p>
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div
      style={{
        padding: '16px',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-medium)',
        maxWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <Skeleton variant="avatar" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="60%" size="small" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="95%" />
        <Skeleton variant="text" width="80%" />
      </div>
      <div style={{ marginTop: '16px' }}>
        <Skeleton width="100%" height="200px" />
      </div>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: '12px',
            padding: '12px',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-medium)',
          }}
        >
          <Skeleton variant="circle" size="medium" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Skeleton variant="text" width={`${70 + (i * 5)}%`} />
            <Skeleton variant="text" width={`${50 + (i * 3)}%`} size="small" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const NoAnimation: Story = {
  args: {
    animate: false,
    width: '200px',
  },
};
