/**
 * StrokeEndNone Icon (16px)
 *
 * @example
 * ```tsx
 * import { StrokeEndNone } from '@figui3/icons/16';
 *
 * <StrokeEndNone />
 * ```
 */

import { createIcon } from '../createIcon';

export const StrokeEndNone = createIcon({
  path: (
    <>
    <path
      d="M0 8C0 7.72386 0.223858 7.5 0.5 7.5H35.5C35.7761 7.5 36 7.72386 36 8C36 8.27614 35.7761 8.5 35.5 8.5H0.5C0.223858 8.5 0 8.27614 0 8Z"
      fill="black"
    />
    </>
  ),
  displayName: 'StrokeEndNone',
  defaultSize: 16,
});
