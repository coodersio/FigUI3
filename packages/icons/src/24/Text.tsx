/**
 * Text Icon (24px)
 *
 * @example
 * ```tsx
 * import { Text } from '@figui3/icons/24';
 *
 * <Text />
 * ```
 */

import { createIcon } from '../createIcon';

export const Text = createIcon({
  path: (
    <>
    <path
      d="M4 4.5C4 4.22386 4.22386 4 4.5 4H12H19.5C19.7761 4 20 4.22386 20 4.5V7.5C20 7.77614 19.7761 8 19.5 8C19.2239 8 19 7.77614 19 7.5V5H12.5V19H15C15.2761 19 15.5 19.2239 15.5 19.5C15.5 19.7761 15.2761 20 15 20H12H9C8.72386 20 8.5 19.7761 8.5 19.5C8.5 19.2239 8.72386 19 9 19H11.5V5H5V7.5C5 7.77614 4.77614 8 4.5 8C4.22386 8 4 7.77614 4 7.5V4.5Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Text',
  defaultSize: 24,
});
