/**
 * Text Icon (16px)
 *
 * @example
 * ```tsx
 * import { Text } from '@figui3/icons/16';
 *
 * <Text />
 * ```
 */

import { createIcon } from '../createIcon';

export const Text = createIcon({
  path: (
    <>
    <path
      d="M3 3.5C3 3.22386 3.22386 3 3.5 3H8H12.5C12.7761 3 13 3.22386 13 3.5V5C13 5.27614 12.7761 5.5 12.5 5.5C12.2239 5.5 12 5.27614 12 5V4H8.5V12H9.5C9.77614 12 10 12.2239 10 12.5C10 12.7761 9.77614 13 9.5 13H8H6.5C6.22386 13 6 12.7761 6 12.5C6 12.2239 6.22386 12 6.5 12H7.5V4H4V5C4 5.27614 3.77614 5.5 3.5 5.5C3.22386 5.5 3 5.27614 3 5V3.5Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Text',
  defaultSize: 16,
});
