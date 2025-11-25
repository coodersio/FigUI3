/**
 * DropShadowTopSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { DropShadowTopSmall } from '@figui3/icons/24';
 *
 * <DropShadowTopSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const DropShadowTopSmall = createIcon({
  path: (
    <>
    <path
      d="M17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM7 5C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7Z"
      fill="currentColor"
    />
    <path
      d="M7 2C5.89543 2 5 2.89543 5 4V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V4C19 2.89543 18.1046 2 17 2H7Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'DropShadowTopSmall',
  defaultSize: 24,
});
