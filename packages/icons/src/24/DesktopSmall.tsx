/**
 * DesktopSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { DesktopSmall } from '@figui3/icons/24';
 *
 * <DesktopSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const DesktopSmall = createIcon({
  path: (
    <>
    <path
      d="M6 15V8H18V15H6ZM5 7.5C5 7.22386 5.22386 7 5.5 7H18.5C18.7761 7 19 7.22386 19 7.5V15.5C19 15.7761 18.7761 16 18.5 16H14V17H14.5C14.7761 17 15 17.2239 15 17.5C15 17.7761 14.7761 18 14.5 18H13.5H10.5H9.5C9.22386 18 9 17.7761 9 17.5C9 17.2239 9.22386 17 9.5 17H10V16H5.5C5.22386 16 5 15.7761 5 15.5V7.5ZM11 16V17H13V16H11Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'DesktopSmall',
  defaultSize: 24,
});
