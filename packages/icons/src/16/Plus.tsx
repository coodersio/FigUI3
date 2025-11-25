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
    <>
    <path
      d="M8.5 2.5C8.5 2.22386 8.27614 2 8 2C7.72386 2 7.5 2.22386 7.5 2.5V7.5H2.5C2.22386 7.5 2 7.72386 2 8C2 8.27614 2.22386 8.5 2.5 8.5H7.5V13.5C7.5 13.7761 7.72386 14 8 14C8.27614 14 8.5 13.7761 8.5 13.5V8.5H13.5C13.7761 8.5 14 8.27614 14 8C14 7.72386 13.7761 7.5 13.5 7.5H8.5V2.5Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Plus',
  defaultSize: 16,
});
