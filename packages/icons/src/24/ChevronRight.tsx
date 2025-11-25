/**
 * ChevronRight Icon (24px)
 *
 * @example
 * ```tsx
 * import { ChevronRight } from '@figui3/icons/24';
 *
 * <ChevronRight />
 * ```
 */

import { createIcon } from '../createIcon';

export const ChevronRight = createIcon({
  path: (
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'ChevronRight',
  defaultSize: 24,
});
