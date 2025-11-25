/**
 * RectangleSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { RectangleSmall } from '@figui3/icons/24';
 *
 * <RectangleSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const RectangleSmall = createIcon({
  path: (
    <>
    <path
      d="M16.5 7H7.5C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5V7.5C17 7.22386 16.7761 7 16.5 7ZM7.5 6C6.67157 6 6 6.67157 6 7.5V16.5C6 17.3284 6.67157 18 7.5 18H16.5C17.3284 18 18 17.3284 18 16.5V7.5C18 6.67157 17.3284 6 16.5 6H7.5Z"
      fill="black"
    />
    </>
  ),
  displayName: 'RectangleSmall',
  defaultSize: 24,
});
