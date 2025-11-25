/**
 * Folder Icon (16px)
 *
 * @example
 * ```tsx
 * import { Folder } from '@figui3/icons/16';
 *
 * <Folder />
 * ```
 */

import { createIcon } from '../createIcon';

export const Folder = createIcon({
  path: (
    <>
    <path
      d="M4 4H7V5H4V4ZM3 5V4C3 3.44771 3.44771 3 4 3H7C7.55229 3 8 3.44771 8 4V5H12C12.5523 5 13 5.44771 13 6V11C13 11.5523 12.5523 12 12 12H4C3.44771 12 3 11.5523 3 11V6V5ZM8 6H7H4V11H12V6H8Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Folder',
  defaultSize: 16,
});
