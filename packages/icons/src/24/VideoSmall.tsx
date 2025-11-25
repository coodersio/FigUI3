/**
 * VideoSmall Icon (24px)
 *
 * @example
 * ```tsx
 * import { VideoSmall } from '@figui3/icons/24';
 *
 * <VideoSmall />
 * ```
 */

import { createIcon } from '../createIcon';

export const VideoSmall = createIcon({
  path: (
    <>
    <path
      d="M8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8C7 7.44772 7.44772 7 8 7ZM6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8ZM10.625 15.0307L14.375 12.8656C15.0417 12.4807 15.0417 11.5184 14.375 11.1335L10.625 8.96847C9.95833 8.58357 9.125 9.0647 9.125 9.8345L9.125 14.1646C9.125 14.9344 9.95833 15.4156 10.625 15.0307ZM10.125 9.8345L13.875 11.9996L10.125 14.1646V9.8345Z"
      fill="black"
    />
    </>
  ),
  displayName: 'VideoSmall',
  defaultSize: 24,
});
