/**
 * Portrait Icon (24px)
 *
 * @example
 * ```tsx
 * import { Portrait } from '@figui3/icons/24';
 *
 * <Portrait />
 * ```
 */

import { createIcon } from '../createIcon';

export const Portrait = createIcon({
  path: (
    <>
    <path
      d="M15 5H9C8.44772 5 8 5.44772 8 6V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V6C16 5.44772 15.5523 5 15 5ZM9 4C7.89543 4 7 4.89543 7 6V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V6C17 4.89543 16.1046 4 15 4H9Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Portrait',
  defaultSize: 24,
});
