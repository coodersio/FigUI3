/**
 * Check Icon (16px)
 *
 * @example
 * ```tsx
 * import { Check } from '@figui3/icons/16';
 *
 * <Check color="var(--color-icon-success)" />
 * ```
 */

import { createIcon } from '../createIcon';

export const Check = createIcon({
  path: (
    <path
      d="M4 8L7 11L12 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'Check',
  defaultSize: 16,
});
