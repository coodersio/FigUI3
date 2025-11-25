/**
 * StrokeLineArrow Icon (24px)
 *
 * @example
 * ```tsx
 * import { StrokeLineArrow } from '@figui3/icons/24';
 *
 * <StrokeLineArrow />
 * ```
 */

import { createIcon } from '../createIcon';

export const StrokeLineArrow = createIcon({
  path: (
    <>
    <path
      d="M8.85355 8.14626C9.04878 8.34155 9.04873 8.65813 8.85344 8.85336L6.70728 10.9989L18.5 10.9998C18.7762 10.9998 19 11.2237 19 11.4998C19 11.7759 18.7761 11.9998 18.5 11.9998L6.7069 11.9989L8.85355 14.1463C9.04878 14.3416 9.04873 14.6581 8.85343 14.8534C8.65814 15.0486 8.34155 15.0485 8.14632 14.8532L5.14639 11.8523C4.95116 11.657 4.95121 11.3404 5.1465 11.1452L8.14644 8.14615C8.34173 7.95092 8.65831 7.95096 8.85355 8.14626Z"
      fill="black"
    />
    </>
  ),
  displayName: 'StrokeLineArrow',
  defaultSize: 24,
});
