/**
 * ChevronDown Icon (24px)
 *
 * @example
 * ```tsx
 * import { ChevronDown } from '@figui3/icons/24';
 *
 * <ChevronDown />
 * ```
 */

import { createIcon } from '../createIcon';

export const ChevronDown = createIcon({
  path: (
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'ChevronDown',
  defaultSize: 24,
});
