/**
 * BorderLargeSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { BorderLargeSmall } from '@figui3/icons/24';
 *
 * <BorderLargeSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const BorderLargeSmall = createIcon({
  path: (
    <>
    <path
      d="M5 10C5 9.44772 5.44772 9 6 9H18C18.5523 9 19 9.44772 19 10V14C19 14.5523 18.5523 15 18 15H6C5.44772 15 5 14.5523 5 14V10ZM7 10H6V11V13V14H7H17H18V13V11V10H17H7Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'BorderLargeSmall',
  defaultSize: 24,
});
