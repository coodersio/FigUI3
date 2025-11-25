/**
 * Avatar Component Types
 *
 * Type definitions for the Avatar component from FigUI3 Design System
 */

/**
 * Avatar color variants
 */
export type AvatarVariant =
  | 'photo'           // User photo
  | 'purple'          // Purple background
  | 'blue'            // Blue background
  | 'pink'            // Pink background
  | 'red'             // Red background
  | 'yellow'          // Yellow background
  | 'green'           // Green background
  | 'grey'            // Grey background
  | 'org'             // Organization
  | 'overflow-unread' // Overflow indicator with unread
  | 'overflow-read';  // Overflow indicator read

/**
 * Avatar size variants
 */
export type AvatarSize = 'small' | 'default' | 'large';

/**
 * Avatar shape variants
 */
export type AvatarShape = 'circle' | 'square';

/**
 * Avatar state variants
 */
export type AvatarState =
  | 'default'
  | 'disabled'
  | 'dash'
  | 'design'
  | 'spotlight'
  | 'audio-calling';

/**
 * Avatar component props
 */
export interface AvatarProps {
  /**
   * Visual variant of the avatar
   * @default 'grey'
   */
  variant?: AvatarVariant;

  /**
   * Size of the avatar
   * - small: 16px
   * - default: 24px
   * - large: 32px
   * @default 'default'
   */
  size?: AvatarSize;

  /**
   * Shape of the avatar
   * @default 'circle'
   */
  shape?: AvatarShape;

  /**
   * State of the avatar
   * @default 'default'
   */
  state?: AvatarState;

  /**
   * Image source for photo variant
   */
  src?: string;

  /**
   * Alt text for the image
   */
  alt?: string;

  /**
   * Initials to display (1-2 characters)
   */
  initials?: string;

  /**
   * Additional CSS class name
   */
  className?: string;
}
