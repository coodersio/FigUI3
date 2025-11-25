/**
 * CSS Variables Generator
 *
 * Converts design tokens to CSS custom properties
 */

import { colorRamps } from './colors/ramps';
import { semanticColors } from './colors/semantic';
import { spacing } from './spacing';
import { elevation } from './elevation';
import { radius } from './radius';
import { fontFamilies, fontWeights, fontSizes } from './typography';

/**
 * Generate CSS custom properties from tokens
 */
export function generateCSSVariables(theme: 'light' | 'dark' = 'light'): string {
  const vars: string[] = [];

  // Color ramps
  Object.entries(colorRamps).forEach(([colorName, ramp]) => {
    Object.entries(ramp).forEach(([level, value]) => {
      vars.push(`  --ramp-${colorName}-${level}: ${value};`);
    });
  });

  // Semantic colors
  const semanticTokens = semanticColors[theme];

  // Background colors
  Object.entries(semanticTokens.bg).forEach(([key, value]) => {
    vars.push(`  --color-bg-${key}: ${value};`);
  });

  // Text colors
  Object.entries(semanticTokens.text).forEach(([key, value]) => {
    vars.push(`  --color-text-${key}: ${value};`);
  });

  // Border colors
  Object.entries(semanticTokens.border).forEach(([key, value]) => {
    vars.push(`  --color-border-${key}: ${value};`);
  });

  // Icon colors
  Object.entries(semanticTokens.icon).forEach(([key, value]) => {
    vars.push(`  --color-icon-${key}: ${value};`);
  });

  // Spacing
  Object.entries(spacing).forEach(([key, value]) => {
    vars.push(`  --spacing-${key}: ${value}px;`);
  });

  // Elevation
  Object.entries(elevation[theme]).forEach(([level, value]) => {
    vars.push(`  --elevation-${level}: ${value};`);
  });

  // Radius
  Object.entries(radius).forEach(([key, value]) => {
    vars.push(`  --radius-${key}: ${value}px;`);
  });

  // Typography
  vars.push(`  --font-family-base: ${fontFamilies.base};`);
  vars.push(`  --font-family-heading: ${fontFamilies.heading};`);

  Object.entries(fontWeights).forEach(([key, value]) => {
    vars.push(`  --font-weight-${key}: ${value};`);
  });

  Object.entries(fontSizes).forEach(([key, value]) => {
    vars.push(`  --font-size-${key}: ${value}px;`);
  });

  return vars.join('\n');
}

/**
 * Generate complete CSS with both light and dark themes
 * Uses Figma's class-based theme switching approach
 */
export function generateThemeCSS(): string {
  return `/**
 * FigUI3 Design System Tokens
 * Auto-generated CSS custom properties
 *
 * Theme switching:
 * - Add 'figma-light' class to HTML element for light theme
 * - Add 'figma-dark' class to HTML element for dark theme
 * - Falls back to system preference when no class is set
 */

:root,
.figma-light {
${generateCSSVariables('light')}
}

.figma-dark {
${generateCSSVariables('dark')}
}

@media (prefers-color-scheme: dark) {
  :root:not(.figma-light) {
${generateCSSVariables('dark')}
  }
}
`;
}
