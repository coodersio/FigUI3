/**
 * ChevronDown Icon (16px)
 *
 * @example
 * ```tsx
 * import { ChevronDown } from '@figui3/icons/16';
 *
 * <ChevronDown size={20} />
 * ```
 */

import { createIcon } from '../createIcon';

export const ChevronDown = createIcon({
  path: (
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'ChevronDown',
  defaultSize: 16,
});
