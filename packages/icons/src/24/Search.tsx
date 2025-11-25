/**
 * Search Icon (24px)
 *
 * @example
 * ```tsx
 * import { Search } from '@figui3/icons/24';
 *
 * <Search />
 * ```
 */

import { createIcon } from '../createIcon';

export const Search = createIcon({
  path: (
    <>
      <circle
        cx="10"
        cy="10"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 14.5L19 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  displayName: 'Search',
  defaultSize: 24,
});
