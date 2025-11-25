/**
 * Line Icon (24px)
 *
 * @example
 * ```tsx
 * import { Line } from '@figui3/icons/24';
 *
 * <Line />
 * ```
 */

import { createIcon } from '../createIcon';

export const Line = createIcon({
  path: (
    <>
    <path
      d="M19.8536 4.14645C20.0488 4.34171 20.0488 4.65829 19.8536 4.85355L4.85355 19.8536C4.65829 20.0488 4.34171 20.0488 4.14645 19.8536C3.95118 19.6583 3.95118 19.3417 4.14645 19.1464L19.1464 4.14645C19.3417 3.95118 19.6583 3.95118 19.8536 4.14645Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Line',
  defaultSize: 24,
});
