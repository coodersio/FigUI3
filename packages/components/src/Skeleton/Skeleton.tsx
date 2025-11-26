import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import styles from './Skeleton.module.css';

const skeleton = cva(styles.skeleton, {
  variants: {
    variant: {
      default: styles.variantDefault,
      text: styles.variantText,
      circle: styles.variantCircle,
      avatar: styles.variantAvatar,
    },
    size: {
      small: styles.sizeSmall,
      medium: styles.sizeMedium,
      large: styles.sizeLarge,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
});

export interface SkeletonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof skeleton> {
  /**
   * Width of the skeleton (can be string with units or number in px)
   */
  width?: string | number;
  /**
   * Height of the skeleton (can be string with units or number in px)
   */
  height?: string | number;
  /**
   * Whether to animate the skeleton
   * @default true
   */
  animate?: boolean;
}

/**
 * Skeleton loading component following Figma UI3 design system
 *
 * @example
 * ```tsx
 * <Skeleton />
 * <Skeleton variant="text" width="60%" />
 * <Skeleton variant="circle" size="large" />
 * <Skeleton variant="avatar" />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, size, width, height, animate = true, style, ...props }, ref) => {
    const skeletonStyle: React.CSSProperties = {
      ...style,
      ...(width !== undefined && {
        width: typeof width === 'number' ? `${width}px` : width,
      }),
      ...(height !== undefined && {
        height: typeof height === 'number' ? `${height}px` : height,
      }),
      ...(animate === false && {
        animation: 'none',
      }),
    };

    return (
      <div
        ref={ref}
        className={skeleton({ className, variant, size })}
        style={skeletonStyle}
        aria-live="polite"
        aria-busy="true"
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
