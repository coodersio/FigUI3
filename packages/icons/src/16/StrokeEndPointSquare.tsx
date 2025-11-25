/**
 * StrokeEndPointSquare Icon (16px)
 *
 * @example
 * ```tsx
 * import { StrokeEndPointSquare } from '@figui3/icons/16';
 *
 * <StrokeEndPointSquare />
 * ```
 */

import { createIcon } from '../createIcon';

export const StrokeEndPointSquare = createIcon({
  path: (
    <>
    <path
      d="M0 3.5C0 3.22386 0.223858 3 0.5 3L51 3C51.2761 3 51.5 3.22386 51.5 3.5V12.5C51.5 12.7761 51.2761 13 51 13L0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12L50.5 12V4L0.5 4C0.223858 4 0 3.77614 0 3.5Z"
      fill="black"
    />
    </>
  ),
  displayName: 'StrokeEndPointSquare',
  defaultSize: 16,
});
