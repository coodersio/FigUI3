/**
 * Close Icon (16px)
 *
 * @example
 * ```tsx
 * import { Close } from '@figui3/icons/16';
 *
 * <Close />
 * ```
 */

import { createIcon } from '../createIcon';

export const Close = createIcon({
  path: (
    <path
      d="M4 4L12 12M12 4L4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'Close',
  defaultSize: 16,
});
