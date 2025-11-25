/**
 * Stop Icon (24px)
 *
 * @example
 * ```tsx
 * import { Stop } from '@figui3/icons/24';
 *
 * <Stop />
 * ```
 */

import { createIcon } from '../createIcon';

export const Stop = createIcon({
  path: (
    <>
    <path
      d="M18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Stop',
  defaultSize: 24,
});
