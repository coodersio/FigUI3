/**
 * Checkbox Component Stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import type { CheckedState } from './Checkbox.types';
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
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive example
export const Playground: Story = {
  render: function PlaygroundExample() {
    const [checked, setChecked] = React.useState<CheckedState>(false);

    return (
      <div style={{ padding: '20px' }}>
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Enable notifications"
          description="Receive email notifications about updates"
        />
        <p style={{ marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
          Current state: <strong>{String(checked)}</strong>
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
          <BasicCheckbox />
        </div>
        <CodeBlock code={`const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>`} />
      </div>

      {/* With Label */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Label
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <LabelCheckbox />
        </div>
        <CodeBlock code={`<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms and conditions"
/>`} />
      </div>

      {/* With Description */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          With Description
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <DescriptionCheckbox />
        </div>
        <CodeBlock code={`<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Enable notifications"
  description="Receive email notifications about updates"
/>`} />
      </div>

      {/* Indeterminate State */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Indeterminate State
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <IndeterminateExample />
        </div>
        <CodeBlock code={`// Parent checkbox with mixed children
<Checkbox
  checked="indeterminate"
  onCheckedChange={handleParentChange}
  label="Select all"
/>`} />
      </div>

      {/* Disabled States */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>
          Disabled States
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox disabled checked={false} label="Unchecked, Disabled" />
          <Checkbox disabled checked={true} label="Checked, Disabled" />
          <Checkbox disabled checked="indeterminate" label="Indeterminate, Disabled" />
        </div>
        <CodeBlock code={`<Checkbox disabled checked={false} label="Unchecked" />
<Checkbox disabled checked={true} label="Checked" />
<Checkbox disabled checked="indeterminate" label="Indeterminate" />`} />
      </div>
    </div>
  ),
};

// Helper components
function BasicCheckbox() {
  const [checked, setChecked] = React.useState<CheckedState>(false);
  return <Checkbox checked={checked} onCheckedChange={setChecked} />;
}

function LabelCheckbox() {
  const [checked, setChecked] = React.useState<CheckedState>(false);
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Accept terms and conditions"
    />
  );
}

function DescriptionCheckbox() {
  const [checked, setChecked] = React.useState<CheckedState>(true);
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Enable notifications"
      description="Receive email notifications about updates and important changes to your account."
    />
  );
}

function IndeterminateExample() {
  const [parentChecked, setParentChecked] = React.useState<CheckedState>('indeterminate');
  const [child1, setChild1] = React.useState(true);
  const [child2, setChild2] = React.useState(false);
  const [child3, setChild3] = React.useState(false);

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
  );
}
