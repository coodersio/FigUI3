/**
 * Italic Icon (24px)
 *
 * @example
 * ```tsx
 * import { Italic } from '@figui3/icons/24';
 *
 * <Italic />
 * ```
 */

import { createIcon } from '../createIcon';

export const Italic = createIcon({
  path: (
    <>
    <path
      d="M10 6.5C10 6.22386 10.2239 6 10.5 6H13H15.5C15.7761 6 16 6.22386 16 6.5C16 6.77614 15.7761 7 15.5 7H13.4173L11.5991 17H13.5C13.7761 17 14 17.2239 14 17.5C14 17.7761 13.7761 18 13.5 18H11H8.5C8.22386 18 8 17.7761 8 17.5C8 17.2239 8.22386 17 8.5 17H10.5827L12.4009 7H10.5C10.2239 7 10 6.77614 10 6.5Z"
      fill="black"
    />
    </>
  ),
  displayName: 'Italic',
  defaultSize: 24,
});
