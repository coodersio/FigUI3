#!/usr/bin/env node

/**
 * Convert exported Figma icon data to React components
 *
 * Usage:
 *   node convert-icons.js icons-data.json
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node convert-icons.js <icons-data.json>');
  process.exit(1);
}

const inputFile = args[0];
if (!fs.existsSync(inputFile)) {
  console.error(`Error: File not found: ${inputFile}`);
  process.exit(1);
}

// Read and parse JSON data
const iconsData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
console.log(`Loaded ${iconsData.length} icons from ${inputFile}`);

// Output directory
const outputDir = path.join(__dirname, '../../packages/icons/src');
const dir16 = path.join(outputDir, '16');
const dir24 = path.join(outputDir, '24');

// Ensure output directories exist
if (!fs.existsSync(dir16)) fs.mkdirSync(dir16, { recursive: true });
if (!fs.existsSync(dir24)) fs.mkdirSync(dir24, { recursive: true });

// Helper: Convert icon name to PascalCase component name
function toPascalCase(name) {
  // Remove "icon.16." or "icon.24." prefix
  name = name.replace(/^icon\.\d+\./, '');

  // Split by dots and dashes
  return name
    .split(/[.\-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Helper: Generate React component code
function generateComponent(icon) {
  const componentName = toPascalCase(icon.name);

  // Build path elements
  const pathElements = icon.paths
    .map((pathData) => {
      const attrs = [`d="${pathData.d}"`];

      if (pathData.stroke && pathData.stroke !== '#000000') {
        attrs.push(`stroke="${pathData.stroke === 'currentColor' ? 'currentColor' : pathData.stroke}"`);
      } else if (pathData.stroke || !pathData.fill) {
        attrs.push('stroke="currentColor"');
      }

      if (pathData.strokeWidth) {
        attrs.push(`strokeWidth="${pathData.strokeWidth}"`);
      }

      if (pathData.strokeLinecap) {
        attrs.push(`strokeLinecap="${pathData.strokeLinecap}"`);
      }

      if (pathData.strokeLinejoin) {
        attrs.push(`strokeLinejoin="${pathData.strokeLinejoin}"`);
      }

      if (pathData.fill && pathData.fill !== 'none') {
        attrs.push(`fill="${pathData.fill === 'currentColor' ? 'currentColor' : pathData.fill}"`);
      }

      return `    <path\n      ${attrs.join('\n      ')}\n    />`;
    })
    .join('\n');

  const code = `/**
 * ${componentName} Icon (${icon.size}px)
 *
 * @example
 * \`\`\`tsx
 * import { ${componentName} } from '@figui3/icons/${icon.size}';
 *
 * <${componentName} />
 * \`\`\`
 */

import { createIcon } from '../createIcon';

export const ${componentName} = createIcon({
  path: (
    <>
${pathElements}
    </>
  ),
  displayName: '${componentName}',
  defaultSize: ${icon.size},
});
`;

  return { componentName, code };
}

// Group icons by size
const iconsBySize = {
  16: [],
  24: [],
};

for (const icon of iconsData) {
  const size = icon.size === 24 ? 24 : 16;
  iconsBySize[size].push(icon);
}

// Generate components
const generated = {
  16: [],
  24: [],
};

for (const [size, icons] of Object.entries(iconsBySize)) {
  console.log(`\nGenerating ${icons.length} ${size}px icons...`);

  for (const icon of icons) {
    try {
      const { componentName, code } = generateComponent(icon);
      const fileName = `${componentName}.tsx`;
      const outputPath = path.join(size === '16' ? dir16 : dir24, fileName);

      fs.writeFileSync(outputPath, code);
      generated[size].push(componentName);

      console.log(`  ✓ ${componentName} (${icon.name})`);
    } catch (error) {
      console.error(`  ✗ Error generating ${icon.name}:`, error.message);
    }
  }
}

// Update index files
function updateIndexFile(size, componentNames) {
  const indexPath = path.join(size === 16 ? dir16 : dir24, 'index.ts');

  const content = `/**
 * ${size}px Icons
 *
 * ${size === 16 ? 'Standard icons for UI elements' : 'Larger icons for prominent UI elements'}
 */

${componentNames.sort().map((name) => `export { ${name} } from './${name}';`).join('\n')}
`;

  fs.writeFileSync(indexPath, content);
  console.log(`\n✓ Updated ${indexPath}`);
}

if (generated[16].length > 0) {
  updateIndexFile(16, generated[16]);
}

if (generated[24].length > 0) {
  updateIndexFile(24, generated[24]);
}

console.log('\n✅ Done!');
console.log(`\nGenerated:`);
console.log(`  - ${generated[16].length} icons at 16px`);
console.log(`  - ${generated[24].length} icons at 24px`);
console.log(`\nNext steps:`);
console.log(`  1. cd ../../packages/icons`);
console.log(`  2. npm run build`);
console.log(`  3. Check Storybook to verify icons`);
