/**
 * ChevronUp Icon (16px)
 *
 * @example
 * ```tsx
 * import { ChevronUp } from '@figui3/icons/16';
 *
 * <ChevronUp />
 * ```
 */

import { createIcon } from '../createIcon';

export const ChevronUp = createIcon({
  path: (
    <>
    <path
      d="M5.52535 8.52514C5.33009 8.7204 5.33009 9.03698 5.52535 9.23225C5.72062 9.42751 6.0372 9.42751 6.23246 9.23225L8.00023 7.46448L9.768 9.23225C9.96326 9.42751 10.2798 9.42751 10.4751 9.23225C10.6704 9.03698 10.6704 8.7204 10.4751 8.52514L8.35378 6.40382L8.00023 6.05027L7.64668 6.40382L5.52535 8.52514Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'ChevronUp',
  defaultSize: 16,
});
