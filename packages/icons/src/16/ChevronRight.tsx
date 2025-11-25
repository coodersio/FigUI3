/**
 * ChevronRight Icon (16px)
 *
 * @example
 * ```tsx
 * import { ChevronRight } from '@figui3/icons/16';
 *
 * <ChevronRight size={20} color="var(--color-icon-brand)" />
 * ```
 */

import { createIcon } from '../createIcon';

export const ChevronRight = createIcon({
  path: (
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'ChevronRight',
  defaultSize: 16,
});
