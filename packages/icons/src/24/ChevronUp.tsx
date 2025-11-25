/**
 * ChevronUp Icon (24px)
 *
 * @example
 * ```tsx
 * import { ChevronUp } from '@figui3/icons/24';
 *
 * <ChevronUp />
 * ```
 */

import { createIcon } from '../createIcon';

export const ChevronUp = createIcon({
  path: (
    <>
    <path
      d="M11.6464 10.1464C11.8417 9.95118 12.1583 9.95118 12.3536 10.1464L14.3536 12.1464C14.5488 12.3417 14.5488 12.6583 14.3536 12.8536C14.1583 13.0488 13.8417 13.0488 13.6464 12.8536L12 11.2071L10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8535C9.45118 12.6583 9.45118 12.3417 9.64645 12.1464L11.6464 10.1464Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'ChevronUp',
  defaultSize: 24,
});
