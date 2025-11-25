/**
 * EllipseSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { EllipseSmall } from '@figui3/icons/24';
 *
 * <EllipseSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const EllipseSmall = createIcon({
  path: (
    <>
    <path
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'EllipseSmall',
  defaultSize: 24,
});
