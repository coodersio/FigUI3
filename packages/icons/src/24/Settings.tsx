/**
 * Settings Icon (24px)
 *
 * @example
 * ```tsx
 * import { Settings } from '@figui3/icons/24';
 *
 * <Settings />
 * ```
 */

import { createIcon } from '../createIcon';

export const Settings = createIcon({
  path: (
    <>
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3V4M12 20V21M20 9L19 10M5 14L4 15M21 12H20M4 12H3M20 15L19 14M5 10L4 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  displayName: 'Settings',
  defaultSize: 24,
});
