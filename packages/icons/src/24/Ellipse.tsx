/**
 * Ellipse Icon (24px)
 *
 * @example
 * ```tsx
 * import { Ellipse } from '@figui3/icons/24';
 *
 * <Ellipse />
 * ```
 */

import { createIcon } from '../createIcon';

export const Ellipse = createIcon({
  path: (
    <>
    <path
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      fill="black"
    />
    </>
  ),
  displayName: 'Ellipse',
  defaultSize: 24,
});
