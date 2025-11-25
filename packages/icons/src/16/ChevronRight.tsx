/**
 * ChevronRight Icon (16px)
 *
 * @example
 * ```tsx
 * import { ChevronRight } from '@figui3/icons/16';
 *
 * <ChevronRight />
 * ```
 */

import { createIcon } from '../createIcon';

export const ChevronRight = createIcon({
  path: (
    <>
    <path
      d="M6.76754 5.52511C6.9628 5.32985 7.27938 5.32985 7.47465 5.52511L9.59596 7.64643L9.94952 7.99999L9.59596 8.35354L7.47465 10.4749C7.27938 10.6701 6.9628 10.6701 6.76754 10.4749C6.57228 10.2796 6.57228 9.96302 6.76754 9.76775L8.53531 7.99999L6.76754 6.23222C6.57228 6.03695 6.57228 5.72037 6.76754 5.52511Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'ChevronRight',
  defaultSize: 16,
});
