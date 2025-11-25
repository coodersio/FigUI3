/**
 * Close Icon (24px)
 *
 * @example
 * ```tsx
 * import { Close } from '@figui3/icons/24';
 *
 * <Close />
 * ```
 */

import { createIcon } from '../createIcon';

export const Close = createIcon({
  path: (
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  displayName: 'Close',
  defaultSize: 24,
});
