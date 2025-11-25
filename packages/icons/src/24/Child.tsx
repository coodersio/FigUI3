/**
 * Child Icon (24px)
 *
 * @example
 * ```tsx
 * import { Child } from '@figui3/icons/24';
 *
 * <Child />
 * ```
 */

import { createIcon } from '../createIcon';

export const Child = createIcon({
  path: (
    <>
    <path
      d="M11.5 6C11.7761 6 12 6.22386 12 6.5V11C12 11.5523 12.4477 12 13 12H17.5C17.7761 12 18 12.2239 18 12.5C18 12.7761 17.7761 13 17.5 13H13C11.8954 13 11 12.1046 11 11V6.5C11 6.22386 11.2239 6 11.5 6Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Child',
  defaultSize: 24,
});
