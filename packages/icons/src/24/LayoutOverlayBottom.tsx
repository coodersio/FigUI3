/**
 * LayoutOverlayBottom Icon (24px)
 *
 * @example
 * ```tsx
 * import { LayoutOverlayBottom } from '@figui3/icons/24';
 *
 * <LayoutOverlayBottom />
 * ```
 */

import { createIcon } from '../createIcon';

export const LayoutOverlayBottom = createIcon({
  path: (
    <>
    <path
      d="M8 5H16C16.5523 5 17 5.44772 17 6V14H7V6C7 5.44772 7.44772 5 8 5ZM6 15V14V6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V14V15V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V15ZM17 15V18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18V15H17Z"
      fill="black"
    />
    <path
      d="M6 14H18V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V14Z"
      fill="black"
    />
    </>
  ),
  displayName: 'LayoutOverlayBottom',
  defaultSize: 24,
});
