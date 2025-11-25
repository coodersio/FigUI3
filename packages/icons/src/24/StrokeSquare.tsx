/**
 * StrokeSquare Icon (24px)
 *
 * @example
 * ```tsx
 * import { StrokeSquare } from '@figui3/icons/24';
 *
 * <StrokeSquare />
 * ```
 */

import { createIcon } from '../createIcon';

export const StrokeSquare = createIcon({
  path: (
    <>
    <path
      d="M19 16.5C19 16.7761 18.7761 17 18.5 17H6.5C5.67157 17 5 16.3284 5 15.5V8.5C5 7.67157 5.67157 7 6.5 7H18.5C18.7761 7 19 7.22386 19 7.5C19 7.77614 18.7761 8 18.5 8H6.5C6.22386 8 6 8.22386 6 8.5V15.5C6 15.7761 6.22386 16 6.5 16H18.5C18.7761 16 19 16.2239 19 16.5Z"
      fill="black"
    />
    </>
  ),
  displayName: 'StrokeSquare',
  defaultSize: 24,
});
