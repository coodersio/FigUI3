/**
 * BorderSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { BorderSmall } from '@figui3/icons/24';
 *
 * <BorderSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const BorderSmall = createIcon({
  path: (
    <>
    <path
      d="M6 7C6 6.44772 6.44772 6 7 6H7.5H16.5H17C17.5523 6 18 6.44772 18 7V7.5V16.5V17C18 17.5523 17.5523 18 17 18H16.5H7.5H7C6.44772 18 6 17.5523 6 17V16.5V7.5V7ZM9 9V15H15V9H9ZM7.5 7H7V7.5V8V16V16.5V17H7.5H8H16H16.5H17V16.5V16V8V7.5V7H16.5H16H8H7.5ZM8 9V8H9H15H16V9V15V16H15H9H8V15V9Z"
      fill="black"
    />
    </>
  ),
  displayName: 'BorderSmall',
  defaultSize: 24,
});
