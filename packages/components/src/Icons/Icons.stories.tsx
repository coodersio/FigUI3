/**
 * Icons Showcase
 *
 * Complete icon library from @figui3/icons
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import '../styles.css';

// Import all 16px icons
import * as Icons16 from '@figui3/icons/16';

// Import all 24px icons
import * as Icons24 from '@figui3/icons/24';

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

// Icon card component
const IconCard = ({
  name,
  IconComponent,
  size,
}: {
  name: string;
  IconComponent: React.ComponentType<any>;
  size: 16 | 24;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const importCode = `import { ${name} } from '@figui3/icons/${size}';`;
    navigator.clipboard.writeText(importCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-medium)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backgroundColor: copied ? 'var(--color-bg-selected)' : 'transparent',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border-selected)';
        e.currentTarget.style.backgroundColor = 'var(--color-bg-hover)';
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        marginBottom: '8px',
      }}>
        <IconComponent size={size === 16 ? 24 : 32} />
      </div>
      <div style={{
        fontSize: '11px',
        fontWeight: 500,
        color: 'var(--color-text)',
        textAlign: 'center',
        wordBreak: 'break-word',
      }}>
        {name}
      </div>
      <div style={{
        fontSize: '9px',
        color: 'var(--color-text-tertiary)',
        marginTop: '4px',
      }}>
        {size}px
      </div>
      {copied && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          fontSize: '9px',
          color: 'var(--color-text-success)',
          fontWeight: 600,
        }}>
          ✓ Copied
        </div>
      )}
    </div>
  );
};

const meta = {
  title: 'Icons/Overview',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Get icon names
const icon16Names = Object.keys(Icons16).sort();
const icon24Names = Object.keys(Icons24).sort();

// All Icons Overview
export const AllIcons: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '20px',
      maxWidth: '1400px',
    }}>
      {/* Header */}
      <div>
        <h1 style={{
          margin: '0 0 8px 0',
          fontSize: '24px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          FigUI3 Icons
        </h1>
        <p style={{
          margin: '0 0 16px 0',
          fontSize: '13px',
          color: 'var(--color-text-secondary)',
          lineHeight: '22px',
        }}>
          Icon components in two sizes (16px and 24px) from Figma UI3 Design System.
          Click any icon to copy its import statement.
        </p>
      </div>

      {/* Installation */}
      <div>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Installation
        </h3>
        <CodeBlock code="npm install @figui3/icons" />
      </div>

      {/* 16px Icons */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'var(--font-family-base)',
          }}>
            16px Icons ({icon16Names.length})
          </h3>
          <div style={{
            fontSize: '11px',
            color: 'var(--color-text-tertiary)',
          }}>
            Standard size for UI elements
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '12px',
          marginBottom: '16px',
        }}>
          {icon16Names.map((name) => {
            const IconComponent = (Icons16 as any)[name];
            return (
              <IconCard
                key={name}
                name={name}
                IconComponent={IconComponent}
                size={16}
              />
            );
          })}
        </div>
        <CodeBlock code={`// Import 16px icons
import { ${icon16Names.slice(0, 3).join(', ')} } from '@figui3/icons/16';

<Plus />
<Close size={20} color="var(--color-icon-brand)" />`} />
      </div>

      {/* 24px Icons */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'var(--font-family-base)',
          }}>
            24px Icons ({icon24Names.length})
          </h3>
          <div style={{
            fontSize: '11px',
            color: 'var(--color-text-tertiary)',
          }}>
            Larger size for prominent elements
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '12px',
          marginBottom: '16px',
        }}>
          {icon24Names.map((name) => {
            const IconComponent = (Icons24 as any)[name];
            return (
              <IconCard
                key={name}
                name={name}
                IconComponent={IconComponent}
                size={24}
              />
            );
          })}
        </div>
        <CodeBlock code={`// Import 24px icons
import { ${icon24Names.slice(0, 3).join(', ')} } from '@figui3/icons/24';

<Search />
<Settings size={32} />`} />
      </div>

      {/* Usage Examples */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          Usage Examples
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Basic Usage */}
          <div>
            <div style={{
              fontSize: '11px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
            }}>
              Basic Usage
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
              {icon16Names.slice(0, 4).map((name) => {
                const IconComponent = (Icons16 as any)[name];
                return <IconComponent key={name} />;
              })}
            </div>
            <CodeBlock code={`import { Plus, Close, Check, Search } from '@figui3/icons/16';

<Plus />
<Close />
<Check />
<Search />`} />
          </div>

          {/* Custom Size */}
          <div>
            <div style={{
              fontSize: '11px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
            }}>
              Custom Size
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
              {[16, 20, 24, 32].map((size) => {
                const IconComponent = (Icons16 as any)[icon16Names[0]];
                return <IconComponent key={size} size={size} />;
              })}
            </div>
            <CodeBlock code={`import { Plus } from '@figui3/icons/16';

<Plus size={16} />
<Plus size={20} />
<Plus size={24} />
<Plus size={32} />`} />
          </div>

          {/* Custom Color */}
          <div>
            <div style={{
              fontSize: '11px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
            }}>
              Custom Color
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
              <Icons16.Check color="var(--color-icon-success)" />
              <Icons16.Close color="var(--color-icon-danger)" />
              <Icons16.Search color="var(--color-icon-brand)" />
              <Icons16.Settings color="var(--color-icon-tertiary)" />
            </div>
            <CodeBlock code={`import { Check, Close, Search, Settings } from '@figui3/icons/16';

<Check color="var(--color-icon-success)" />
<Close color="var(--color-icon-danger)" />
<Search color="var(--color-icon-brand)" />
<Settings color="var(--color-icon-tertiary)" />`} />
          </div>

          {/* In Buttons */}
          <div>
            <div style={{
              fontSize: '11px',
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
            }}>
              In Buttons (Example)
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center' }}>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'var(--color-bg-brand)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-medium)',
                fontSize: '11px',
                fontWeight: 500,
                cursor: 'pointer',
              }}>
                <Icons16.Plus size={16} />
                Add Item
              </button>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'transparent',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-medium)',
                fontSize: '11px',
                fontWeight: 500,
                cursor: 'pointer',
              }}>
                <Icons16.Search size={16} />
                Search
              </button>
            </div>
            <CodeBlock code={`import { Plus, Search } from '@figui3/icons/16';

<button>
  <Plus size={16} />
  Add Item
</button>

<button>
  <Search size={16} />
  Search
</button>`} />
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-family-base)',
        }}>
          API Reference
        </h3>
        <div style={{
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-medium)',
          overflow: 'hidden',
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '11px',
          }}>
            <thead>
              <tr style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderBottom: '1px solid var(--color-border)',
              }}>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: 600,
                }}>
                  Prop
                </th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: 600,
                }}>
                  Type
                </th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: 600,
                }}>
                  Default
                </th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: 600,
                }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>size</td>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>number</td>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>16 | 24</td>
                <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>
                  Icon size in pixels
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>color</td>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>string</td>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>currentColor</td>
                <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>
                  Icon color (CSS color value)
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>className</td>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>string</td>
                <td style={{ padding: '12px', fontFamily: 'monospace' }}>-</td>
                <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>
                  Additional CSS class name
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};

// Interactive Playground
export const Playground: Story = {
  render: () => {
    const [selectedIcon, setSelectedIcon] = useState(icon16Names[0]);
    const [iconSize, setIconSize] = useState(24);
    const [iconColor, setIconColor] = useState('currentColor');
    const [iconSet, setIconSet] = useState<'16' | '24'>('16');

    const IconComponent = iconSet === '16'
      ? (Icons16 as any)[selectedIcon]
      : (Icons24 as any)[selectedIcon];

    const currentIcons = iconSet === '16' ? icon16Names : icon24Names;

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '20px',
        maxWidth: '800px',
      }}>
        <div>
          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'var(--font-family-base)',
          }}>
            Interactive Playground
          </h3>
        </div>

        {/* Preview */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-medium)',
          backgroundColor: 'var(--color-bg-secondary)',
        }}>
          {IconComponent && <IconComponent size={iconSize} color={iconColor} />}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Icon Set */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '8px',
            }}>
              Icon Set
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['16', '24'] as const).map((set) => (
                <button
                  key={set}
                  onClick={() => {
                    setIconSet(set);
                    setSelectedIcon((set === '16' ? icon16Names : icon24Names)[0]);
                  }}
                  style={{
                    padding: '8px 16px',
                    fontSize: '11px',
                    fontWeight: 500,
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-medium)',
                    backgroundColor: iconSet === set ? 'var(--color-bg-brand)' : 'transparent',
                    color: iconSet === set ? 'white' : 'var(--color-text)',
                    cursor: 'pointer',
                  }}
                >
                  {set}px
                </button>
              ))}
            </div>
          </div>

          {/* Icon Select */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '8px',
            }}>
              Icon
            </label>
            <select
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                fontSize: '11px',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-medium)',
                backgroundColor: 'var(--color-bg-default)',
                fontFamily: 'monospace',
              }}
            >
              {currentIcons.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Size */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '8px',
            }}>
              Size: {iconSize}px
            </label>
            <input
              type="range"
              min="12"
              max="64"
              value={iconSize}
              onChange={(e) => setIconSize(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          {/* Color */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '8px',
            }}>
              Color
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { label: 'Current', value: 'currentColor' },
                { label: 'Brand', value: 'var(--color-icon-brand)' },
                { label: 'Danger', value: 'var(--color-icon-danger)' },
                { label: 'Success', value: 'var(--color-icon-success)' },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setIconColor(value)}
                  style={{
                    padding: '8px 12px',
                    fontSize: '11px',
                    fontWeight: 500,
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-medium)',
                    backgroundColor: iconColor === value ? 'var(--color-bg-selected)' : 'transparent',
                    color: 'var(--color-text)',
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Code */}
        <div>
          <CodeBlock code={`import { ${selectedIcon} } from '@figui3/icons/${iconSet}';

<${selectedIcon}${iconSize !== (iconSet === '16' ? 16 : 24) ? ` size={${iconSize}}` : ''}${iconColor !== 'currentColor' ? ` color="${iconColor}"` : ''} />`} />
        </div>
      </div>
    );
  },
};
