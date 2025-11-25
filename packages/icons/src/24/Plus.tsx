/**
 * Plus Icon (24px)
 *
 * @example
 * ```tsx
 * import { Plus } from '@figui3/icons/24';
 *
 * <Plus />
 * ```
 */

import { createIcon } from '../createIcon';

export const Plus = createIcon({
  path: (
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'Plus',
  defaultSize: 24,
});
