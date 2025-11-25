# @figui3/icons

Icon components for FigUI3 Design System, sourced from Figma UI3.

## Installation

```bash
npm install @figui3/icons
# or
yarn add @figui3/icons
# or
pnpm add @figui3/icons
```

## Usage

Icons are available in two sizes: **16px** (standard) and **24px** (large).

### Importing Icons

```tsx
// Import 16px icons
import { Plus, Close, ChevronRight } from '@figui3/icons/16';

// Import 24px icons
import { Search, Settings } from '@figui3/icons/24';
```

### Basic Usage

```tsx
import { Plus } from '@figui3/icons/16';

function MyComponent() {
  return <Plus />;
}
```

### Custom Size

```tsx
import { Search } from '@figui3/icons/24';

function MyComponent() {
  return <Search size={32} />;
}
```

### Custom Color

Icons use `currentColor` by default and can be customized:

```tsx
import { Check } from '@figui3/icons/16';

// Using CSS color
<Check color="#00ff00" />

// Using design tokens
<Check color="var(--color-icon-success)" />

// Inheriting from parent
<div style={{ color: 'red' }}>
  <Check /> {/* Will be red */}
</div>
```

### All Props

```tsx
interface IconProps {
  size?: number;        // Custom size in pixels (default: 16 or 24)
  color?: string;       // Custom color (default: currentColor)
  className?: string;   // Additional CSS class
  // ...all SVG element props
}
```

## Available Icons (16px)

- `Check` - Checkmark icon
- `ChevronDown` - Downward chevron
- `ChevronRight` - Rightward chevron
- `Close` - Close/X icon
- `Minus` - Minus/subtract icon
- `Plus` - Plus/add icon
- `Search` - Search/magnifying glass
- `Settings` - Settings/gear icon

## Available Icons (24px)

- `ChevronDown` - Downward chevron
- `ChevronRight` - Rightward chevron
- `Close` - Close/X icon
- `Plus` - Plus/add icon
- `Search` - Search/magnifying glass
- `Settings` - Settings/gear icon

## Creating Custom Icons

Use the `createIcon` factory function to create your own icons:

```tsx
import { createIcon } from '@figui3/icons';

const MyCustomIcon = createIcon({
  path: (
    <path
      d="M8 3v10M3 8h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  ),
  displayName: 'MyCustomIcon',
  defaultSize: 16,
});

// Use it like any other icon
<MyCustomIcon size={20} />
```

## Design System Integration

Icons are designed to work seamlessly with FigUI3 design tokens:

```tsx
import { Plus } from '@figui3/icons/16';

// Primary action
<Plus color="var(--color-icon-brand)" />

// Danger action
<Plus color="var(--color-icon-danger)" />

// Disabled state
<Plus color="var(--color-icon-disabled)" />
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { IconProps, CreateIconOptions } from '@figui3/icons';
```

## License

MIT
