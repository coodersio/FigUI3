# UI3 Design System

A React component library implementing Figma's UI3 design system.

## Project Structure

```
ui3/
├── packages/
│   ├── tokens/          # Design tokens (colors, typography, spacing, etc.)
│   ├── icons/           # Icon components (16px and 24px)
│   └── components/      # React UI components
│
├── apps/
│   └── storybook/       # Component documentation
│
├── package.json         # Root package configuration
├── pnpm-workspace.yaml  # pnpm workspace configuration
├── lerna.json           # Lerna versioning configuration
├── turbo.json           # Turborepo build pipeline
└── tsconfig.json        # Base TypeScript configuration
```

## Tech Stack

- **Monorepo**: pnpm workspaces + Lerna + Turborepo
- **Framework**: React 18 + TypeScript
- **Styling**: CSS Modules
- **Build Tool**: Vite
- **Documentation**: Storybook 7
- **Testing**: Vitest + React Testing Library

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Development

```bash
# Run Storybook
pnpm storybook

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## Packages

### @ui3/tokens

Design tokens extracted from Figma UI3 design system:

- **Colors**: 21 color ramps with 10 levels each + semantic tokens
- **Typography**: Inter and Whyte font families with 10 text styles
- **Spacing**: 8px grid system
- **Elevation**: 5 shadow levels for light/dark modes
- **Radius**: Border radius tokens

### @ui3/icons

300+ icon components in two sizes:
- 16px icons at `@ui3/icons/16`
- 24px icons at `@ui3/icons/24`

### @ui3/components

React components implementing the UI3 design system:
- Avatar
- Badge
- Button
- Input
- Select
- Checkbox
- Modal
- Dropdown
- And more...

## Design System Reference

Based on [Figma UI3 Design System](https://www.figma.com/design/5drqr4sWMQbuXhgTyFKvpU/UI3--Figma-s-UI-Kit--Community---Copy-)

### Color System Architecture

Three-layer color architecture:
1. **Ramps** (21 colors × 10 levels): Base color scales
2. **Semantic** (light/dark modes): Context-based tokens (bg, text, border, etc.)
3. **Component**: Component-specific tokens

### Typography System

- **Base**: Inter (UI text)
- **Heading**: Whyte (Display text)
- **Weights**: regular (400), book (350), medium (450), semibold (550)
- **Text Styles**: 10 predefined styles from heading.display to body.small

### Spacing System

8px grid system:
- Base unit: 8px
- Tokens: 0.5x, 1x, 1.5x, 2x, 3x, 4x, 6x, 8x

## Next Steps

1. **Implement Design Tokens** (`@ui3/tokens`)
   - Create color system (ramps, semantic, component)
   - Implement typography tokens
   - Add spacing, elevation, and radius tokens
   - Generate CSS variables

2. **Component Implementation**
   - Phase 1: Avatar component
   - Phase 2: Badge component
   - Phase 3: Button component
   - Phase 4: Form components
   - Phase 5: Complex components

3. **Icon Extraction**
   - Extract 300+ icons from Figma
   - Convert to React components
   - Generate icon exports

## Version Management

This project uses [Changesets](https://github.com/changesets/changesets) for version management and npm publishing.

### Adding Changes

When you make changes to packages, create a changeset:

```bash
pnpm changeset
```

This will prompt you to:
1. Select which packages have changes
2. Choose version bump type (patch/minor/major)
3. Write a change description

### Release Process

1. Push code to `main` branch
2. GitHub Actions will automatically create a "Version Packages" PR
3. Merge the PR to publish to npm

### Manual Commands

```bash
pnpm changeset           # Add a changeset
pnpm version-packages    # Update versions (CI runs this)
pnpm release             # Build and publish (CI runs this)
```

## License

MIT

TODO