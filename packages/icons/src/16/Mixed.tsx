/**
 * Mixed Icon (16px)
 *
 * @example
 * ```tsx
 * import { Mixed } from '@figui3/icons/16';
 *
 * <Mixed />
 * ```
 */

import { createIcon } from '../createIcon';

export const Mixed = createIcon({
  path: (
    <>
    <path
      d="M4 8C4 7.72386 4.22386 7.5 4.5 7.5H11.5C11.7761 7.5 12 7.72386 12 8C12 8.27614 11.7761 8.5 11.5 8.5H4.5C4.22386 8.5 4 8.27614 4 8Z"
      fill="black"
    />
    </>
  ),
  displayName: 'Mixed',
  defaultSize: 16,
});
