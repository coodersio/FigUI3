/**
 * Search Icon (16px)
 *
 * @example
 * ```tsx
 * import { Search } from '@figui3/icons/16';
 *
 * <Search />
 * ```
 */

import { createIcon } from '../createIcon';

export const Search = createIcon({
  path: (
    <>
      <circle
        cx="7"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L13 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  displayName: 'Search',
  defaultSize: 16,
});
