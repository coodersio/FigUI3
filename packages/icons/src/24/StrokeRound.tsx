/**
 * StrokeRound Icon (24px)
 *
 * @example
 * ```tsx
 * import { StrokeRound } from '@figui3/icons/24';
 *
 * <StrokeRound />
 * ```
 */

import { createIcon } from '../createIcon';

export const StrokeRound = createIcon({
  path: (
    <>
    <path
      d="M19 7.5C19 7.22386 18.7761 7 18.5 7H10C7.23858 7 5 9.23858 5 12C5 14.7614 7.23858 17 10 17H18.5C18.7761 17 19 16.7761 19 16.5C19 16.2239 18.7761 16 18.5 16H10C7.79086 16 6 14.2091 6 12C6 9.79086 7.79086 8 10 8H18.5C18.7761 8 19 7.77614 19 7.5Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'StrokeRound',
  defaultSize: 24,
});
