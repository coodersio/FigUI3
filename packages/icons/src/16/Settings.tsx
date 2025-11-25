/**
 * Settings Icon (16px)
 *
 * @example
 * ```tsx
 * import { Settings } from '@figui3/icons/16';
 *
 * <Settings />
 * ```
 */

import { createIcon } from '../createIcon';

export const Settings = createIcon({
  path: (
    <>
      <circle
        cx="8"
        cy="8"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2V3M8 13V14M13.5 5.5L12.5 6.5M3.5 9.5L2.5 10.5M14 8H13M3 8H2M13.5 10.5L12.5 9.5M3.5 6.5L2.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  displayName: 'Settings',
  defaultSize: 16,
});
