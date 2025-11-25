/**
 * Template Icon (24px)
 *
 * @example
 * ```tsx
 * import { Template } from '@figui3/icons/24';
 *
 * <Template />
 * ```
 */

import { createIcon } from '../createIcon';

export const Template = createIcon({
  path: (
    <>
    <path
      d="M6 6H18C18.5523 6 19 6.44771 19 7V10H5V7C5 6.44771 5.44771 6 6 6ZM5 11V17C5 17.5523 5.44771 18 6 18H9V11H5ZM10 18H18C18.5523 18 19 17.5523 19 17V11H10V18ZM4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z"
      fill="currentColor"
    />
    </>
  ),
  displayName: 'Template',
  defaultSize: 24,
});
