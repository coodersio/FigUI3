/**
 * BorderMediumSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { BorderMediumSmall } from '@figui3/icons/24';
 *
 * <BorderMediumSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const BorderMediumSmall = createIcon({
  path: (
    <>
    <path
      d="M5 11C5 10.4477 5.44772 10 6 10H18C18.5523 10 19 10.4477 19 11V13C19 13.5523 18.5523 14 18 14H6C5.44772 14 5 13.5523 5 13V11ZM7 11H6V12V13H7H17H18V12V11H17H7Z"
      fill="black"
    />
    </>
  ),
  displayName: 'BorderMediumSmall',
  defaultSize: 24,
});
