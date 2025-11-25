/**
 * Minus Icon (16px)
 *
 * @example
 * ```tsx
 * import { Minus } from '@figui3/icons/16';
 *
 * <Minus />
 * ```
 */

import { createIcon } from '../createIcon';

export const Minus = createIcon({
  path: (
    <path
      d="M3 8H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'Minus',
  defaultSize: 16,
});
