/**
 * Boolean Icon (24px)
 *
 * @example
 * ```tsx
 * import { Boolean } from '@figui3/icons/24';
 *
 * <Boolean />
 * ```
 */

import { createIcon } from '../createIcon';

export const Boolean = createIcon({
  path: (
    <>
    <path
      d="M5 5H14V9H10C9.44771 9 9 9.44771 9 10V14H5V5ZM9 15H5C4.44771 15 4 14.5523 4 14V5C4 4.44771 4.44771 4 5 4H14C14.5523 4 15 4.44771 15 5V9H19C19.5523 9 20 9.44771 20 10V19C20 19.5523 19.5523 20 19 20H10C9.44771 20 9 19.5523 9 19V15ZM15 10H19V19H10V15H14C14.5523 15 15 14.5523 15 14V10ZM14 10V14H10V10H14Z"
      fill="black"
    />
    </>
  ),
  displayName: 'Boolean',
  defaultSize: 24,
});
