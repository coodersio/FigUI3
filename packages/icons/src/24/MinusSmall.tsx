/**
 * MinusSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { MinusSmall } from '@figui3/icons/24';
 *
 * <MinusSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const MinusSmall = createIcon({
  path: (
    <>
    <path
      d="M18 12C18 12.2761 17.7761 12.5 17.5 12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H17.5C17.7761 11.5 18 11.7239 18 12Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'MinusSmall',
  defaultSize: 24,
});
