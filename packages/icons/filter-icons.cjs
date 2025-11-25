const fs = require('fs');
const data = require('./icons.json');

// Filter only valid icons
const validIcons = data.filter(icon => {
  // Only 16px and 24px icons
  if (icon.size !== 16 && icon.size !== 24) return false;
  // Only icons with proper naming (starts with 'icon.')
  if (!icon.name.startsWith('icon.')) return false;
  // Must have paths
  if (!icon.paths || icon.paths.length === 0) return false;
  return true;
});

// Remove duplicates (keep first occurrence)
const seen = new Set();
const uniqueIcons = validIcons.filter(icon => {
  if (seen.has(icon.name)) {
    return false;
  }
  seen.add(icon.name);
  return true;
});

console.log('Valid icons found:', validIcons.length);
console.log('Unique icons (after deduplication):', uniqueIcons.length);
console.log('  16px:', uniqueIcons.filter(i => i.size === 16).length);
console.log('  24px:', uniqueIcons.filter(i => i.size === 24).length);

// Save filtered data
fs.writeFileSync('icons-filtered.json', JSON.stringify(uniqueIcons, null, 2));
console.log('\nFiltered data saved to icons-filtered.json');

// Show first 20
console.log('\nFirst 20 unique icons:');
uniqueIcons.slice(0, 20).forEach((icon, i) => {
  console.log('  ' + (i+1) + '.', icon.name);
});
