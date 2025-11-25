/**
 * Unread Icon (16px)
 *
 * @example
 * ```tsx
 * import { Unread } from '@figui3/icons/16';
 *
 * <Unread />
 * ```
 */

import { createIcon } from '../createIcon';

export const Unread = createIcon({
  path: (
    <>
    <path
      d="M5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8Z"
      fill="#007BE5"
    />
    </>
  ),
  displayName: 'Unread',
  defaultSize: 16,
});
