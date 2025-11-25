/**
 * FigUI3 Icons
 *
 * Icon components in two sizes (16px and 24px)
 * Import from size-specific modules: @figui3/icons/16 or @figui3/icons/24
 *
 * @example
 * ```tsx
 * // Import 16px icons
 * import { Plus, Close } from '@figui3/icons/16';
 *
 * // Import 24px icons
 * import { Search, Settings } from '@figui3/icons/24';
 *
 * <Plus size={20} color="var(--color-icon-brand)" />
 * <Search size={32} />
 * ```
 */

// Export types
export type { IconProps, CreateIconOptions } from './Icon.types';

// Export createIcon factory (for custom icons)
export { createIcon } from './createIcon';
