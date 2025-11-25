/**
 * PolygonSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { PolygonSmall } from '@figui3/icons/24';
 *
 * <PolygonSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const PolygonSmall = createIcon({
  path: (
    <>
    <path
      d="M12.0003 6.9989L6.23303 16.9803H17.7673L12.0003 6.9989ZM12.4873 5.84299C12.2708 5.4682 11.7298 5.46819 11.5132 5.84298L4.98792 17.1364C4.77124 17.5114 5.04186 17.9803 5.47496 17.9803H18.5253C18.9584 17.9803 19.229 17.5114 19.0124 17.1364L12.4873 5.84299Z"
      fill="black"
    />
    </>
  ),
  displayName: 'PolygonSmall',
  defaultSize: 24,
});
