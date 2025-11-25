/**
 * Checkbox Component Stories
 *
 * Demonstrates all variants and states of the Checkbox component
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import type { CheckedState } from './Checkbox.types';
import '../styles.css';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A control that allows the user to toggle between checked and unchecked states. Supports indeterminate (mixed) state for parent checkboxes with nested children.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
      description: 'The controlled checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to the checkbox',
    },
    description: {
      control: 'text',
      description: 'Description text displayed below the label',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic controlled checkbox
export const Basic: Story = {
  render: () => {
    const [checked, setChecked] = useState<CheckedState>(false);
    return (
      <div style={{ padding: '20px' }}>
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Current state: <strong>{String(checked)}</strong>
        </p>
      </div>
    );
  },
};

// With label
export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState<CheckedState>(false);
    return (
      <div style={{ padding: '20px' }}>
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Accept terms and conditions"
        />
      </div>
    );
  },
};

// With description
export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState<CheckedState>(true);
    return (
      <div style={{ padding: '20px' }}>
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Enable notifications"
          description="Receive email notifications about updates and important changes to your account."
        />
      </div>
    );
  },
};

// Indeterminate state
export const Indeterminate: Story = {
  render: () => {
    const [parentChecked, setParentChecked] = useState<CheckedState>('indeterminate');
    const [child1, setChild1] = useState(true);
    const [child2, setChild2] = useState(false);
    const [child3, setChild3] = useState(false);

    // Update parent state based on children
    React.useEffect(() => {
      const checkedCount = [child1, child2, child3].filter(Boolean).length;
      if (checkedCount === 0) {
        setParentChecked(false);
      } else if (checkedCount === 3) {
        setParentChecked(true);
      } else {
        setParentChecked('indeterminate');
      }
    }, [child1, child2, child3]);

    const handleParentChange = (checked: CheckedState) => {
      const newValue = checked === true;
      setChild1(newValue);
      setChild2(newValue);
      setChild3(newValue);
      setParentChecked(checked);
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox
            checked={parentChecked}
            onCheckedChange={handleParentChange}
            label="Select all items"
          />
          <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Checkbox checked={child1} onCheckedChange={setChild1} label="Item 1" />
            <Checkbox checked={child2} onCheckedChange={setChild2} label="Item 2" />
            <Checkbox checked={child3} onCheckedChange={setChild3} label="Item 3" />
          </div>
        </div>
      </div>
    );
  },
};

// Disabled states
export const Disabled: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox disabled checked={false} label="Unchecked, Disabled" />
      <Checkbox disabled checked={true} label="Checked, Disabled" />
      <Checkbox disabled checked="indeterminate" label="Indeterminate, Disabled" />
    </div>
  ),
};

// Required checkbox
export const Required: Story = {
  render: () => {
    const [checked, setChecked] = useState<CheckedState>(false);
    return (
      <div style={{ padding: '20px' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
        >
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            label="I accept the terms and conditions"
            required
          />
          <button
            type="submit"
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              fontSize: '11px',
              borderRadius: '5px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-brand)',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  },
};

// All states showcase (matching Figma design)
export const AllStates: Story = {
  render: () => {
    return (
      <div style={{ padding: '40px' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 600 }}>
          Checkbox States
        </h3>

        <div style={{ display: 'flex', gap: '48px' }}>
          {/* Normal states */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '13px', opacity: 0.6 }}>
              Normal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox checked={true} label="On, Normal" />
              <Checkbox checked="indeterminate" label="Mixed, Normal" />
              <Checkbox checked={false} label="Off, Normal" />
            </div>
          </div>

          {/* Disabled states */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '13px', opacity: 0.6 }}>
              Disabled
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Checkbox disabled checked={true} label="On, Disabled" />
              <Checkbox disabled checked="indeterminate" label="Mixed, Disabled" />
              <Checkbox disabled checked={false} label="Off, Disabled" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 600 }}>
            With Description
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <Checkbox
              checked={false}
              label="Off, Normal"
              description="Helpful description of the setting which may briefly highlight side effects or conditions of the setting."
            />
            <Checkbox
              checked={true}
              label="On, Normal"
              description="Helpful description of the setting which may briefly highlight side effects or conditions of the setting."
            />
          </div>
        </div>
      </div>
    );
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    label: 'Checkbox label',
    description: '',
    disabled: false,
    required: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState<CheckedState>(false);
    return (
      <div style={{ padding: '20px' }}>
        <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
      </div>
    );
  },
};
