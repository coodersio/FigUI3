/**
 * Polygon Icon (24px)
 *
 * @example
 * ```tsx
 * import { Polygon } from '@figui3/icons/24';
 *
 * <Polygon />
 * ```
 */

import { createIcon } from '../createIcon';

export const Polygon = createIcon({
  path: (
    <>
    <path
      d="M12.0001 4.5L4.20586 18H19.7943L12.0001 4.5ZM12.6496 3.625C12.3609 3.125 11.6392 3.125 11.3506 3.625L3.12333 17.875C2.83465 18.375 3.1955 19 3.77285 19H20.2273C20.8047 19 21.1655 18.375 20.8769 17.875L12.6496 3.625Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Polygon',
  defaultSize: 24,
});
