import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@figui3/components';

const meta: Meta = {
  title: 'Components/Select',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A form control for selecting a single value from a list of options. The selected value is displayed in the trigger.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// ============================================================================
// Basic
// ============================================================================

export const Basic: Story = {
  render: function BasicSelect() {
    const [value, setValue] = React.useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger placeholder="Select an option" />
          <Select.Content>
            <Select.Item value="option1">Option 1</Select.Item>
            <Select.Item value="option2">Option 2</Select.Item>
            <Select.Item value="option3">Option 3</Select.Item>
          </Select.Content>
        </Select.Root>
        <div style={{ fontSize: 11, color: 'var(--color-text-secondary, rgba(0,0,0,0.5))' }}>
          Selected: {value || 'none'}
        </div>
      </div>
    );
  },
};

// ============================================================================
// With Default Value
// ============================================================================

export const WithDefaultValue: Story = {
  render: () => (
    <Select.Root defaultValue="inter">
      <Select.Trigger placeholder="Select a font" />
      <Select.Content>
        <Select.Item value="inter">Inter</Select.Item>
        <Select.Item value="roboto">Roboto</Select.Item>
        <Select.Item value="sfpro">SF Pro</Select.Item>
        <Select.Item value="arial">Arial</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

// ============================================================================
// With Groups
// ============================================================================

export const WithGroups: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger placeholder="Select a font" width="col2" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Sans-serif</Select.Label>
          <Select.Item value="inter">Inter</Select.Item>
          <Select.Item value="roboto">Roboto</Select.Item>
          <Select.Item value="sfpro">SF Pro</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Serif</Select.Label>
          <Select.Item value="georgia">Georgia</Select.Item>
          <Select.Item value="times">Times New Roman</Select.Item>
          <Select.Item value="playfair">Playfair Display</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Monospace</Select.Label>
          <Select.Item value="firacode">Fira Code</Select.Item>
          <Select.Item value="jetbrains">JetBrains Mono</Select.Item>
          <Select.Item value="monaco">Monaco</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};

// ============================================================================
// Width Variants
// ============================================================================

export const WidthVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Auto width</span>
        <Select.Root defaultValue="value">
          <Select.Trigger placeholder="Value" width="auto" />
          <Select.Content>
            <Select.Item value="value">Value</Select.Item>
            <Select.Item value="longer">Longer value</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>col.1 (88px)</span>
        <Select.Root defaultValue="value">
          <Select.Trigger placeholder="Value" width="col1" />
          <Select.Content>
            <Select.Item value="value">Value</Select.Item>
            <Select.Item value="option2">Option 2</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>col.2 (184px)</span>
        <Select.Root defaultValue="value">
          <Select.Trigger placeholder="Value" width="col2" />
          <Select.Content>
            <Select.Item value="value">Value</Select.Item>
            <Select.Item value="option2">Option 2</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 280 }}>
        <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Full width</span>
        <Select.Root defaultValue="value">
          <Select.Trigger placeholder="Value" width="full" />
          <Select.Content>
            <Select.Item value="value">Value</Select.Item>
            <Select.Item value="option2">Option 2</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  ),
};

// ============================================================================
// Disabled
// ============================================================================

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Select.Root disabled>
        <Select.Trigger placeholder="Disabled" />
        <Select.Content>
          <Select.Item value="option1">Option 1</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root disabled defaultValue="option1">
        <Select.Trigger placeholder="Disabled" />
        <Select.Content>
          <Select.Item value="option1">With value</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

// ============================================================================
// Disabled Items
// ============================================================================

export const DisabledItems: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger placeholder="Select status" width="col2" />
      <Select.Content>
        <Select.Item value="draft">Draft</Select.Item>
        <Select.Item value="review">In Review</Select.Item>
        <Select.Item value="approved" disabled>
          Approved (locked)
        </Select.Item>
        <Select.Item value="published" disabled>
          Published (locked)
        </Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

// ============================================================================
// States (matching Figma design)
// ============================================================================

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Light Mode States</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <span style={{ width: 80, fontSize: 11, color: '#ea10ac' }}>Default</span>
          <Select.Root defaultValue="value">
            <Select.Trigger width="col2" />
            <Select.Content>
              <Select.Item value="value">Value</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <span style={{ width: 80, fontSize: 11, color: '#ea10ac' }}>Hover</span>
          <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
            (hover over the select above)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <span style={{ width: 80, fontSize: 11, color: '#ea10ac' }}>Focus</span>
          <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
            (click the select to see focus state)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <span style={{ width: 80, fontSize: 11, color: '#ea10ac' }}>Disabled</span>
          <Select.Root disabled defaultValue="value">
            <Select.Trigger width="col2" />
            <Select.Content>
              <Select.Item value="value">Value</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </div>
  ),
};

// ============================================================================
// Form Example
// ============================================================================

export const FormExample: Story = {
  render: function FormSelect() {
    const [country, setCountry] = React.useState('');
    const [language, setLanguage] = React.useState('en');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: 24,
          backgroundColor: 'var(--color-bg, #ffffff)',
          borderRadius: 8,
          border: '1px solid var(--color-border, #e6e6e6)',
          minWidth: 280,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 500 }}>Preferences</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label style={{ fontSize: 11, fontWeight: 450 }}>Country</label>
          <Select.Root value={country} onValueChange={setCountry}>
            <Select.Trigger placeholder="Select country" width="full" />
            <Select.Content>
              <Select.Item value="us">United States</Select.Item>
              <Select.Item value="uk">United Kingdom</Select.Item>
              <Select.Item value="ca">Canada</Select.Item>
              <Select.Item value="au">Australia</Select.Item>
              <Select.Item value="de">Germany</Select.Item>
              <Select.Item value="fr">France</Select.Item>
              <Select.Item value="jp">Japan</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label style={{ fontSize: 11, fontWeight: 450 }}>Language</label>
          <Select.Root value={language} onValueChange={setLanguage}>
            <Select.Trigger width="full" />
            <Select.Content>
              <Select.Item value="en">English</Select.Item>
              <Select.Item value="es">Spanish</Select.Item>
              <Select.Item value="fr">French</Select.Item>
              <Select.Item value="de">German</Select.Item>
              <Select.Item value="ja">Japanese</Select.Item>
              <Select.Item value="zh">Chinese</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    );
  },
};

// ============================================================================
// Many Options (Scrollable)
// ============================================================================

export const ManyOptions: Story = {
  render: () => {
    const countries = [
      'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina',
      'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
      'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin',
      'Bhutan', 'Bolivia', 'Bosnia', 'Botswana', 'Brazil', 'Brunei',
      'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada',
    ];

    return (
      <Select.Root>
        <Select.Trigger placeholder="Select a country" width="col2" />
        <Select.Content style={{ maxHeight: 200 }}>
          {countries.map((country) => (
            <Select.Item key={country} value={country.toLowerCase().replace(/\s/g, '-')}>
              {country}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
};
