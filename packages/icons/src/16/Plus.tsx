/**
 * Plus Icon (16px)
 *
 * @example
 * ```tsx
 * import { Plus } from '@figui3/icons/16';
 *
 * <Plus />
 * ```
 */

import { createIcon } from '../createIcon';

export const Plus = createIcon({
  path: (
    <path
      d="M8 3V13M3 8H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'Plus',
  defaultSize: 16,
});
