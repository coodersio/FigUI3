/**
 * FillSolidSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { FillSolidSmall } from '@figui3/icons/24';
 *
 * <FillSolidSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const FillSolidSmall = createIcon({
  path: (
    <>
    <path
      d="M8 7H16C16.5523 7 17 7.44771 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44771 17 7 16.5523 7 16V8C7 7.44771 7.44771 7 8 7ZM6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8ZM9 15V9H15V15H9ZM8 8.5C8 8.22386 8.22386 8 8.5 8H15.5C15.7761 8 16 8.22386 16 8.5V15.5C16 15.7761 15.7761 16 15.5 16H8.5C8.22386 16 8 15.7761 8 15.5V8.5Z"
      fill="black"
    />
    </>
  ),
  displayName: 'FillSolidSmall',
  defaultSize: 24,
});
