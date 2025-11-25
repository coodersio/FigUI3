/**
 * LayoutGridRows Icon (24px)
 *
 * @example
 * ```tsx
 * import { LayoutGridRows } from '@figui3/icons/24';
 *
 * <LayoutGridRows />
 * ```
 */

import { createIcon } from '../createIcon';

export const LayoutGridRows = createIcon({
  path: (
    <>
    <path
      d="M5 5H19V8H5V5ZM5 11H19V14H5V11ZM19 17H5V20H19V17Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'LayoutGridRows',
  defaultSize: 24,
});
