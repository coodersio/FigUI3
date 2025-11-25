/**
 * DropShadowTopLeftSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { DropShadowTopLeftSmall } from '@figui3/icons/24';
 *
 * <DropShadowTopLeftSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const DropShadowTopLeftSmall = createIcon({
  path: (
    <>
    <path
      d="M17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM7 5C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7Z"
      fill="currentColor"
    />
    <path
      d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17L5 7C5 5.89543 5.89543 5 7 5H17C17 3.89543 16.1046 3 15 3H5Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'DropShadowTopLeftSmall',
  defaultSize: 24,
});
