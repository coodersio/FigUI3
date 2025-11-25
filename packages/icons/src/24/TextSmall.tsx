/**
 * TextSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { TextSmall } from '@figui3/icons/24';
 *
 * <TextSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const TextSmall = createIcon({
  path: (
    <>
    <path
      d="M6 6.5C6 6.22386 6.22386 6 6.5 6H12H17.5C17.7761 6 18 6.22386 18 6.5V9C18 9.27614 17.7761 9.5 17.5 9.5C17.2239 9.5 17 9.27614 17 9V7H12.5V17H14.5C14.7761 17 15 17.2239 15 17.5C15 17.7761 14.7761 18 14.5 18H12H9.5C9.22386 18 9 17.7761 9 17.5C9 17.2239 9.22386 17 9.5 17H11.5V7H7V9C7 9.27614 6.77614 9.5 6.5 9.5C6.22386 9.5 6 9.27614 6 9V6.5Z"
      fill="black"
    />
    </>
  ),
  displayName: 'TextSmall',
  defaultSize: 24,
});
