/**
 * Avatar Component
 *
 * User avatar component from FigUI3 Design System
 */

import React from 'react';
import type { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.css';

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'grey',
  size = 'default',
  shape = 'circle',
  state = 'default',
  src,
  alt = '',
  initials,
  className = '',
}) => {
  const classNames = [
    styles.avatar,
    styles[`avatar--${size}`],
    styles[`avatar--${shape}`],
    styles[`avatar--${variant}`],
    styles[`avatar--${state}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render photo variant with image
  if (variant === 'photo' && src) {
    return (
      <div className={classNames}>
        <img src={src} alt={alt} className={styles.avatar__image} />
      </div>
    );
  }

  // Render overflow variants
  if (variant === 'overflow-unread' || variant === 'overflow-read') {
    return (
      <div className={classNames}>
        <span className={styles.avatar__overflow}>+</span>
      </div>
    );
  }

  // Render initials or fallback
  return (
    <div className={classNames}>
      {initials && (
        <span className={styles.avatar__initials}>{initials.slice(0, 2)}</span>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
