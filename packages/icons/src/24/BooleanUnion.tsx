/**
 * BooleanUnion Icon (24px)
 *
 * @example
 * ```tsx
 * import { BooleanUnion } from '@figui3/icons/24';
 *
 * <BooleanUnion />
 * ```
 */

import { createIcon } from '../createIcon';

export const BooleanUnion = createIcon({
  path: (
    <>
    <path
      d="M14 5H5V14H10V19H19V10H14V5Z"
      fill="currentColor"
    />
    <path
      d="M10 14V15V19H19V10L15 10H14V9V5L5 5V14H9H10ZM4 5V14C4 14.5523 4.44772 15 5 15H8H9V16V19C9 19.5523 9.44772 20 10 20H19C19.5523 20 20 19.5523 20 19V10C20 9.44771 19.5523 9 19 9H16H15V8V5C15 4.44772 14.5523 4 14 4H5C4.44771 4 4 4.44772 4 5Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'BooleanUnion',
  defaultSize: 24,
});
