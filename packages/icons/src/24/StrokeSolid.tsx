/**
 * StrokeSolid Icon (24px)
 *
 * @example
 * ```tsx
 * import { StrokeSolid } from '@figui3/icons/24';
 *
 * <StrokeSolid />
 * ```
 */

import { createIcon } from '../createIcon';

export const StrokeSolid = createIcon({
  path: (
    <>
    <path
      d="M5 11.5C5 11.2239 5.22386 11 5.5 11H18.5C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H5.5C5.22386 12 5 11.7761 5 11.5Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'StrokeSolid',
  defaultSize: 24,
});
